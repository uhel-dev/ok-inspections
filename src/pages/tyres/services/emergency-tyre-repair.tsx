import "../../../app/globals.css";

import SearchTabs from "../../../../components/search-sections/SearchTabs";
import CustomHeader from "../../../../components/mainLayout/CustomHeader";
import { Breadcrumbs } from "../../../../components/mainLayout/Breadcrumbs";
import { Footer } from "../../../../components/mainLayout/Footer";
import UspRow from "../../../../components/USPs/UspRow";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import CtaBanner from "../../../../components/shared/CtaBanner";
import { FAQ } from "../../../../components/shared/FAQ";
import SeoMetadata, { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import Script from "next/script";
import { FAQuestion } from "../../../../components/types";

const questions: FAQuestion[] = [
    {
        question: "What is a mobile tyre repair service?",
        answer: "Our mobile tyre repair service offers the convenience of having your tyres repaired or replaced at your location of choice. Whether you're at home, work, or stranded on the roadside, our team of expert technicians come to you, bringing all the necessary equipment and tools to ensure your vehicle is up and running in no time."
    },
    {
        question: "What areas do your mobile tyre repair services cover?",
        answer: "Our mobile tyre repair services cover a wide range of areas. Please refer to our service area map on our website or contact our customer service team for specific coverage inquiries."
    },
    {
        question: "How quickly can you arrive for a mobile tyre repair?",
        answer: "Our goal is to get to you as quickly as possible. The exact time can depend on factors such as current bookings, traffic, and your location. However, we strive to offer same-day service where possible."
    },
    {
        question: "Can you repair all types of tyres with your mobile service?",
        answer: "Our skilled technicians are equipped to repair a wide variety of tyres. However, not all tyres are repairable depending on the type and extent of the damage. We will do our best to repair your tyre, but in some cases, a replacement may be necessary."
    },
    {
        question: "Are your mobile tyre repairs as effective as in-shop repairs?",
        answer: "Absolutely. Our mobile tyre repair service employs the same high-quality equipment and professional technicians as our shops. We ensure the repair is done correctly, safely, and up to industry standards."
    },
    {
        question: "How much does your mobile tyre repair service cost?",
        answer: "The cost of our mobile tyre repair service can vary depending on several factors such as the type of tyre, the extent of the damage, and your location. For a detailed quote, please contact our customer service team."
    },
    {
        question: "What payment methods do you accept for mobile tyre repairs?",
        answer: "We accept a range of payment methods for our mobile tyre repair services, including major credit cards and debit cards. For more specific information, please refer to our Payment Options section on our website or contact our customer service team."
    },
    {
        question: "Do you offer warranty on mobile tyre repairs?",
        answer: "Yes, similar to our in-shop services, our mobile tyre repairs come with a warranty that covers any manufacturing defects. Please note that the warranty does not cover damage caused by road hazards, improper use, or lack of maintenance."
    },
    {
        question: "Can I schedule a mobile tyre repair service in advance?",
        answer: "Yes, we allow customers to schedule their mobile tyre repair services in advance. Just contact our customer service team or use our online booking tool to set up an appointment at a time and location that works best for you."
    },
    {
        question: "What safety measures do your technicians take during mobile tyre repairs?",
        answer: "Our technicians always adhere to strict safety protocols. They use high-quality equipment and wear the appropriate safety gear. In addition, they will ensure your vehicle is secure before beginning any repair or replacement work, and they will thoroughly check the repaired tyre before leaving."
    }
];

export default function MobileTyreRepair() {

    const emergencyRepairMetadata: CustomMetadata = {
        title: "24h Tyres - Emergency Tyre Repair Services | 24h Tyres",
        description: "Trust 24h Tyres for fast, reliable emergency tyre repairs, available 24/7. Don't let tyre issues keep you off the road. Contact us now for immediate assistance.",
        url: "/tyres/services/emergency-tyre-repair",
        imageUrl: "https://24h-tyres.co.uk/emergency-tyre-repair.png",
        canonical: "https://24h-tyres.co.uk/tyres/services/emergency-tyre-repair",
        keywords: "24h Tyres, Emergency tyre repair, 24/7 tyre services, quick tyre repair, reliable tyre service, roadside assistance, flat tyre, puncture repair"
    }

    const jsonLDEmergencyRepair = {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Emergency Tyre Repair Services | 24h Tyres",
        "image": "https://24h-tyres.co.uk/emergency-tyre-repair.png",
        "description": "Trust 24h Tyres for fast, reliable emergency tyre repairs, available 24/7. Don't let tyre issues keep you off the road. Contact us now for immediate assistance.",
        "url": "https://24h-tyres.co.uk/tyres/services/emergency-tyre-repair",
        "serviceType": "Emergency Tyre Repair",
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
            <SeoMetadata metadata={emergencyRepairMetadata}/>
            <Script
              id="app-ld-json"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLDEmergencyRepair, null, "\t"),
              }}
            >
            </Script>
            <CustomHeader/>
            <main className="flex flex-col items-center justify-between justify-center">
                <Breadcrumbs width={"w-4/5"}/>
                <div className="w-full lg:w-4/5 flex items-center justify-center">
                    <div className="w-full p-4 flex flex-col gap-2">
                        <div className={`flex flex-col gap-4`}>
                            <h1 className={`kdev-h1`}>
                                Emergency Tyre Repair
                            </h1>
                            <div>
                                Struggling with a sudden tyre puncture or a slow leak? Don&apos;t fret. At 24h-tyres.co.uk, we turn your tyre troubles into seamless solutions. Our comprehensive emergency tyre repair services are at your disposal 24/7.
                            </div>
                            <div>
                                We cover all types of tyre emergencies and our skilled technicians are proficient with various repair techniques, ensuring you get back on the road quickly and safely. Moreover, we stock a diverse range of high-quality tyres from leading brands, ready to replace your damaged ones if necessary.
                            </div>
                            <div>
                                Save your time and let us handle your tyre emergencies with our mobile garage service, which brings professional help right to your doorstep, any time, any day. Make the smart choice and trust 24h-tyres.co.uk for all your tyre emergencies. Remember, we&apos;re just a call away!
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
                        <UspRow/>
                        <FAQ questionsIn={questions}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}