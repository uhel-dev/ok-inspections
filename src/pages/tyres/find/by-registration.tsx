import "../../../app/globals.css";
import UspRow from "../../../../components/USPs/UspRow";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import CtaBanner from "../../../../components/shared/CtaBanner";
import CarMakesList from "../../../../components/shared/CarMakesList";
import SearchSectionByVehicleNumberPlate
  from "../../../../components/search-sections/SearchSectionByVehicleNumberPlate";
import { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import PageLayout from "../../../../components/mainLayout/PageLayout";

export default function SearchByRegNumber() {

    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Find Tyres by Registration",
        description: "Instantly find the right tyres for your vehicle with just its registration number. Quick, reliable tyre selection at 24h Tyres.",
        url: "https://www.24h-tyres.co.uk/find/by-registration",
        image: "https://24h-tyres.co.uk/search-tyres-by-registration.jpg",
        logo: "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
        areaServed: {
            "@type": "Country",
            name: "UK",
        },
        serviceType: "Find Tyres by Registration",
        hoursAvailable: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
            },
        ],
        provider: {
            "@type": "Organization",
            name: "24h Tyres",
            url: "https://www.24h-tyres.co.uk",
            logo: "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "0208 0792 350",
                contactType: "customer service",
                contactOption: "TollFree",
                areaServed: "GB",
                availableLanguage: "en",
            },
        },
    };

    const findTyresByRegistrationMetadata: CustomMetadata = {
      title: "Find Tyres by Registration - Accurate & Easy | 24h Tyres",
      description: "Instantly find the right tyres for your vehicle with just its registration number. Quick, reliable tyre selection at 24h Tyres.",
      url: "/tyres/find/by-registration",
      imageUrl: "https://24h-tyres.co.uk/search-tyres-by-registration.jpg",
      canonical: "https://24h-tyres.co.uk/tyres/find/by-registration",
      keywords: "tyres by registration, vehicle registration tyres, car tyres, find tyres, 24h Tyres",
    }


    return (
        <>
            <PageLayout metadata={findTyresByRegistrationMetadata} jsonLD={jsonLD}>
                <section className={`kdev-section`}>
                  <div className="w-full flex items-center justify-center">
                    <div className="w-full py-4 flex flex-col gap-2">
                      <h1 className={`kdev-h1`}>Search by Vehicle Number Plate</h1>
                      <div className={`flex flex-col gap-4`}>
                        <SearchSectionByVehicleNumberPlate/>
                      </div>
                      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 py-6`}>
                        <Link className={`btn`} href={CTA_PHONE_NUMBER}>Call Us</Link>
                        <Link className={`btn`} href={`/how-to-book-an-appointment`}>How To Book An Appointment</Link>
                        <Link className={`btn`} href={`/tyres`}>Additional Tyre Services</Link>
                        <Link className={`btn`} href={`/faq`}>FAQs</Link>
                      </div>
                      <CtaBanner/>
                      <CarMakesList/>
                      <UspRow/>
                    </div>
                  </div>
                </section>
            </PageLayout>
        </>
    )
}