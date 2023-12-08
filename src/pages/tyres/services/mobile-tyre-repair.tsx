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
import CarMakesList from "../../../../components/shared/CarMakesList";
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

    const mobileRepairMetadata: CustomMetadata = {
        title: "24h Tyres - Mobile Tyre Repair Services | 24h Tyres",
        description: "Get back on the road fast with 24h Tyres' mobile tyre repair services. Our experts come to you, providing 24/7 emergency tyre repair at your location.",
        url: "/tyres/services/mobile-tyre-repair",
        imageUrl: "https://24h-tyres.co.uk/mobile-tyre-repair.png",
        canonical: "https://24h-tyres.co.uk/tyres/services/mobile-tyre-repair",
        keywords: "24h Tyres, mobile tyre repair, emergency tyre repair, tyre services at your location, 24/7 tyre services"
    }

    const jsonLDMobileRepair = {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Mobile Tyre Repair Services | 24h Tyres",
        "image": "https://24h-tyres.co.uk/mobile-tyre-repair.png",
        "description": "Get back on the road fast with 24h Tyres' mobile tyre repair services. Our experts come to you, providing 24/7 emergency tyre repair at your location.",
        "url": "https://24h-tyres.co.uk/tyres/services/mobile-tyre-repair",
        "serviceType": "Mobile Tyre Repair",
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
            <SeoMetadata metadata={mobileRepairMetadata}/>
            <Script
              id="app-ld-json"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLDMobileRepair, null, "\t"),
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
                                Mobile Tyre Repair
                            </h1>
                            <div>
                                Caught in a tyre mishap away from home? No worries. 24h-tyres.co.uk brings professional tyre services to your location, at any time. Welcome to our Mobile Tyre Repair page, your one-stop solution for on-the-go tyre emergencies.
                            </div>
                            <div>
                                We understand that tyre troubles can strike anywhere, anytime. That&apos;s why we&apos;ve designed our Mobile Tyre Repair service to provide prompt, professional help right where you need it. Whether you&apos;re stuck in the middle of your commute, or you&apos;ve discovered a puncture at home, our team is ready to assist.
                            </div>
                            <div>
                                Our highly trained technicians are equipped to handle all kinds of tyre issues, using top-of-the-line tools and a wide range of premium tyres from renowned brands, ensuring immediate and reliable repairs or replacements.
                            </div>
                            <div>
                                Remember, with 24h-tyres.co.uk, professional tyre help is always just a call away. Trust our Mobile Tyre Repair service and never let tyre troubles disrupt your schedule again.
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