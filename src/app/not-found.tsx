import PageLayout from "../../components/mainLayout/PageLayout";
import React from "react";
import Link from "next/link";

const metadata = {
  title: "404 | 24h Tyres",
  description: "The page you were trying to reach can't be found",
  url: "/404",
  imageUrl: "https://24h-tyres.co.uk/404.png",
  canonical: "https://24h-tyres.co.uk/404",
  keywords: "tyre fitters, England, 24h Tyres, mobile tyre service, professional tyre fitting, tyre experts, nationwide coverage"
};

export default function ErrorPage404() {
  return (
    <>
      <PageLayout metadata={metadata} showBreadcrumbs={false}>
        <section className={`bg-black`}>
          <div className="w-full h-[640px] bg-contain bg-no-repeat bg-center bg-[url('/404.png')] flex justify-center px-8 relative">
            {/* Overlay with gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent z-0"></div>

            {/* Inner content */}
            <div id="hero-inner-div" className="w-full xl:w-4/5 z-10 flex items-center">

              <div className="flex flex-col justify-center items-start text-left text-white z-10 lg:w-2/3 xl:w-1/2">
                {/* Heading */}
                <h1 className="text-4xl font-bold mb-4 font-uk-reg-plates"> Oops! Looks like {`you've`} hit a dead end.</h1>
                <h2 className={`text-xl`}>But {`don't`} worry, finding the right tyres is much easier than finding this page!</h2>
                <Link href={`/`} className={`kdev-button-cta-yellow-black mt-4`}>Home</Link>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}