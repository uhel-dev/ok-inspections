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
        question: "What is wheel balancing?",
        answer: "Wheel balancing helps ensure that your tyres and wheels spin more smoothly and evenly by compensating for any weight imbalances in the tyre/wheel assembly. This process enhances the performance and longevity of your tyres, and provides a smoother ride."
    },
    {
        question: "How often should wheel balancing be done?",
        answer: "Generally, wheels should be balanced every time tyres are replaced, or at least once every two years. However, if you notice symptoms such as steering wheel vibration, uneven tyre wear, or poor fuel economy, you may need to have your wheels balanced sooner."
    },
    {
        question: "How long does a wheel balancing service take?",
        answer: "Typically, a wheel balancing service can take between 30 minutes to an hour per set of wheels. However, the time can vary depending on the number of wheels being balanced."
    },
    {
        question: "Can you perform wheel balancing at my location?",
        answer: "Yes, we can perform mobile wheel balancing at your location, offering you the convenience of getting this important service done without leaving your home or workplace. Please check with us for availability."
    },
    {
        question: "What is the cost of a wheel balancing service?",
        answer: "The cost of wheel balancing can vary depending on the number of wheels, your location, and whether any additional services are needed. Please contact our customer service team for a detailed quote."
    },
    {
        question: "What payment methods do you accept for wheel balancing services?",
        answer: "We accept a variety of payment methods, including major credit and debit cards. For more detailed information, please refer to the Payment Options section on our website or contact our customer service team."
    },
    {
        question: "Do you offer a warranty on wheel balancing services?",
        answer: "Yes, we provide a warranty on our wheel balancing services, covering any issues related to the balancing process. Note that the warranty does not cover damage due to road hazards, improper use, or lack of maintenance."
    },
    {
        question: "What are the signs that my wheels need balancing?",
        answer: "Common signs that your wheels may need balancing include a vibrating steering wheel, uneven tyre wear, and a decrease in driving comfort or fuel efficiency. If you notice any of these symptoms, we recommend scheduling a wheel balancing service."
    },
    {
        question: "What safety measures do your technicians take during wheel balancing?",
        answer: "Our technicians adhere to strict safety guidelines during the wheel balancing process. This includes using industry-standard equipment, wearing proper safety gear, and ensuring your vehicle is securely positioned before commencing work."
    }
];



export default function WheelBalancing() {
    const metadata: CustomMetadata = {
        title: "24-Hour Expert Wheel Balancing | Achieve Perfect Smoothness | 24h Tyres",
        description: "Experience peak smooth driving with 24-hour expert wheel balancing at 24h Tyres. Trust in precision for a flawless ride.",
        url: "/tyres/services/wheel-services/wheel-balancing",
        imageUrl: "https://24h-tyres.co.uk/tyres/services/services-wheel-balancing.png",
        canonical: "https://24h-tyres.co.uk/tyres/services/wheel-services/wheel-balancing",
        keywords: "24-hour wheel balancing, professional services, perfect smoothness, 24h Tyres, flawless ride"
    }

    const jsonLDForWheelBalancing = {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "24-Hour Expert Wheel Balancing | Achieve Perfect Smoothness | 24h Tyres",
        "image": "https://24h-tyres.co.uk/tyres/services/services-wheel-balancing.png",
        "description": "Experience peak smooth driving with 24-hour expert wheel balancing at 24h Tyres. Trust in precision for a flawless ride.",
        "url": "https://24h-tyres.co.uk/tyres/services/wheel-services/wheel-balancing",
        "serviceType": "Wheel Balancing",
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
                  __html: JSON.stringify(jsonLDForWheelBalancing, null, "\t"),
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
                                Wheel Balancing
                            </h1>
                            <div>
                                Can&apos;t make it to the garage? No problem. 24h-tyres.co.uk brings the garage to you with our Wheel Balancing service. Welcome to the page where convenience meets excellence.
                            </div>
                            <div>
                                Our Wheel Balancing service is designed to add flexibility and ease to your busy life. Whether you&apos;re at home, at work, or stranded due to a sudden tyre issue, our skilled technicians can come to your location to provide professional tyre fitting services.
                            </div>
                            <div>
                                Our technicians are equipped with advanced tools and a broad selection of top-tier tyres from respected brands, ready for immediate installation. Whether you need a single tyre replaced or an entire set, we provide swift, precise fitting right at your doorstep.
                            </div>
                            <div>
                                Remember, with 24h-tyres.co.uk, expert tyre fitting is just a phone call away. Choose our Wheel Balancing service and experience the convenience of professional tyre services delivered to you, wherever you are.
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