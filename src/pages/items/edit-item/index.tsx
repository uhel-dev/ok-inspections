import PageLayout from "../../../../components/mainLayout/PageLayout";
import Image from "next/image";
import QRDecoder from "../../../../components/QRDecoder";
import React from "react";
import { useRouter } from "next/router";

export default function EditItem() {

  const router = useRouter();
  const [uniqueIdentifier, setUniqueIdentifier] = React.useState('');

  const handleUniqueIdentifierChange = (event: any) => {
    setUniqueIdentifier(event.target.value);
  }


  function navigateToItem() {
    if (uniqueIdentifier) {
      console.log(`navigate to item ${uniqueIdentifier}`);
      router.push(`/items/view-item/${uniqueIdentifier}`)
    }
  }

  return (
    <PageLayout showBreadcrumbs={false}>
      <section className={`kdev-section`}>
        <div>
          <div>
            <h1 className={`kdev-h1`}>Enter item ID or upload barcode</h1>
          </div>
        </div>
      </section>


      <section className={`kdev-section`}>
        <div className={`w-full`}>
          <div className={`grid grid-cols-1 lg:grid-cols-6 gap-8`}>

            <div className={`grid col-span-1 lg:col-span-3 justify-center items-center border-2 border-black rounded-xl shadow-xl hover:shadow-2xl py-4 lg:py-8`}>
              <QRDecoder/>
            </div>

            <div className={`grid col-span-1 lg:col-span-3 justify-center items-center border-2 border-black rounded-xl shadow-xl hover:shadow-2xl py-4 lg:py-8`}>
              <div className={`flex flex-col`}>
                <div className={`mb-4`}>
                  <label htmlFor="view-item-unique-identifier-input ">
                    <span className={`text-xl font-bold`}>Enter unique identifier</span>
                  </label>
                </div>
                <div className={`flex gap-2 justify-center items-center`}>
                  <input value={uniqueIdentifier} onChange={handleUniqueIdentifierChange} name={`view-item-unique-identifier-input`} type={`text`} className={`border border-200 p-2 lg:min-w-[360px]`}/>
                  <button onClick={navigateToItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}