import "../../../app/globals.css";
import CustomHeader from "../../../../components/mainLayout/CustomHeader";
import { Breadcrumbs } from "../../../../components/mainLayout/Breadcrumbs";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import SearchTabs from "../../../../components/search-sections/SearchTabs";
import CtaBanner from "../../../../components/shared/CtaBanner";
import UspRow from "../../../../components/USPs/UspRow";
import { Footer } from "../../../../components/mainLayout/Footer";
import SeoMetadata, { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import Script from "next/script";

export default function ExpressTyreFitting() {

    const expressFittingMetadata: CustomMetadata = {
        title: "24h Tyres - Express Tyre Fitting Services | 24h Tyres",
        description: "Get your tyres fitted swiftly and accurately with 24h Tyres' express tyre fitting services. Experience our fast, professional service, available 24/7.",
        url: "/tyres/services/express-tyre-fitting",
        imageUrl: "https://24h-tyres.co.uk/express-tyre-fitting.png",
        canonical: "https://24h-tyres.co.uk/tyres/services/express-tyre-fitting",
        keywords: "24h Tyres, Express tyre fitting, fast tyre service, 24/7 tyre services, professional tyre fitting, quick tyre installation, tyre mounting"
    }

    const jsonLDExpressFitting = {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Express Tyre Fitting Services | 24h Tyres",
        "image": "https://24h-tyres.co.uk/express-tyre-fitting.png",
        "description": "Get your tyres fitted swiftly and accurately with 24h Tyres' express tyre fitting services. Experience our fast, professional service, available 24/7.",
        "url": "https://24h-tyres.co.uk/tyres/services/express-tyre-fitting",
        "serviceType": "Express Tyre Fitting",
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
            <SeoMetadata metadata={expressFittingMetadata}/>
            <Script
              id="app-ld-json"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLDExpressFitting, null, "\t"),
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
                                Express Tyre Fitting
                            </h1>
                            <div>
                                In a rush and need your tyres fitted quickly? Look no further. Welcome to 24h-tyres.co.uk&apos;s Express Tyre Fitting page, where speed and quality come together to deliver unmatched service.
                            </div>
                            <div>
                                Understanding the value of your time, we have refined our tyre fitting process to be swift and efficient without compromising on safety or precision. Our Express Tyre Fitting service ensures your tyres are professionally installed in minimal time, allowing you to get back on the road faster.
                            </div>
                            <div>
                                Our expert technicians, armed with state-of-the-art tools, provide prompt service, ensuring that your new tyres are correctly fitted and your vehicle is road-ready. Whether you need a single tyre replaced or a complete set, we&apos;ve got you covered.
                            </div>
                            <div>
                                We stock an extensive range of premium tyres from leading brands, ready to be fitted to your vehicle with speed and expertise. So, choose 24h-tyres.co.uk for your tyre needs, where we turn quick service into high-quality results. Remember, efficient and reliable tyre fitting is just a call away!
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
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}