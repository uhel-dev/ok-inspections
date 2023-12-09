import PageLayout from "../../../components/mainLayout/PageLayout";
import React, { useState } from "react";
import { useQRCode } from "next-qrcode";
import { v4 as uuidv4 } from "uuid";
import AddChecklistItems from "../../../components/add-items/AddChecklistItems";
import AddDaysItems from "../../../components/add-items/AddDaysItems";
import AddAdditionalInformationItem from "../../../components/add-items/AddAdditionalInformationItem";
import hygraphClient from "../../../lib/hygraphClient.mjs";
import { gql } from "graphql-request";
import { useRouter } from "next/router";



interface ChecklistItem {
  name: string;
  date: string;
  checked: boolean;
}

export interface Item {
  uniqueId: string;
  content: {
    formName: string;
    url: string;
    checklistItems: ChecklistItem[];
    additionalInfo: string;
    days: any;
  }
}

export default function CreateItem() {
  const [qrValue, setQrValue] = useState('');
  const [qrUniqueId, setQrUniqueId] = useState('');
  const [bulletPoints, setBulletPoints] = useState('');
  const [formName, setFormName] = useState('');
  const [days, setDays] = useState({
    Monday: undefined,
    Tuesday: undefined,
    Wednesday: undefined,
    Thursday: undefined,
    Friday: undefined,
    Saturday: undefined,
    Sunday: undefined,
  });
  const [checklistItems, setChecklistItems] = useState([{ name: 'Loose steps or rungs' }, { name: 'Loose or protruding nails' }]);
  const { Canvas } = useQRCode();

  const router = useRouter();

  const generateUniqueQRCode = () => {
    const uniqueID = uuidv4();
    const baseUrl = "https://ok-inspections.co.uk/find/";
    const qrUrl = `${baseUrl}${uniqueID}`;
    setQrValue(qrUrl);
    setQrUniqueId(uniqueID)
  };

  const saveNewInspectionForm = async () => {
    const checklistItemsIn = checklistItems.map((item) => {
      return {
        name: item.name,
        date: '',
        checked: false,
      }
    })

    const newInspectionForm: Item = {
      uniqueId: qrUniqueId,
      content: {
        formName: formName,
        url: qrValue,
        checklistItems: checklistItemsIn,
        additionalInfo: bulletPoints,
        days,
      }
    }


    await hygraphClient.request(
      gql`
        mutation MyMutation($uniqueIdentifier: String!, $content: Json!) {
          createItem(data: {uniqueIdentifier: $uniqueIdentifier, content: $content}) {
            id
          }
        }
      `, { uniqueIdentifier: newInspectionForm.uniqueId, content: newInspectionForm.content })
      .then(async data => {
        const itemId = data.createItem.id;
        return await hygraphClient.request(
          gql`
        mutation PublishItem($id: ID!) {
          publishItem(where: { id: $id }, to: PUBLISHED) {
            id
          }
        }
      `, { id: itemId });
      })
      .then(publishData => {
        console.log(publishData);
        router.push(`/items/view-item/${qrUniqueId}`);
      })
      .catch(err => console.log(err));

  }

  const updateFormName = (formName) => {
    setFormName(formName);
  }

  return (
    <PageLayout showBreadcrumbs={false}>

      <section className={`kdev-section`}>
        <div>
          <div>
            <h1 className={`kdev-h1`}>Define inspection form</h1>
          </div>
        </div>
      </section>

      <section className={`kdev-section`}>
        <div>
          <div>
            <h2 className={`text-2xl font-bold`}>Form Name</h2>
            <input
              value={formName}
              onChange={(e) => updateFormName(e.target.value)}
              type="text"
              className={`w-full p-2 border border-gray-200`}
              required
            />
          </div>
        </div>
      </section>

      <section className={`kdev-section`}>
        <AddChecklistItems checklistItems={checklistItems} setChecklistItems={setChecklistItems}/>
      </section>

      <section className={`kdev-section`}>
        <AddDaysItems days={days} setDays={setDays}/>
      </section>

      <section className={`kdev-section`}>
        <AddAdditionalInformationItem bulletPoints={bulletPoints} updateBulletPoints={(newValue) => setBulletPoints(newValue)}/>
      </section>

      <section className={`kdev-section`}>
        <div className={`w-full`}>
          <h3 className="text-xl font-bold mb-4">Generate Unique QR Code</h3>
          <div className={`grid grid-cols-2`}>
            <div>
              <button onClick={generateUniqueQRCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                Generate QR Code
              </button>
              {qrValue && (
                <p>Unique ID: {qrUniqueId}</p>
              )}
              {qrValue && (
                <div className={`mt-2`}>
                  <Canvas
                    text={qrValue}
                    options={{
                      errorCorrectionLevel: 'M',
                      margin: 3,
                      scale: 4,
                      width: 200,
                      color: {
                        dark: '#020225',
                        light: '#eeffde',
                      },
                    }}
                  />

                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      <section className={`kdev-section`}>
        <div className={`w-full`}>
          <div className={`flex justify-end`}>
            <div>
              <button onClick={saveNewInspectionForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Save Form</button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}