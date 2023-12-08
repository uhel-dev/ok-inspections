import Image from "next/image";
import SearchTabs from "../../../../../components/search-sections/SearchTabs";
import UspRow from "../../../../../components/USPs/UspRow";
import TyreBrandsGrid from "../../../../../components/grids/TyreBrandsGrid";
import CarMakesList from "../../../../../components/shared/CarMakesList";
import ServicesWrapper from "../../../../../components/shared/ServicesWrapper";
import PageLayout from "../../../../../components/mainLayout/PageLayout";
import { CustomMetadata } from "../../../../../components/mainLayout/SeoMetadata";

export default function WheelServices() {
  const wheelServicesMetadata: CustomMetadata = {
    title: "Fast & Reliable - All Wheel Services You May Need | 24h Tyres",
    description: "Your one-stop shop for safe and fast tyre & wheel services. Experience the best with 24h Tyres.",
    url: "/tyres/services/wheel-services",
    imageUrl: "https://24h-tyres.co.uk/wheel-services.png",
    canonical: "https://24h-tyres.co.uk/tyres/services/wheel-services",
  };

  return (
    <>
      <PageLayout metadata={wheelServicesMetadata}>
        <section className={`kdev-section`}>
          <div className="w-full lg:pt-6 flex items-center justify-center">
            <div className="w-full flex flex-col gap-2">
              <h1 className={`kdev-h1`}>24h Tyres - Wheel Services</h1>
              <Image src={`/tyres-from-different-angle.jpg`} alt={`Image of Tyres in a different angle`} width={1080} height={320} className={`w-full min-h-2`}/>
              <SearchTabs/>
              <UspRow/>
              <TyreBrandsGrid/>
              <CarMakesList/>
              <ServicesWrapper/>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}