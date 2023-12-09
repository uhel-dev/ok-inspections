import Link from "next/link";
import { CTA_PHONE_NUMBER, TELEGRAM_GROUP_JOIN_HREF } from "@/static/utils";
import Image from "next/image";
import PageLayout from "../../../../components/mainLayout/PageLayout";
import { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";


const metadata: CustomMetadata = {
  title: "Help and Advice for Tyres | 24h Tyres",
  description: "Choose a convenient time slot for your tire fitting, with options for either a 1-hour time slots or instant/express callout available 7 days a week, from 00:00 to 23:59.",
  url: "/tyres/advice",
  imageUrl: "https://24h-tyres.co.uk/advice.jpg",
  canonical: "https://24h-tyres.co.uk/tyres/advice",
  keywords: "tyres advice, tyre safety, tyre help, 24h Tyres, tyres help, tyre jnfo, tyre services, mobile tyre services"
}


const AdviceQuestionGridBox = ({question, url}: any) => {
  return (
    <div>
      <div className={`b-g h-full`}>
        <div className={`flex flex-col gap-4 justify-center items-center p-4`}>
          <QuestionMarkCircleIcon className={`w-12 h-12`}/>
          <h5 className={`kdev-h3`}>Question</h5>
          <p className={`kdev-text text-center`}>{question}</p>
          <Link className={`font-uk-reg-plates rounded-xl border-2 border-slate-400/10 p-4 hover:bg-orange-600 hover:text-black`} href={url}>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default function Advice() {
  return (
    <PageLayout metadata={metadata}>
      <section className={`kdev-section`}>
        {/* hero  */}
        <div className={`flex flex-col lg:flex-row gap-4`}>
          <div className={`w-full lg:w-1/2 flex flex-col gap-4 justify-center`}>
            <h1 className={`text-xl lg:text-3xl font-uk-reg-plates`}>
              {`24h's`} Help and Advice
            </h1>
            <div>
              Don’t get confused, get in touch! We’re here 7 days a week
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



    </PageLayout>
  )
}