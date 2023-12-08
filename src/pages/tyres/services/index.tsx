import Link from "next/link";
import { CTA_PHONE_NUMBER, TELEGRAM_GROUP_JOIN_HREF } from "@/static/utils";
import Image from "next/image";
import PageLayout from "../../../../components/mainLayout/PageLayout";
import { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";

const metadata: CustomMetadata = {
  title: "Comprehensive Tyre Services | 24h Tyres",
  description: "Discover our full range of tyre services at 24h Tyres. From expert mobile tyre fitting to regular maintenance, wheel alignment, and puncture repairs, we provide quality services to keep your vehicle running smoothly. Explore our professional tyre solutions tailored for every need.",
  url: "/tyres/services",
  imageUrl: "https://24h-tyres.co.uk/tyres-services.png",
  canonical: "https://24h-tyres.co.uk/tyres/services",
  keywords: "tyre services, tyre fitting, wheel alignment, tyre maintenance, 24h Tyres, puncture repairs, tyre solutions, vehicle services, tyre experts, professional tyre services"
}


export default function TyresServices() {
  return (
    <PageLayout metadata={metadata}>
      <section className={`kdev-section`}>
        {/* hero  */}
        <div className={`flex flex-col lg:flex-row gap-4`}>
          <div className={`w-full lg:w-1/2 flex flex-col gap-4 justify-center`}>
            <h1 className={`text-xl lg:text-3xl font-uk-reg-plates`}>
              {`24h's`} Tyre Services
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
            <Image className={`w-full`} src={`/all-tyre-brands.jpg`} alt={'We have tyre experts scattered around UK'} width={500} height={500}/>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}