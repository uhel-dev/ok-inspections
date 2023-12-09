import "../../../app/globals.css";

import SearchTabs from "../../../../components/search-sections/SearchTabs";
import UspRow from "../../../../components/USPs/UspRow";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import CtaBanner from "../../../../components/shared/CtaBanner";
import { FAQ } from "../../../../components/shared/FAQ";
import CarMakesList from "../../../../components/shared/CarMakesList";
import { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import { FAQuestion } from "../../../../components/types";
import PageLayout from "../../../../components/mainLayout/PageLayout";

const questions: FAQuestion[] = [
    {
        question: "What are part-worn tyres?",
        answer: "Part-worn tyres are previously used tyres that have been inspected and approved for resale. They offer a cost-effective solution for drivers, while still providing a safe level of tread depth."
    },
    {
        question: "Are part-worn tyres safe?",
        answer: "Yes, part-worn tyres are safe as long as they meet the legal tread depth requirement and have been properly inspected. At 24h Tyres, all our part-worn tyres undergo a rigorous safety check to ensure they meet safety standards."
    },
    {
        question: "What is the minimum legal tread depth for part-worn tyres?",
        answer: "The minimum legal tread depth for part-worn tyres in the UK is 2mm across the central three-quarters of the breadth of the tyre and around the entire circumference."
    },
    {
        question: "Can you fit part-worn tyres at my location?",
        answer: "Absolutely. Our mobile tyre fitting service can come to your location for the fitting of part-worn tyres. We bring the necessary tools and equipment to ensure a professional fit every time."
    },
    {
        question: "How much does it cost to have part-worn tyres fitted?",
        answer: "The cost of having part-worn tyres fitted can vary depending on the tyre size, brand, and your location. Contact our customer service team for a detailed quote."
    },
    {
        question: "What payment methods do you accept for part-worn tyres?",
        answer: "We accept a variety of payment methods for part-worn tyres, including major credit and debit cards. Visit our Payment Options section on our website or contact our customer service for more details."
    },
    {
        question: "Do you offer a warranty on part-worn tyres?",
        answer: "Yes, we offer a limited warranty on our part-worn tyres. This covers manufacturing defects and installation issues, but not damage from road hazards, improper use, or lack of maintenance."
    },
    {
        question: "How can I know if part-worn tyres are right for my vehicle?",
        answer: "Our expert technicians can provide guidance on the best tyre options for your vehicle. It will depend on factors like your driving style, vehicle type, and budget. Reach out to us for personalized advice."
    },
    {
        question: "What safety measures do your technicians take when fitting part-worn tyres?",
        answer: "Our technicians follow strict safety protocols when fitting part-worn tyres. This includes using high-quality equipment, wearing the necessary safety gear, and ensuring your vehicle is secure before commencing any work."
    }
];

const metadata: CustomMetadata =  {
    title: "Part Worn Tyres - 24h Tyres",
    description: "Seeking affordable tyre options? Discover our range of part-worn tyres at 24h Tyres for cost-effective solutions to your needs.",
    url: "/tyres/fitting-options/part-worn-tyres",
    imageUrl: "https://24h-tyres.co.uk/tyres/services/services-used-tyres-part-worn-tyres.png",
    canonical: "https://24h-tyres.co.uk/tyres/fitting-options/part-worn-tyres"
}

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Part Worn Tyres",
    description: "Seeking affordable tyre options? Discover our range of part-worn tyres at 24h Tyres for cost-effective solutions to your needs.",
    url: "https://www.24h-tyres.co.uk/tyres/fitting-options/part-worn-tyres",
    image: "https://24h-tyres.co.uk/tyres/services/services-used-tyres-part-worn-tyres.png",
    logo: "https://www.24h-tyres.co.uk/logo/ok-logo.png",
    areaServed: {
        "@type": "Country",
        name: "UK",
    },
    serviceType: "Part Worn Tyres",
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
        logo: "https://www.24h-tyres.co.uk/logo/ok-logo.png",
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

export default function PartWornTyres() {

    return (
       <PageLayout metadata={metadata} jsonLD={jsonLD}>
           <section className={`kdev-section`}>
               <div className="w-full lg:w-4/5 flex items-center justify-center">
                   <div className="w-full p-4 flex flex-col gap-2">
                       <div className={`flex flex-col gap-4`}>
                           <h1 className={`text-3xl lg:text-6xl font-uk-reg-plates font-extrabold`}>
                               Part Worn Tyres
                           </h1>
                           <div>
                               Can&apos;t make it to the garage? No problem. 24h-tyres.co.uk brings the garage to you with our Part Worn Tyres service. Welcome to the page where convenience meets excellence.
                           </div>
                           <div>
                               Our Part Worn Tyres service is designed to add flexibility and ease to your busy life. Whether you&apos;re at home, at work, or stranded due to a sudden tyre issue, our skilled technicians can come to your location to provide professional tyre fitting services.
                           </div>
                           <div>
                               Our technicians are equipped with advanced tools and a broad selection of top-tier tyres from respected brands, ready for immediate installation. Whether you need a single tyre replaced or an entire set, we provide swift, precise fitting right at your doorstep.
                           </div>
                           <div>
                               Remember, with 24h-tyres.co.uk, expert tyre fitting is just a phone call away. Choose our Part Worn Tyres service and experience the convenience of professional tyre services delivered to you, wherever you are.
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
           </section>
       </PageLayout>
    )
}