import { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import PageLayout from "../../../../components/mainLayout/PageLayout";

const fittingOptionsMetadata: CustomMetadata = {
    title: "Tyre Fitting Options - New & Part-Worn | 24h Tyres",
    description: "Choose from a wide range of tyre fitting options at 24h Tyres. Featuring both new and quality-assured part-worn tyres for all vehicle types.",
    url: "/tyres/fitting-options",
    imageUrl: "https://24h-tyres.co.uk/tyres/fitting-options.jpg",
    canonical: "https://24h-tyres.co.uk/tyres/fitting-options",
    keywords: "tyre fitting, new tyres, part-worn tyres, vehicle tyres, tyre options, 24h Tyres",
};

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tyre Fitting Options",
    description: "Choose from a wide range of tyre fitting options at 24h Tyres. Featuring both new and quality-assured part-worn tyres for all vehicle types.",
    url: "https://www.24h-tyres.co.uk/tyres/fitting-options",
    image: "https://24h-tyres.co.uk/tyres/fitting-options.jpg",
    logo: "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
    areaServed: {
        "@type": "Country",
        name: "UK",
    },
    serviceType: "Tyre Fitting Options",
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

export default function FittingOptions() {
    return (
        <PageLayout metadata={fittingOptionsMetadata} jsonLD={jsonLD}>
            <section className={`kdev-section`}>
                <div className="w-full lg:w-4/5 flex items-center justify-center">
                    <div className="w-full p-4 flex flex-col gap-2">
                        <h1 className={`kdev-h1`}>Tyre Fitting Options</h1>
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
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
