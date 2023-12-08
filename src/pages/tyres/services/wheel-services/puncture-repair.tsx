import "../../../../app/globals.css";

import SearchTabs from "../../../../../components/search-sections/SearchTabs";
import CustomHeader from "../../../../../components/mainLayout/CustomHeader";
import { Breadcrumbs } from "../../../../../components/mainLayout/Breadcrumbs";
import { Footer } from "../../../../../components/mainLayout/Footer";
import UspRow from "../../../../../components/USPs/UspRow";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import CtaBanner from "../../../../../components/shared/CtaBanner";
import { FAQ } from "../../../../../components/shared/FAQ";
import CarMakesList from "../../../../../components/shared/CarMakesList";
import SeoMetadata, { CustomMetadata } from "../../../../../components/mainLayout/SeoMetadata";
import Script from "next/script";
import { FAQuestion } from "../../../../../components/types";

const questions: FAQuestion[] = [
    {
        question: "What does your puncture repair service include?",
        answer: "Our puncture repair service includes inspection of the damaged tyre, removal of the foreign object causing the puncture, patching the damaged area from the inside of the tyre, re-inflation and balancing of the tyre, and a safety check to ensure everything is in good condition."
    },
    {
        question: "Can all punctured tyres be repaired?",
        answer: "Not all punctured tyres can be repaired. The repairability of a tyre largely depends on the size and location of the puncture. Generally, punctures in the tread area can be repaired while those in the sidewall cannot. Our technicians will thoroughly inspect your tyre to assess its repairability."
    },
    {
        question: "How long does a puncture repair take?",
        answer: "The length of a puncture repair service can vary depending on the extent of the damage but typically, it can take about 30 minutes to an hour."
    },
    {
        question: "Can you perform puncture repairs at my location?",
        answer: "Yes, we offer a mobile puncture repair service. Our technicians can come to your location to perform the puncture repair. Please contact us to confirm availability in your area."
    },
    {
        question: "How much does a puncture repair cost?",
        answer: "The cost of a puncture repair can vary depending on factors like the type of tyre and the extent of the damage. Please contact our customer service team for a detailed quote."
    },
    {
        question: "What payment methods do you accept for puncture repairs?",
        answer: "We accept a range of payment methods including major credit cards and debit cards. For more specific information, please refer to our Payment Options section on our website or contact our customer service team."
    },
    {
        question: "Do you offer a warranty on puncture repairs?",
        answer: "Yes, we provide a warranty on our puncture repairs that covers the workmanship and materials used. Note, however, that the warranty does not cover further damage due to continued driving on a flat tyre or a new puncture."
    },
    {
        question: "How can I avoid tyre punctures?",
        answer: "While you can't completely avoid tyre punctures, regular tyre inspections and maintaining proper tyre pressure can help reduce the risk. Additionally, avoid driving over sharp objects and on damaged roads whenever possible."
    },
    {
        question: "What safety measures do your technicians take during puncture repairs?",
        answer: "Our technicians always follow stringent safety protocols during puncture repairs. This includes using appropriate equipment, wearing necessary safety gear, and ensuring the vehicle is safely secured before beginning any repair work."
    }
];


export default function PunctureRepair() {

    const metadata: CustomMetadata = {
        title: "Puncture Repair - 24h Tyres",
        description: "Suffered a puncture? 24h Tyres provides quick and efficient puncture repair services to get you back on the road in no time.",
        url: "/tyres/services/wheel-services/puncture-repair",
        imageUrl: "https://24h-tyres.co.uk/tyres/services/services-puncture-repair.png",
        canonical: "https://24h-tyres.co.uk/tyres/services/wheel-services/puncture-repair"
    }

    const jsonLDForPunctureRepair = {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Puncture Repair - 24h Tyres",
        "image": "https://24h-tyres.co.uk/tyres/services/services-puncture-repair.png",
        "description": "Suffered a puncture? 24h Tyres provides quick and efficient puncture repair services to get you back on the road in no time.",
        "url": "https://24h-tyres.co.uk/tyres/services/wheel-services/puncture-repair",
        "serviceType": "Puncture Repair",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        "areaServed": {
            "@type": "Country",
            "name": "UK"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "GBP",
            "price": "29.99",
            "availability": "http://schema.org/InStock"
        },
    }

    return (
        <>
            <SeoMetadata metadata={metadata}/>
            <Script
              id="app-ld-json"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLDForPunctureRepair, null, "\t"),
              }}
            >
            </Script>
            <CustomHeader/>
            <main className="flex flex-col items-center justify-between justify-center">
                <Breadcrumbs width={"w-4/5"}/>
                <div className="w-full lg:w-4/5 flex items-center justify-center">
                    <div className="w-full p-4 flex flex-col gap-2">
                        <div className={`flex flex-col gap-4`}>
                            <h1 className={`text-3xl lg:text-6xl font-uk-reg-plates font-extrabold`}>
                                Puncture Repair
                            </h1>
                            <div>
                                Can&apos;t make it to the garage? No problem. 24h-tyres.co.uk brings the garage to you with our Puncture Repair service. Welcome to the page where convenience meets excellence.
                            </div>
                            <div>
                                Our Puncture Repair service is designed to add flexibility and ease to your busy life. Whether you&apos;re at home, at work, or stranded due to a sudden tyre issue, our skilled technicians can come to your location to provide professional tyre fitting services.
                            </div>
                            <div>
                                Our technicians are equipped with advanced tools and a broad selection of top-tier tyres from respected brands, ready for immediate installation. Whether you need a single tyre replaced or an entire set, we provide swift, precise fitting right at your doorstep.
                            </div>
                            <div>
                                Remember, with 24h-tyres.co.uk, expert tyre fitting is just a phone call away. Choose our Puncture Repair service and experience the convenience of professional tyre services delivered to you, wherever you are.
                            </div>
                        </div>
                        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 py-6`}>
                            <Link className={`btn`} href={CTA_PHONE_NUMBER}>Call Us</Link>
                            <Link className={`btn`} href={`/how-to-book-an-appointment`}>How To Book An Appointment</Link>
                            <Link className={`btn`} href={`/tyres`}>Additional Tyre Services</Link>
                            <Link className={`btn`} href={`/faq`}>FAQs</Link>
                        </div>
                        <SearchTabs/>
                        <CtaBanner/>
                        <CarMakesList/>
                        <UspRow/>
                        <FAQ questionsIn={questions}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}