import PageLayout from "../../../components/mainLayout/PageLayout";

export default function Checklists() {
    return (
      <>
        <PageLayout showBreadcrumbs={false}>
            <section className={`kdev-section`}>
                <div>
                  <div>
                    <h1 className={`kdev-h1`}>Choose the right checklist</h1>
                  </div>
                </div>
            </section>


          <section className={`kdev-section`}>
            <div>
              <div className={`grid grid-cols-6`}>
                  <div className={`flex col-span-2`}>
                    View item
                  </div>
                  <div className={`flex col-span-2`}>
                    Create an item
                  </div>
                  <div className={`flex col-span-2`}>
                    edit an eitem
                  </div>
              </div>
            </div>
          </section>



        </PageLayout>
      </>
    )
}