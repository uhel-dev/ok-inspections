import "../app/globals.css";

import CustomHeader from "../../components/mainLayout/CustomHeader";
import { Breadcrumbs } from "../../components/mainLayout/Breadcrumbs";
import { Footer } from "../../components/mainLayout/Footer";
import { FAQ } from "../../components/shared/FAQ";
import SeoMetadata, { CustomMetadata } from "../../components/mainLayout/SeoMetadata";
import Image from "next/image";
import Script from "next/script";
import FrequentlyAskedQuestion from "../../components/FrequentlyAskedQuestions";

export default function FAQLayout() {

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
      "@type": "Question",
      "name": "How to change a tyre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While knowing how to change a tyre is a valuable skill, with 24h Tyres, you won't need to worry about it. Just give us a call, and our team of experts will be there to assist you. We provide quick and professional tyre changing services, ensuring your safety and convenience. Whether you're at home, work, or stranded on the road, we're just a call away, ready to help you with any tyre emergencies 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "How do I determine the appropriate pressure for my tyres?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ideal tyre pressure depends on factors like tyre type, size, brand, weather conditions, vehicle load rating, etc. Use our tyre pressure lookup tool to find the appropriate pressure for your vehicle's tyres."
      }
    },
    {
      "@type": "Question",
      "name": "What should I have with me for a tyre installation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should have your locking wheel nut key. It's usually found in the glove compartment or beneath the boot liner, next to the spare tyre."
      }
    }, {
      "@type": "Question",
      "name": "Do warranties apply to tyres?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each tyre installed comes with a lifetime mileage warranty against manufacturing flaws. Optional TyreCare insurance is available for cover against unintended or intentional damage."
      }
    }]
  }

  const faqMetadata: CustomMetadata = {
    title: "Expert Tyre Help 24/7 - Your FAQs Answered | 24h Tyres",
    description: "Get instant answers to your tyre queries 24/7. Expert advice on tyre repairs, fittings, and maintenance with 24h Tyres. Your one-stop solution for all tyre needs.",
    url: "/faq",
    imageUrl: "https://24h-tyres.co.uk/faq.png",
    canonical: "https://24h-tyres.co.uk/faq",
    keywords: "24h Tyres, FAQ, tyre services questions, tyre repair questions, tyre fitting questions, 24/7 tyre services, tyre help"
  };


  return (
    <>
      <SeoMetadata metadata={faqMetadata} />
      <Script
        id="app-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLD, null, "\t"),
        }}
      >
      </Script>
      <CustomHeader />
      <main className="flex flex-col items-center justify-between justify-center p-4">
        <Breadcrumbs width={`w-4/5`} />
        <div className={`flex w-full lg:w-4/5 p-4`}>
          <h1 className={`text-2xl lg:text-6xl font-uk-reg-plates`}>FAQ - All About Tyres</h1>
        </div>
        <div className={`flex flex-col lg:flex-row gap-2 items-center w-full lg:w-4/5 p-4`}>
          <div className={`w-full lg:w-1/2 flex flex-col gap-2`}>
            <h2 className={`text-xl lg:text-4xl font-uk-reg-plates`}>Expert Tyre Solutions at Your Fingertips</h2>
            <h3 className={`text-md lg:text-2xl font-uk-reg-plates`}>Your Questions Answered 24/7</h3>
            <p>{`Welcome to 24h Tyres - your ultimate destination for all tyre-related queries and solutions. Whether you're facing an unexpected flat tyre or need expert advice on tyre maintenance, our comprehensive FAQ section is designed to assist you round the clock. Our team of tyre specialists is committed to providing you with reliable, up-to-date information and tips to ensure your vehicle's performance and safety. Don't let tyre troubles hold you back. Explore our FAQ or reach out to us directly for personalized assistance.`}</p>
            <p className={`hidden lg:block`}>
              {`Beyond just answering your questions, we at 24h Tyres are dedicated to enhancing your driving experience. Our FAQ section not only addresses common concerns but also offers insights into the latest tyre technologies and trends. Whether you're a seasoned driver or a new car owner, our expertly curated information will help you make informed decisions about tyre care, selection, and maintenance. Stay ahead of the curve with 24h Tyres, where we believe that the right knowledge leads to safer and more enjoyable journeys on the road.`}
            </p>
          </div>
          <div className={`w-full order-first lg:order-last lg:w-1/2 flex items-end justify-end`}>
            <Image src={'/heros/faq-all-about-tyres.png'} width={500} height={500} alt={`All question about tyres`}></Image>
          </div>
        </div>
        <FrequentlyAskedQuestion/>
      </main>
      <Footer />
    </>
  );
}