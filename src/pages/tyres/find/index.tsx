import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import PageLayout from "../../../../components/mainLayout/PageLayout";
import Image from "next/image";


const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tyre Search Options",
    description: "Find the perfect tyres for mobile fitting with four search options at 24h Tyres: by brand, make, registration, or size. Experience convenient and personalized service.",
    url: "https://www.24h-tyres.co.uk/find",
    image: "https://24h-tyres.co.uk/search-tyres-by.jpg",
    logo: "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
    areaServed: {
        "@type": "Country",
        name: "UK",
    },
    serviceType: "Four Search Options at 24h Tyres",
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

const tyresFindMobileFittingMetadata: CustomMetadata = {
  title: "Find Tyres for Mobile Fitting - 4 Ways to Choose | 24h Tyres",
  description: "Discover tyres for mobile fitting using four convenient search options at 24h Tyres: by brand, make, registration, or size. Tailored to your needs for optimal service.",
  url: "/tyres/find",
  imageUrl: "https://24h-tyres.co.uk/tyres-find-mobile-fitting.jpg",
  canonical: "https://24h-tyres.co.uk/tyres/find",
  keywords: "mobile tyre fitting, find tyres, tyre search options, tyre by brand, tyre by make, tyre by registration, tyre by size, 24h Tyres",
}


export const SearchOptionsGrid = () => {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 py-6`}>
      <Link className={`group flex flex-col items-center justify-center`} href={`/tyres/find/by-brand`}>
        <Image className={`rounded-t-xl w-full`} sizes="(max-width: 768px) 100vw, 50vw" src={`/tyres/find/by-brand.webp`} alt={`find tyres by brand & get them fitted at your location at 24h tyres - browse our tyre services`} width={400} height={400} />
        <div className={`rounded-b-xl w-full text-center p-4 bg-black text-white font-uk-reg-plates group-hover:bg-[#FF6341] hover:cursor-pointer`}>Find by Tyre Brand</div>
      </Link>
      <Link className={`group flex flex-col items-center justify-center rounded-xl`} href={`/tyres/find/by-make`}>
        <Image className={`rounded-t-xl w-full`} sizes="(max-width: 768px) 100vw, 50vw" src={`/tyres/find/by-make.webp`} alt={`find tyres by make & get them fitted at your location at 24h tyres - browse our mobile tyre services`} width={400} height={400} />
        <div className={`rounded-b-xl w-full text-center p-4 bg-black text-white font-uk-reg-plates group-hover:bg-[#FF6341] hover:cursor-pointer`}>Find by Car Make</div>
      </Link>
      <Link className={`group flex flex-col items-center justify-center rounded-xl`} href={`/tyres/find/by-make`}>
        <Image className={`rounded-t-xl w-full`} sizes="(max-width: 768px) 100vw, 50vw" src={`/tyres/find/by-registration.webp`} alt={`find tyres by registration number & get them fitted at your location at 24h tyres - browse our express tyre services `} width={400} height={400} />
        <div className={`rounded-b-xl w-full text-center p-4 bg-black text-white font-uk-reg-plates group-hover:bg-[#FF6341] hover:cursor-pointer`}>Find by Registration</div>
      </Link>
      <Link className={`group flex flex-col items-center justify-center rounded-xl`} href={`/tyres/find/by-make`}>
        <Image className={`rounded-t-xl w-full`} sizes="(max-width: 768px) 100vw, 50vw" src={`/tyres/find/by-size.webp`} alt={`find tyres by size & get them fitted at your location at 24h tyres - browse our emergency tyre services`} width={400} height={400} />
        <div className={`rounded-b-xl w-full text-center p-4 bg-black text-white font-uk-reg-plates group-hover:bg-[#FF6341] hover:cursor-pointer`}>Find by Tyre Size</div>
      </Link>
    </div>
  )
}

export default function Find() {
  return (
    <>
      <PageLayout metadata={tyresFindMobileFittingMetadata} jsonLD={jsonLD}>
        <section className={`kdev-section`}>
          <div className="w-full flex items-center justify-center">
            <div className="w-full py-4 flex flex-col gap-2">
              <h1 className={`kdev-h1`}>Find Tyres for Mobile Fitting - 4 Ways to Choose</h1>
              <SearchOptionsGrid/>
            </div>
          </div>
        </section>



        <section className={`kdev-section`}>
          <div className={`grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            <div className={`md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90 lg:col-span-2`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <h3 className={`kdev-h3`}>Finding Tyres by Brand</h3>
                <p className={`kdev-text`}>At 24h Tyres, we understand the significance of brand reputation. We offer a wide selection of top-tier tyre brands known for their quality and durability. Brands like Michelin, Bridgestone, and Goodyear are among our offerings. Choosing tyres from trusted brands not only enhances your {`vehicle's`} performance but also guarantees reliability and peace of mind.</p>
                <div className={`pt-4`}>
                  <Link href={`/tyres/find/by-brand`} className={`p-4 bg-black text-white font-uk-reg-plates-bold-caps hover:bg-24h-yellow hover:text-black`}>Search by tyre brand</Link>
                </div>
              </div>
            </div>
            <Link href={`/tyres/find/by-brand`} className={`mt-4 md:mt-0`}>
              <Image className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-90 w-full h-full`} src={`/tyres/find/search-by-brand.png`} alt={`search by brand`} width={256} height={256} />
            </Link>
          </div>
        </section>


        <section className={`kdev-section`}>
          <div className={`grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            <div className={`md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <div className={`kdev-h3`}>Quality Assurance</div>
                <p className={`kdev-text`}>At 24h Tyres, quality isn&apos;t just a promise; it&apos;s our commitment. We offer top-tier tyre brands known for their quality and durability, ensuring you get the best grip, handling, and braking performance.</p>
              </div>
            </div>
            <div className={`block md:hidden lg:block md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <div className={`kdev-h3`}>Lifetime Guarantee</div>
                <p className={`kdev-text`}>Your peace of mind matters to us. {`That's`} why we provide a lifetime guarantee on our tyres. When you choose us, {`you're`} covered for the long haul, knowing that we stand behind the quality of our products.</p>
              </div>
            </div>
            <div className={`md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <div className={`kdev-h3`}>Expert Guidance</div>
                <p className={`kdev-text`}>Our experienced team has years of industry knowledge, and they are here to assist you every step of the way. From selecting the right tyres to post-purchase support, count on us to guide you toward the best tyre choice for your specific needs.</p>
              </div>
            </div>
          </div>
        </section>


        <section className={`kdev-section`}>
          <div className={`grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            <Link href={`/tyres/find/by-make`} className={`mt-4 md:mt-0 order-last md:order-none`}>
              <Image className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-90 w-full h-full`} src={`/tyres/find/search-by-make.png`} alt={`search by make`} width={256} height={256} />
            </Link>
            <div className={`md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-black text-white p-4 dark:bg-neutral-90 lg:col-span-2`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <h3 className={`kdev-h3`}>Finding Tyres by Car Make</h3>
                <p className={`kdev-text`}>Finding the perfect tyres for your car make and model has never been simpler. Our intuitive search options allow you to select your {`vehicle's`} make and model, ensuring that you get tyres specifically designed for your car. This tailored approach optimizes your {`vehicle's`} performance, handling, and safety.</p>
                <div className={`pt-4`}>
                  <Link href={`/tyres/find/by-make`} className={`p-4 bg-24h-yellow text-black font-uk-reg-plates-bold-caps hover:bg-24h-yellow hover:text-black`}>Search by car make</Link>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className={`kdev-section`}>
          <div className={`grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            <div className={`md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-90 lg:col-span-2`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <h3 className={`kdev-h3`}>Finding Tyres by Registration</h3>
                <p className={`kdev-text`}>{`We've`} simplified the tyre selection process by allowing you to search for tyres using your {`vehicle's`} registration number. Just enter your registration details, and our system will match your vehicle with the appropriate tyre options. {`It's`} a quick and accurate way to ensure that the tyres you choose are a perfect fit for your vehicle.</p>
                <div className={`pt-4`}>
                  <Link href={`/tyres/find/by-registration`} className={`p-4 bg-black text-white font-uk-reg-plates-bold-caps hover:bg-24h-yellow hover:text-black`}>Search by registration</Link>
                </div>
              </div>
            </div>
            <Link href={`/tyres/find/by-brand`} className={`mt-4 md:mt-0`}>
              <Image className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-90 w-full h-full`} src={`/tyres/find/search-by-registration.png`} alt={`search by registration`} width={256} height={256} />
            </Link>
          </div>
        </section>


        <section className={`kdev-section`}>
          <div className={`grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            <div className={`block md:hidden lg:block md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <div className={`kdev-h3`}>Confidence in Every Drive</div>
                <p className={`kdev-text`}>At 24h Tyres, we understand that your safety and peace of mind are paramount. Our wide range of budget-friendly tyres ensures that you can drive confidently without breaking the bank. Experience the thrill of the road without compromising your budget.</p>
              </div>
            </div>
            <div className={`md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <div className={`kdev-h3`}>Lightning-Fast Assistance</div>
                <p className={`kdev-text`}>When you&apos;re in need, we don&apos;t keep you waiting. Our average response time of just 20 minutes ensures that you&apos;re back on the road as soon as possible. Count on us for quick, reliable assistance that eliminates the stress of unexpected tire issues. Call now.</p>
              </div>
            </div>
            <div className={`md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <div className={`kdev-h3`}>Local Network Reliability</div>
                <p className={`kdev-text`}>Our extensive network of local fitters is your assurance of timely help. When you choose 24h Tyres, you&apos;re tapping into a community of experts who are always ready to assist. Drive with confidence, knowing that help is never too far away.</p>
              </div>
            </div>
          </div>
        </section>



        <section className={`kdev-section`}>
          <div className={`grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            <Link href={`/tyres/find/by-size`} className={`mt-4 md:mt-0 order-last md:order-none`}>
              <Image className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-90 w-full h-full`} src={`/tyres/find/search-by-size.png`} alt={`search by size`} width={256} height={256} />
            </Link>
            <div className={`md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-black text-white p-4 dark:bg-neutral-90 lg:col-span-2`}>
              <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                <h3 className={`kdev-h3`}>Finding Tyres by Tyre Size</h3>
                <p className={`kdev-text`}>Understanding your tyre size is essential for a precise fit. Our comprehensive guide on how to find your tyre size and the importance of correct sizing ensures that you select the right tyres for your vehicle. A properly sized tyre not only improves safety but also contributes to fuel efficiency and overall driving comfort.</p>
                <div className={`pt-4`}>
                  <Link href={`/tyres/find/by-size`} className={`p-4 bg-24h-yellow text-black font-uk-reg-plates-bold-caps hover:bg-24h-yellow hover:text-black`}>Search by tyre size</Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-24h-yellow py-8 text-black">
          <div className="text-center container mx-auto px-4">
            <h2 className="text-3xl font-uk-reg-plates">Lifetime Guarantee on All Tyres</h2>
            <p className="mb-4 font-uk-reg-plates-regular">
              Drive with confidence thanks to our lifetime guarantee on all car and van tyres. No additional costs, just the reassurance you need.
            </p>
            <div className={`hidden lg:block pt-2`}>
              <Link href={CTA_PHONE_NUMBER} className="kdev-button-cta-black-yellow">Call Now</Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}