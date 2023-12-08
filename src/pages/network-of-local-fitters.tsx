import PageLayout from "../../components/mainLayout/PageLayout";
import Link from "next/link";
import { CTA_PHONE_NUMBER, TELEGRAM_GROUP_JOIN_HREF } from "@/static/utils";
import Image from "next/image";
import MapComponent from "../../components/shared/MapComponent";

const metadata = {
  title: "Extensive Network of Tyre Fitters Across England | 24h Tyres",
  description: "Discover our vast network of skilled tyre fitters spanning across England. From London to the Lake District, 24h Tyres ensures professional tyre services are always within your reach.",
  url: "/network-of-local-fitters",
  imageUrl: "https://24h-tyres.co.uk/network-of-local-fitters.png",
  canonical: "https://24h-tyres.co.uk/network-of-local-fitters",
  keywords: "tyre fitters, England, 24h Tyres, mobile tyre service, professional tyre fitting, tyre experts, nationwide coverage"
};

const jsonLDForNetworkOfLocalFittersPage = {
  "@context": "http://schema.org",
  "@type": "Service",
  "name": "Extensive Network of Tyre Fitters Across England | 24h Tyres",
  "image": "https://24h-tyres.co.uk/network-of-local-fitters.png",
  "description": "24h Tyres provides an expansive network of highly skilled tyre fitters covering all major cities and regions across England. Our service ensures that professional tyre fitting is always accessible, no matter your location.",
  "url": "https://24h-tyres.co.uk/network-of-local-fitters",
  "serviceType": "Mobile Tyre Fitting",
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
};


export default function NetworkOfLocalFitters() {
  return (
    <PageLayout metadata={metadata} jsonLD={jsonLDForNetworkOfLocalFittersPage}>
      <section className={`kdev-section`}>
        {/* hero  */}
        <div className={`flex flex-col lg:flex-row gap-4`}>
          <div className={`w-full lg:w-1/2 flex flex-col gap-4 justify-center`}>
            <h1 className={`text-xl lg:text-3xl font-uk-reg-plates`}>
              {`24h's`} Network of Tyre Fitters Across London
            </h1>
            <div>
              Looking for a <strong>hassle-free tyre replacement service</strong> in London? 24H Tyres offers fast, reliable, and competitively priced mobile tyre fitting services right at your doorstep. With our expansive network of skilled fitters, we ensure {`you're`} never stranded with tyre troubles.
            </div>
            <div className={`mt-4 flex gap-2`}>
              <Link className={`kdev-button-cta-yellow-black`} href={`${CTA_PHONE_NUMBER}`}>Request help</Link>
              <Link className={`kdev-button-cta-yellow-black`} target={`_blank`} href={`${TELEGRAM_GROUP_JOIN_HREF}`}>Join the Network</Link>
            </div>
          </div>
          <div className={`w-full lg:w-1/2 order-first lg:order-none`}>
            <Image className={`w-full`} src={`/locations.jpg`} alt={'We have tyre experts scattered around UK'} width={500} height={500}/>
          </div>
        </div>
      </section>

      <section className={`kdev-section`}>
        <MapComponent radiusMiles={50} singleLoc={false}/>
      </section>

      <section className="kdev-section bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">
            Unmatched Tyre Fitting Network Across England
          </h2>
          <p className="text-lg text-center mb-4">
            Experience unparalleled access to tyre fitting services across England with our extensive network. We cover major cities and remote areas alike, ensuring that wherever you are, professional help is within reach. Our network spans from the bustling streets of London to the serene landscapes of the Lake District, offering a seamless solution to your tyre needs. Whether {`you're`} in Manchester, Birmingham, or Leeds, our tyre experts are just a call away. This widespread presence not only guarantees convenience but also contributes to a safer journey, knowing that help is always nearby.
          </p>
          <p className="text-lg text-center mb-4">
            Our commitment goes beyond just providing a service. We are dedicated to ensuring each customer receives the best care possible. Our network includes only the most skilled and experienced fitters who are regularly trained in the latest tyre technology. This commitment to excellence is our promise to you – a promise of quality, reliability, and accessibility.
          </p>
          <div className="flex justify-center mt-6">
            <Link href="/locations" className="kdev-button-cta-yellow-black">
              Explore Our Locations
            </Link>
          </div>
        </div>
      </section>
      <section className="kdev-section bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">
            Expertise and Reliability: The Pillars of Our Service
          </h2>
          <p className="text-lg mb-4">
            In an industry where precision and expertise are paramount, our network stands out for its unwavering commitment to quality. Each fitter in our network is a testament to our high standards, equipped with advanced tools and an in-depth understanding of various tyre types and brands. We {`don't`} just replace tyres; we provide a comprehensive service that includes expert advice on tyre maintenance, optimal performance tips, and safety checks.
          </p>
          <p className="text-lg mb-4">
            Reliability is the cornerstone of our services. Our customers trust us to provide timely and efficient tyre fitting, regardless of their location. We understand the urgency of tyre issues, which is why our response times are some of the fastest in the industry. Our network is designed for rapid deployment, ensuring that a skilled professional is always ready to assist you, whether {`it's`} a regular appointment or an emergency call-out.
          </p>
          <div className="flex justify-center mt-6">
            <Link href="/tyres/services" className="kdev-button-cta-yellow-black">
              Discover Our Services
            </Link>
          </div>
        </div>
      </section>
      <section className="kdev-section bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">
            Tailored Tyre Solutions: Fast and Flexible Service Options
          </h2>
          <p className="text-lg mb-4">
            At the heart of our service offering is flexibility. We understand that each customer has unique needs, which is why we offer a range of services tailored to individual requirements. From emergency tyre fitting to scheduled maintenance, our network is equipped to handle all scenarios with the same level of professionalism and speed. Our mobile fitting service brings the tyre shop to your doorstep, providing convenience without compromising on quality.
          </p>
          <p className="text-lg mb-4">
            We also recognize the importance of informed decision-making when it comes to tyre selection. Our experts are not just fitters; they are knowledgeable advisers who can guide you through the selection process, ensuring that you get the best tyre for your vehicle and driving habits. This personalized approach has made us a trusted partner for thousands of drivers across England, solidifying our reputation as a leader in the tyre fitting industry.
          </p>
          <div className="flex justify-center mt-6">
            <Link href="/how-to-book-an-appointment" className="kdev-button-cta-yellow-black">
              Book Your Service
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}