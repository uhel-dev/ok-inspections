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
        question: "What is a valve servicing?",
        answer: "Valve servicing is a crucial part of tyre maintenance. It involves inspecting and replacing the tyre valve, which helps maintain correct tyre pressure and prevents air leakage, leading to longer tyre life and better vehicle performance."
    },
    {
        question: "How often should tyre valves be serviced?",
        answer: "Tyre valves should generally be serviced every time you replace your tyres. However, if you notice signs of a slow leak or a consistently dropping tyre pressure, you might require a valve servicing sooner."
    },
    {
        question: "How long does a valve servicing take?",
        answer: "The exact duration of a valve servicing can vary, but typically, it's a quick process that can be completed in under 30 minutes. It may take longer if multiple tyres need servicing."
    },
    {
        question: "Do I need an appointment for a valve servicing?",
        answer: "While we welcome walk-in customers, booking an appointment ensures that we can service your vehicle promptly. You can schedule your valve servicing appointment online or by phone."
    },
    {
        question: "How much does a valve servicing cost?",
        answer: "The cost of valve servicing can vary depending on the type of vehicle and the number of valves that need servicing. Please contact our customer service team for a detailed quote."
    },
    {
        question: "What payment methods do you accept for valve servicing?",
        answer: "We accept a range of payment methods for valve servicing, including major credit and debit cards. Check our Payment Options section on our website or contact our customer service team for more information."
    },
    {
        question: "Do you offer warranty on your valve servicing?",
        answer: "Yes, we offer a warranty on our valve servicing that covers any defects or installation issues. Please note that the warranty does not cover damage caused by road hazards, improper use, or lack of maintenance."
    },
    {
        question: "Can valve servicing be performed at my location?",
        answer: "Yes, we offer mobile tyre services where we can come to your location to perform valve servicing. However, availability may depend on your location and the specific service required."
    },
    {
        question: "What safety measures do your technicians take during valve servicing?",
        answer: "Our technicians always follow strict safety protocols. They use high-quality equipment and wear the appropriate safety gear. They ensure your vehicle is secure before beginning any work and thoroughly check the serviced valves before concluding the service."
    }
];


export default function ValveServicing() {

    const metadata: CustomMetadata = {
        title: "Professional Valve Servicing for Enhanced Tyre Safety | 24h Tyres",
        description: "Maximize safety and performance with 24h Tyres' specialized valve servicing. Ensure long-lasting tyre health and a smoother driving experience.",
        url: "/tyres/services/wheel-services/valve-servicing",
        imageUrl: "https://24h-tyres.co.uk/tyres/services/services-valve-servicing.png",
        canonical: "https://24h-tyres.co.uk/tyres/services/wheel-services/valve-servicing",
        keywords: "valve servicing, tyre safety, professional tyre services, 24h Tyres, enhanced tyre performance, vehicle maintenance"
    }

    const jsonLDForValveServicing = {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Professional Valve Servicing for Enhanced Tyre Safety | 24h Tyres",
        "image": "https://24h-tyres.co.uk/tyres/services/services-valve-servicing.png",
        "description": "Maximize safety and performance with 24h Tyres' specialized valve servicing. Ensure long-lasting tyre health and a smoother driving experience.",
        "url": "https://24h-tyres.co.uk/tyres/services/wheel-services/valve-servicing",
        "serviceType": "Valve Servicing",
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
        }
    }


    return (
        <>
            <SeoMetadata metadata={metadata}/>
            <Script
              id="app-ld-json"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLDForValveServicing, null, "\t"),
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
                                Valve Servicing
                            </h1>
                            <div>
                                Can&apos;t make it to the garage? No problem. 24h-tyres.co.uk brings the garage to you with our Valve Servicing service. Welcome to the page where convenience meets excellence.
                            </div>
                            <div>
                                Our Valve Servicing service is designed to add flexibility and ease to your busy life. Whether you&apos;re at home, at work, or stranded due to a sudden tyre issue, our skilled technicians can come to your location to provide professional tyre fitting services.
                            </div>
                            <div>
                                Our technicians are equipped with advanced tools and a broad selection of top-tier tyres from respected brands, ready for immediate installation. Whether you need a single tyre replaced or an entire set, we provide swift, precise fitting right at your doorstep.
                            </div>
                            <div>
                                Remember, with 24h-tyres.co.uk, expert tyre fitting is just a phone call away. Choose our Valve Servicing service and experience the convenience of professional tyre services delivered to you, wherever you are.
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