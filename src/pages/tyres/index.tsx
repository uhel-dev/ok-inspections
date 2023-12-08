import "../../app/globals.css";
import { Breadcrumbs } from "../../../components/mainLayout/Breadcrumbs";
import UspRow from "../../../components/USPs/UspRow";
import TyreBrandsGrid from "../../../components/grids/TyreBrandsGrid";
import CarMakesList from "../../../components/shared/CarMakesList";
import ServicesWrapper from "../../../components/shared/ServicesWrapper";
import CustomHeader from "../../../components/mainLayout/CustomHeader";
import { Footer } from "../../../components/mainLayout/Footer";
import SearchTabs from "../../../components/search-sections/SearchTabs";
import Image from "next/image";
import SeoMetadata, { CustomMetadata } from "../../../components/mainLayout/SeoMetadata";
import Script from "next/script";

export default function Tyres() {

  const metadata: CustomMetadata = {
    title: "Quality Car Tyres - Premium & Budget Options | 24h Tyres",
    description: "Explore our extensive range of car tyres at 24h Tyres. Whether you're looking for premium or budget tyres, find the best fit for your vehicle. Shop top brands and diverse models for enhanced performance and safety.",
    url: "/tyres",
    imageUrl: "https://24h-tyres.co.uk/tyres.jpg",
    canonical: "https://24h-tyres.co.uk/tyres",
    keywords: "car tyres, premium tyres, budget tyres, tyre brands, tyre models, 24h Tyres, vehicle tyres, performance tyres, safety tyres, affordable tyres"
  }

  const jsonLD = {
    "@context": "http://schema.org",
    "@type": "Product",
    "name": "Car Tyres - Premium & Budget Options",
    "description": "Explore our extensive range of car tyres at 24h Tyres. Whether you're looking for premium or budget tyres, find the best fit for your vehicle. Shop top brands and diverse models for enhanced performance and safety.",
    "url": "https://24h-tyres.co.uk/tyres",
    "image": "https://24h-tyres.co.uk/tyres.jpg",
    "brand": "24h Tyres",
    "offers": {
      "@type": "Offer",
      "url": "https://24h-tyres.co.uk/tyres",
      "availability": "http://schema.org/InStock",
      "price": "29.99",
      "priceCurrency": "GBP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "982"
    },
    "keywords": "car tyres, premium tyres, budget tyres, tyre brands, tyre models, 24h Tyres, vehicle tyres, performance tyres, safety tyres, affordable tyres"
  }

  return (
      <>
          <SeoMetadata metadata={metadata}/>
          <Script
            id="app-ld-json"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLD, null, "\t"),
            }}
          >
          </Script>
          <CustomHeader/>
          <main className="flex flex-col items-center justify-between justify-center">
              <Breadcrumbs width={`w-4/5`}/>
              <div className="w-full lg:w-4/5 lg:pt-6 flex items-center justify-center">
                  <div className="w-full p-4 flex flex-col gap-2">
                      <h1 className={`kdev-h1`}>24h Tyres - Services Offered</h1>
                      <Image src={`/tyres-from-different-angle.jpg`} alt={`Image of Tyres in a different angle`} width={1080} height={320} className={`w-full min-h-2`}/>
                      <SearchTabs/>
                      <UspRow/>
                      <TyreBrandsGrid/>
                      <CarMakesList/>
                      <ServicesWrapper/>
                  </div>
              </div>
          </main>
          <Footer/>
      </>
  )
}