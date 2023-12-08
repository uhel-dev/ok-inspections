import "../../globals.css";
import ContactUsForm from "../../../../components/contact-us/ContactUsForm";
import { Footer } from "../../../../components/mainLayout/Footer";
import CustomHeader from "../../../../components/mainLayout/CustomHeader";
import { Breadcrumbs } from "../../../../components/mainLayout/Breadcrumbs";
import SeoMetadata, { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import Image from "next/image";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import ThreeGridColSelectBestTime from "../../../../components/ThreeGridColSelectBestTime";
import { ArrowDownCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Script from "next/script";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "24h Tyres - Contact Us for 24/7 Tyre Services | 24h Tyres",
//   description: "Get in touch with us for 24/7 tyre services. Whether it's an inquiry or emergency assistance, 24h Tyres is here to help. Contact us now.",
//   openGraph: {
//     url: "https://24h-tyres.co.uk/contact-us",
//     title: "24h Tyres - Contact Us for 24/7 Tyre Services | 24h Tyres",
//     description: "Get in touch with us for 24/7 tyre services. Whether it's an inquiry or emergency assistance, 24h Tyres is here to help. Contact us now.",
//     images: [
//       {
//         url: "https://24h-tyres.co.uk/contact-us.png",
//         width: 1200,
//         height: 630, // Optimal for Facebook&#8203;``【oaicite:4】``&#8203;
//         alt: "Contact Us at 24h Tyres",
//       },
//       {
//         url: "https://24h-tyres.co.uk/contact-us.png",
//         width: 1200,
//         height: 627, // Optimal for LinkedIn&#8203;``【oaicite:3】``&#8203;
//         alt: "Contact Us at 24h Tyres",
//       },
//       {
//         url: "https://24h-tyres.co.uk/contact-us.png",
//         width: 1200,
//         height: 561, // Optimal for Twitter&#8203;``【oaicite:2】``&#8203;
//         alt: "Contact Us at 24h Tyres",
//       },
//       {
//         url: "https://24h-tyres.co.uk/contact-us-16x9.png",
//         width: 1600, // Example width for 16x9 aspect ratio
//         height: 900, // Example height for 16x9 aspect ratio
//         alt: "Contact Us at 24h Tyres - 16x9 Aspect Ratio",
//       },
//       {
//         url: "https://24h-tyres.co.uk/contact-us-4x3.png",
//         width: 1200, // Example width for 4x3 aspect ratio
//         height: 900, // Example height for 4x3 aspect ratio
//         alt: "Contact Us at 24h Tyres - 4x3 Aspect Ratio",
//       },
//       {
//         url: "https://24h-tyres.co.uk/contact-us-1x1.png",
//         width: 1000, // Example width for 1x1 aspect ratio
//         height: 1000, // Example height for 1x1 aspect ratio
//         alt: "Contact Us at 24h Tyres - 1x1 Aspect Ratio",
//       }
//     ],
//     site_name: "24h Tyres",
//   },
//   twitter: {
//     cardType: "summary_large_image",
//     site: "@24hTyres",
//     title: "24h Tyres - Contact Us for 24/7 Tyre Services | 24h Tyres",
//     description: "Get in touch with us for 24/7 tyre services. Whether it's an inquiry or emergency assistance, 24h Tyres is here to help. Contact us now.",
//     image: "https://24h-tyres.co.uk/contact-us.png",
//     alt: "Contact Us at 24h Tyres",
//   }
// }

export default function Page() {

    const contactMetadata: CustomMetadata = {
      title: "24h Tyres - Contact Us for 24/7 Tyre Services | 24h Tyres",
      description: "Get in touch with us for 24/7 tyre services. Whether it's an inquiry or emergency assistance, 24h Tyres is here to help. Contact us now.",
      url: "/contact-us",
      imageUrl: "https://24h-tyres.co.uk/contact-us.png",
      canonical: "https://24h-tyres.co.uk/contact-us",
      keywords: "24h Tyres, Contact us, 24/7 tyre services, tyre services UK, car tyres, tyre brands, van tyres, tyre emergencies, tyre repairs"
    }

    const jsonLD = {
      "@context": "http://schema.org",
      "@type": "Service",
      "name": "24h Tyres",
      "description": "Get in touch with us for 24/7 tyre services. Whether it's an inquiry or emergency assistance, 24h Tyres is here to help. Contact us now.",
      "url": "https://24h-tyres.co.uk/contact-us",
      "image": "https://24h-tyres.co.uk/contact-us.png",
      "serviceType": "Tyre Services",
      "areaServed": {
        "@type": "Country",
        "name": "UK"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://24h-tyres.co.uk/contact-us"
      },
      "provider": {
        "@type": "Organization",
        "name": "24h Tyres",
        "url": "https://24h-tyres.co.uk",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://24h-tyres.co.uk/contact-us"
        }
      },
      "serviceOutput": ["Car Tyres", "Van Tyres", "Mobile Tyre Fitting"],
      "keywords": "24h Tyres, Contact us, 24/7 tyre services, tyre services UK, car tyres, van tyres, mobile tyre fitting, tyre emergencies, tyre inquiries"
    }

    return (
        <>
            <SeoMetadata metadata={contactMetadata}/>
            <Script
              id="app-ld-json"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLD, null, "\t"),
              }}
            >
            </Script>
            <CustomHeader/>
            <main className="flex flex-col items-center justify-between justify-center p-4">
                <Breadcrumbs width={`w-4/5`} />
                <div className={`w-full lg:w-4/5 lg:p-4`}>

                  <h1 className={`text-3xl lg:text-5xl font-uk-reg-plates`}>
                    Need Tyres Fast? Contact 24H Tyres - {`London's`} Premier Mobile Tyre Network
                  </h1>

                  {/* hero  */}
                  <div className={`flex flex-col lg:flex-row py-4 lg:py-16 gap-4`}>
                    <div className={`w-full lg:w-1/2 flex flex-col gap-4 justify-center`}>
                      <h2 className={`text-xl lg:text-3xl font-uk-reg-plates`}>
                        Expert Tyre Services at Your Doorstep Across London
                      </h2>
                      <div>
                        Looking for a <strong>hassle-free tyre replacement service</strong> in London? 24H Tyres offers fast, reliable, and competitively priced mobile tyre fitting services right at your doorstep. With our expansive network of skilled fitters, we ensure {`you're`} never stranded with tyre troubles.
                      </div>
                      <div className={`mt-4`}>
                        <Link className={`kdev-button-cta-yellow-black`} href={`${CTA_PHONE_NUMBER}`}>Call us now</Link>
                      </div>
                    </div>
                    <div className={`w-full lg:w-1/2 order-first lg:order-none`}>
                      <Image priority={true} className={`w-full`} sizes="(max-width: 768px) 100vw, 50vw" width={500} height={500} src={`/general/contact-us.webp`} alt={'Expert Tyre Services at Your Doorstep Across London'}/>
                    </div>
                  </div>
                </div>


              <div className={`w-full lg:w-4/5 lg:p-4 order-last lg:order-none`}>
                <ThreeGridColSelectBestTime/>
              </div>


              <section className={`w-full lg:w-4/5 lg:p-4 py-4`}>
                <div className={`flex flex-col lg:flex-row  lg:py-16 gap-4`}>
                  <div className={`w-full lg:w-1/2 flex flex-col justify-center gap-8`}>
                      <div className={`flex flex-col gap-2 mt-4 lg:mt-0`}>
                        <h3 className={`kdev-h3`}>Our Service Advantage</h3>
                        <div className={`flex flex-col`}>
                          <div className={`kdev-subheading`}>Why Choose 24H Tyres?</div>
                          <div className={`kdev-text`}>At 24H Tyres, we prioritize your convenience. Our unique network connects you with the nearest fitter, ensuring rapid response times and the best prices in London. Experience the ease of professional tyre services without leaving your location.</div>
                        </div>
                      </div>
                      <div className={`flex flex-col gap-2`}>
                        <h3 className={`kdev-h3`}>How It Works</h3>
                        <div className={`flex flex-col`}>
                          <div className={`kdev-subheading`}>Seamless Tyre Replacement at Your Convenience</div>
                          <div className={`kdev-text`}>Our process is straightforward. Place a call, and {`we"ll`} dispatch the nearest fitter. {`They'll`} arrive promptly, equipped to address your tyre needs efficiently, ensuring {`you're`} back on the road in no time.</div>
                          <Link href={'/how-to-book-an-appointment'} className={`kdev-button-cta-yellow-black mt-4`}>Read more - How to book an appointment</Link>
                          <div className={`flex gap-2 mt-2 items-center`}>
                            <p className={`text-sm lg:text-base`}>Or simply <span className={`text-orange-600`}>send us a message</span> and {`we'll`} get back to you</p>
                            <span className={`hidden lg:block`}>
                              <ArrowRightCircleIcon className={`w-8 h-8 animate__animated animate__bounce`}/>
                            </span>
                            <span className={`block lg:hidden`}>
                              <ArrowDownCircleIcon className={`w-8 h-8 animate__animated animate__bounce`}/>
                            </span>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className={`w-full lg:w-1/2`}>
                    <div className={`w-full`}>
                      <ContactUsForm/>
                    </div>
                  </div>
                </div>
              </section>

              <section className={`w-full lg:w-4/5 lg:p-4 py-4`}>
                <div className={`flex flex-col gap-2`}>
                  <h3 className={`kdev-h3`}>Services Offered</h3>
                  <div className={`flex flex-col`}>
                    <div className={`kdev-subheading`}>Comprehensive Mobile Tyre Services in London</div>
                    <div className={`mt-2`}>
                      <ul className="grid lg:grid-cols-3 gap-2 lg:gap-4">
                        <li>
                          <Link href="/tyres/fitting-options/new-car-tyres" className={`cursor-default`}>
                            <div className="">
                              <strong className={`underline hover:cursor-pointer`}>New Car Tyres</strong> - Offering a wide range of quality new tyres from leading brands to enhance your {`vehicle's`} performance.
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/tyres/fitting-options/part-worn-tyres" className={`cursor-default`}>
                            <div className="">
                              <strong className={`underline hover:cursor-pointer`}>Used Car Tyres</strong> - Carefully inspected and cost-effective used tyres, ideal for budget-conscious drivers without compromising safety.
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/tyres/services/wheel-services/puncture-repair" className={`cursor-default`}>
                            <div className="">
                              <strong className={`underline hover:cursor-pointer`}>Puncture Repair</strong> - Quick and efficient puncture repair services to restore your {`tyre's`} integrity and ensure your safety on the road.
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/tyres/services/wheel-services/valve-servicing" className={`cursor-default`}>
                            <div className="">
                              <strong className={`underline hover:cursor-pointer`}>Valve Servicing</strong> - Comprehensive valve maintenance and replacement services to ensure your tyres retain optimal air pressure.
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/tyres/services/wheel-services/wheel-balancing" className={`cursor-default`}>
                            <div className="">
                              <strong className={`underline hover:cursor-pointer`}>Wheel Balancing</strong> - Precision wheel balancing services to enhance driving comfort and extend tyre life by ensuring even tyre wear.
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/tyres/services/wheel-services/rim-fitting" className={`cursor-default`}>
                            <div className="">
                              <strong className={`underline hover:cursor-pointer`}>Rim Fitting</strong> - Expert rim fitting services for a wide range of vehicles, ensuring perfect alignment and performance of your wheels.
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link href={'/tyres'} className={`kdev-button-cta-yellow-black mt-4`}>Services Offered</Link>
                  </div>
                </div>
              </section>


              <section className={`w-full lg:w-4/5 lg:p-4 py-4`}>
                <div className={`flex flex-col gap-2`}>
                  <h3 className={`kdev-h3`}>Call-Outs Offered</h3>
                  <div className={`flex flex-col`}>
                    <div className={`kdev-subheading`}>Reliable Call-Out Tyre Services Across London</div>
                    <div className={`mt-2`}>
                      <ul className="grid lg:grid-cols-3 gap-2 lg:gap-4">
                        <li>
                          <Link href="/tyres/services/emergency-tyre-repair" className={`cursor-default`}>
                            <div className="">
                              <strong className={`underline hover:cursor-pointer`}>Emergency Tyre Repair</strong> - Fast and reliable solutions for unexpected tyre issues, ensuring your safety and convenience on the road.
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/tyres/services/express-tyre-fitting" className={`cursor-default`}>
                            <div className="">
                              <strong className={`underline hover:cursor-pointer`}>Express Tyre Fitting</strong> - Speedy and efficient tyre fitting services to get you back on the road with minimal downtime.
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/tyres/services/mobile-tyre-repair" className={`cursor-default`}>
                            <div className="">
                              <strong className={`underline hover:cursor-pointer`}>Mobile Tyre Repair</strong> - Convenient on-the-spot tyre repair services, bringing expert assistance directly to your location.
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link href={'/tyres'} className={`kdev-button-cta-yellow-black mt-4`}>Call-Outs Offered</Link>
                  </div>
                </div>
              </section>

              <section className={`w-full lg:w-4/5 lg:p-4 py-4`}>
                <div className={`flex flex-col lg:flex-row gap-2`}>
                  <div className={`w-full lg:w-1/2`}>
                    <h4 className={`kdev-h3`}>Your Journey with Our Mobile Tyre Service</h4>
                    <div className={`kdev-subheading`}>Seamless, Efficient, and Convenient – From Request to Completion</div>
                    <div className={`flex flex-col gap-2 mt-4`}>
                      <div className={`flex items-center gap-2`}>
                        <div className={`w-[36px] bg-black text-24h-yellow p-2 font-semibold font-uk-reg-plates flex items-center justify-center`}>#1</div>
                        <div>
                          <strong>Service Request</strong>: A customer places a service request via phone or website.
                        </div>
                      </div>
                      <div className={`flex items-center gap-2`}>
                        <div className={`w-[36px] bg-black text-24h-yellow p-2 font-semibold font-uk-reg-plates flex items-center justify-center`}>#2</div>
                        <div>
                          <strong>Dispatch</strong>: The nearest mobile tyre service unit is dispatched to the {`customer's`} location.
                        </div>
                      </div>
                      <div className={`flex items-center gap-2`}>
                        <div className={`w-[36px] bg-black text-24h-yellow p-2 font-semibold font-uk-reg-plates flex items-center justify-center`}>#3</div>
                        <div>
                          <strong>On-Site Assessment</strong>: The technician arrives and assesses the tyre situation.
                        </div>
                      </div>
                      <div className={`flex items-center gap-2`}>
                        <div className={`w-[36px] bg-black text-24h-yellow p-2 font-semibold font-uk-reg-plates flex items-center justify-center`}>#4</div>
                        <div>
                          <strong>Tyre Service</strong>: The necessary tyre service (e.g., tyre replacement, puncture repair) is performed on-site.
                        </div>
                      </div>
                      <div className={`flex items-center gap-2`}>
                        <div className={`w-[36px] bg-black text-24h-yellow p-2 font-semibold font-uk-reg-plates flex items-center justify-center`}>#5</div>
                        <div>
                          <strong>Payment and Completion</strong>: The customer makes a payment and the job is completed.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`w-full lg:w-1/2`}>
                    <Image src={`/infographic-contact-us.png`} alt={`Infographic illustrating mobile tyre service process in #feea12 color theme, highlighting steps from service request to completion, including service request, dispatch, on-site assessment, tyre service, and payment.`} className={`w-full`} width={500} height={500}></Image>
                  </div>
                </div>
              </section>

            </main>
            <Footer/>
        </>
    )
}