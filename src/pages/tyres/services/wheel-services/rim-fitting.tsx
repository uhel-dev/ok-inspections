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
        question: "What is rim fitting service?",
        answer: "Our rim fitting service involves installing your car tyres onto the rims. Our expert technicians will ensure that the rim fits the tyre perfectly, ensuring smooth driving and optimum performance."
    },
    {
        question: "What types of rims can you fit?",
        answer: "Our expert technicians are trained to fit a wide range of rims, including steel, alloy, chrome, and custom-designed rims. We cater to various types of vehicles, including sedans, SUVs, trucks, and more."
    },
    {
        question: "How long does a rim fitting service take?",
        answer: "The exact time for a rim fitting can vary depending on the type of tyre and rim, but we strive to offer fast and efficient service. Generally, it can take anywhere from 15 minutes to an hour per tyre."
    },
    {
        question: "What should I consider when choosing rims?",
        answer: "When choosing rims, you should consider the size, material, and design. The rim size should match your tyre size. The material can affect your vehicle's performance - for example, alloy rims are lighter and can improve handling. The design is mainly about personal preference."
    },
    {
        question: "Do I need an appointment for a rim fitting service?",
        answer: "While walk-ins are always welcome, we recommend scheduling an appointment for your convenience and to minimise wait times. You can book an appointment online or over the phone."
    },
    {
        question: "How much does a rim fitting service cost?",
        answer: "The cost of our rim fitting service can vary depending on the type of rim and any additional services required. For a detailed quote, please contact our customer service team."
    },
    {
        question: "What payment methods do you accept for rim fitting services?",
        answer: "We accept a range of payment methods for our rim fitting services, including major credit cards and debit cards. For more specific information, please refer to our Payment Options section on our website or contact our customer service team."
    },
    {
        question: "Do you offer warranty on your rim fitting services?",
        answer: "Yes, our rim fitting services come with a warranty that covers any manufacturing defects or installation issues. Please note that the warranty does not cover damage caused by road hazards, improper use, or lack of maintenance."
    },
    {
        question: "Can I get my rims fitted at my location?",
        answer: "Yes, we do offer mobile tyre services where we can come to your location for rim fitting. However, availability may depend on your location and the specific service required."
    },
    {
        question: "What safety measures do your technicians take during rim fitting?",
        answer: "Our technicians always adhere to strict safety protocols. They use high-quality equipment and wear the appropriate safety gear. They also ensure your vehicle is secure before beginning any installation work, and thoroughly check the fitted rims before leaving."
    }
];


export default function RimFitting() {

    const metadata: CustomMetadata = {
        title: "Expert Rim Fitting Services - Mobile & In-Store | 24h Tyres",
        description: "Elevate your vehicle's look and performance with 24h Tyres' expert rim fitting services. Choose our convenient mobile or in-store options for top-quality rim installation.",
        url: "/tyres/services/wheel-services/rim-fitting",
        imageUrl: "https://24h-tyres.co.uk/tyres/services/services-rim-fitting.png",
        canonical: "https://24h-tyres.co.uk/tyres/services/wheel-services/rim-fitting"
    }

    const jsonLDForRimFitting = {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Expert Rim Fitting Services - Mobile & In-Store | 24h Tyres",
        "image": "https://24h-tyres.co.uk/tyres/services/services-rim-fitting.png",
        "description": "Elevate your vehicle's look and performance with 24h Tyres' expert rim fitting services. Choose our convenient mobile or in-store options for top-quality rim installation.",
        "url": "https://24h-tyres.co.uk/tyres/services/wheel-services/rim-fitting",
        "serviceType": "Rim Fitting",
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
                  __html: JSON.stringify(jsonLDForRimFitting, null, "\t"),
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
                                Rim Fitting
                            </h1>
                            <div>
                                Can&apos;t make it to the garage? No problem. 24h-tyres.co.uk brings the garage to you with our Rim Fitting service. Welcome to the page where convenience meets excellence.
                            </div>
                            <div>
                                Our Rim Fitting service is designed to add flexibility and ease to your busy life. Whether you&apos;re at home, at work, or stranded due to a sudden tyre issue, our skilled technicians can come to your location to provide professional tyre fitting services.
                            </div>
                            <div>
                                Our technicians are equipped with advanced tools and a broad selection of top-tier tyres from respected brands, ready for immediate installation. Whether you need a single tyre replaced or an entire set, we provide swift, precise fitting right at your doorstep.
                            </div>
                            <div>
                                Remember, with 24h-tyres.co.uk, expert tyre fitting is just a phone call away. Choose our Rim Fitting service and experience the convenience of professional tyre services delivered to you, wherever you are.
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