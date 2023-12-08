import "../../../app/globals.css";
import CustomHeader from "../../../../components/mainLayout/CustomHeader";
import { Breadcrumbs } from "../../../../components/mainLayout/Breadcrumbs";
import { Footer } from "../../../../components/mainLayout/Footer";
import UspRow from "../../../../components/USPs/UspRow";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import CtaBanner from "../../../../components/shared/CtaBanner";
import CarMakesList from "../../../../components/shared/CarMakesList";
import SearchSectionByTyreSize from "../../../../components/search-sections/SearchSectionByTyreSize";
import SeoMetadata, { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import Script from "next/script";
import PageLayout from "../../../../components/mainLayout/PageLayout";

export default function BySize() {
    const findTyresBySizeMetadata: CustomMetadata = {
        title: "Find Tyres by Size - Perfect Fit & Quality | 24h Tyres",
        description: "Easily find tyres that fit your vehicle perfectly. Explore our wide range of sizes for all vehicle types at 24h Tyres.",
        url: "/tyres/find/by-size",
        imageUrl: "https://24h-tyres.co.uk/search-tyres-by-size.jpg",
        canonical: "https://24h-tyres.co.uk/tyres/find/by-size",
        keywords: "tyres by size, find tyres, vehicle tyre size, car tyres, 24h Tyres, tyre selection",
    };

    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Find Tyres by Size",
        image: "https://24h-tyres.co.uk/search-tyres-by-size.jpg",
        description: "Locate the perfect tyres for your vehicle by size. 24h Tyres offers an extensive selection of sizes to fit any vehicle, ensuring optimal performance and safety.",
        url: "https://www.24h-tyres.co.uk/find/by-size",
        logo: "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
        areaServed: {
            "@type": "Country",
            name: "UK",
        },
        serviceType: "Find Tyres by Size",
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

    return (
        <>
            <PageLayout metadata={findTyresBySizeMetadata} jsonLD={jsonLD}>
                <section className={`kdev-section`}>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-full py-4 flex flex-col gap-2">
                            <h1 className={`kdev-h1`}>Find the Perfect Tyres for Your Vehicle by Size</h1>
                            <div className={`flex flex-col gap-4`}>
                                <SearchSectionByTyreSize />
                            </div>
                            <div className={`text-lg`}>
                                Choosing the right tyre size for your car ensures optimal performance and safety. Start by selecting the width, height, and diameter of the tyre you need. Our intuitive tool helps you find the exact match for your
                                vehicle from our extensive inventory. You can also search by{" "}
                                <Link className={`font-semibold`} href={`/tyres/find/by-registration`}>
                                    registration number
                                </Link>
                                ,{" "}
                                <Link className={`font-semibold`} href={`/tyres/brands`}>
                                    tyres brand
                                </Link>{" "}
                                or{" "}
                                <Link className={`font-semibold`} href={`/tyres/find/by-make`}>
                                    car make
                                </Link>
                                .
                            </div>
                            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 py-6`}>
                                <Link className={`btn`} href={CTA_PHONE_NUMBER}>
                                    Call Us
                                </Link>
                                <Link className={`btn`} href={`/how-to-book-an-appointment`}>
                                    How To Book An Appointment
                                </Link>
                                <Link className={`btn`} href={`/tyres`}>
                                    Additional Tyre Services
                                </Link>
                                <Link className={`btn`} href={`/faq`}>
                                    FAQs
                                </Link>
                            </div>
                            <CtaBanner />
                            <CarMakesList />
                            <UspRow />
                        </div>
                    </div>
                </section>
            </PageLayout>
        </>
    );
}
