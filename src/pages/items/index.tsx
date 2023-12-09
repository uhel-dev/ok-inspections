import PageLayout from "../../../components/mainLayout/PageLayout";
import Link from "next/link";
import Image from "next/image";

export default function Items() {
  return (
    <>
      <PageLayout showBreadcrumbs={false}>
        <section className={`kdev-section`}>
          <div>
            <div>
              <h1 className={`kdev-h1`}>Select the item you want to inspect</h1>
            </div>
          </div>
        </section>


        <section className={`kdev-section`}>
          <div>
            <div className={`grid lg:grid-cols-6 gap-8`}>

              <Link href={`/items/view-item`} className={`grid col-span-2 justify-center items-center border-2 border-black rounded-xl shadow-xl hover:shadow-2xl p-8`}>
                <Image className={`p-8`} src={`/new/view-item.png`} alt={`view item`} width={240} height={240} />
                <div className={`text-3xl text-center font-semibold`}>View item</div>
              </Link>
              <Link href={`/items/create-item`} className={`grid col-span-2 justify-center items-center border-2 border-black rounded-xl shadow-xl hover:shadow-2xl p-8`}>
                <Image className={`p-8`} src={`/new/create-item.png`} alt={`create an item`} width={240} height={240} />
                <div className={`text-3xl text-center font-semibold`}>Create an item</div>
              </Link>
              <Link href={`/items/edit-item`} className={`grid col-span-2 justify-center items-center border-2 border-black rounded-xl shadow-xl hover:shadow-2xl p-8`}>
                <Image className={`p-8`} src={`/new/edit-item.png`} alt={`edit an item`} width={240} height={240} />
                <div className={`text-3xl text-center font-semibold`}>Edit an item</div>
              </Link>
            </div>
          </div>
        </section>



      </PageLayout>
    </>
  )
}