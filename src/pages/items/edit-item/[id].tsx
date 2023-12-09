import { GetStaticPaths, GetStaticProps } from "next";
import hygraphClient from "../../../../lib/hygraphClient.mjs";
import { gql } from "graphql-request";
import { delay } from "@/utils/delay";
import React, { useEffect, useState } from "react";
import AddChecklistItems from "../../../../components/add-items/AddChecklistItems";
import AddDaysItems from "../../../../components/add-items/AddDaysItems";
import AddAdditionalInformationItem from "../../../../components/add-items/AddAdditionalInformationItem";
import PageLayout from "../../../../components/mainLayout/PageLayout";
import { useRouter } from "next/router";


export default function EditItem({id}: any) {
  const [qrUniqueId, setQrUniqueId] = useState("");
  const [bulletPoints, setBulletPoints] = useState([]);
  const [days, setDays] = useState({  });
  const [checklistItems, setChecklistItems] = useState([]);
  const router = useRouter()

  useEffect(() => {
    hygraphClient.request(
      gql`
      query MyQuery($uniqueIdentifier: String!) {
        items(where: { uniqueIdentifier: $uniqueIdentifier}) {
          content
        }
      }
    `, {uniqueIdentifier: id }).then(data => {
      const {items }: any = data;
      const content = items[0].content;
      setQrUniqueId(id);
      setBulletPoints(content.additionalInfo);
      setDays(content.days);
      setChecklistItems(content.checklistItems);
    })
  }, [])

  async function editInspectionForm() {
    const newContent = {
      url: `https://ok-inspections.co.uk/find/${qrUniqueId}`,
      checklistItems: checklistItems,
      additionalInfo: bulletPoints,
      days: days,
    };
    const newItem = {
      uniqueIdentifier: qrUniqueId,
      content: newContent,
    };
    await hygraphClient.request(
      gql`
        mutation MyMutation($uniqueIdentifier: String, $content: Json) {
          updateManyItems(
            data: {uniqueIdentifier: $uniqueIdentifier, content: $content}, 
            where: {uniqueIdentifier: $uniqueIdentifier}
          ) {
            count
          }
        }
      `,
      { uniqueIdentifier: qrUniqueId, content: newContent }
    ).then(data => {
      return hygraphClient.request(
        gql`
        mutation PublishManyItems($uniqueIdentifier: String) {
          publishManyItems(where: {uniqueIdentifier: $uniqueIdentifier}, to: PUBLISHED) {
            count
          }
        }
      `, { uniqueIdentifier: qrUniqueId });
    })
      .then(publishData => console.log(publishData))
      .catch(err => console.log(err));
  }

  function deleteInspectionForm() {
    hygraphClient.request(
      gql`
        mutation MyMutation($uniqueIdentifier: String) {
          deleteManyItems(where: {uniqueIdentifier: $uniqueIdentifier}) {
            count
          }
        }
      `,
      { uniqueIdentifier: qrUniqueId }
    ).then(async data => {
      console.log(data)
      router.push('/items')
    }).catch(err => console.log(err));
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
          <div className={`flex justify-end`}>
            <div className={`flex gap-2`}>
              <button onClick={deleteInspectionForm} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4">Delete Form</button>
              <button onClick={editInspectionForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Edit Form</button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: any = await hygraphClient.request(
    gql`
      query MyQuery() {
         items(first: 100) {
          uniqueIdentifier
        }
      }
    `,
    {}
  );

  await delay(1000);

  const paths = items.map(({ uniqueIdentifier }: any) => {
    return {
      params: {
        id: uniqueIdentifier,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: string = params?.id as string;
  return {
    props: {
      id
    },
  };
};