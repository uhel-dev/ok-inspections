import "../app/globals.css";

import CustomHeader from "../../components/mainLayout/CustomHeader";
import { Breadcrumbs } from "../../components/mainLayout/Breadcrumbs";
import { Footer } from "../../components/mainLayout/Footer";
import Image from "next/image";
import CtaBanner from "../../components/shared/CtaBanner";
import GeneralRequestCallbackDialog from "../../components/dialogs/GeneralRequestCallbackDialog";
import SeoMetadata, { CustomMetadata } from "../../components/mainLayout/SeoMetadata";
import Script from "next/script";

export default function HowToBookAnAppointment() {
    const bookingMetadata: CustomMetadata = {
        title: "24h Tyres - How to Book an Appointment | 24h Tyres",
        description: "Booking your tyre service with 24h Tyres is easy. Follow our simple step-by-step guide and schedule your appointment today.",
        url: "/how-to-book-an-appointment",
        imageUrl: "https://24h-tyres.co.uk/how-to-book-an-appointment.png",
        canonical: "https://24h-tyres.co.uk/how-to-book-an-appointment",
        keywords: "24h Tyres, book appointment, tyre service booking, tyre fitting booking, tyre repair booking, schedule tyre service"
    }

    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "How to Book an Appointment",
        "description": "Booking your tyre service with 24h Tyres is easy. Follow our simple step-by-step guide and schedule your appointment today.",
        "url": "https://www.24h-tyres.co.uk/how-to-book-an-appointment",
        "image": "https://www.24h-tyres.co.uk/how-to-book-an-appointment.png",
        "logo": "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
        "areaServed": {
            "@type": "Country",
            "name": "UK"
        },
        "serviceType": "How to Book an Appointment",
        "hoursAvailable": [
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
        "provider": {
            "@type": "Organization",
            "name": "24h Tyres",
            "url": "https://www.24h-tyres.co.uk",
            "logo": "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "0208 0792 350",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "GB",
                "availableLanguage": "en"
            }
        }
    }

    return (
        <>
            <SeoMetadata metadata={bookingMetadata}/>
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
                <Breadcrumbs width={"w-4/5"}/>
                <div className="w-full lg:w-4/5 flex items-center justify-center">
                    <div className="w-full p-4 flex flex-col gap-4 lg:gap-14">
                        <div className={`flex flex-col-reverse lg:flex-row gap-10 p-6 lg:p-0`}>
                            <div className={`w-full lg:w-2/3 flex flex-col justify-center`}>
                                <h1 className="mb-4 text-4xl lg:text-5xl leading-none tracking-tight text-gray-900 dark:text-white font-uk-reg-plates">How to book an mobile tyres fitting appointment?</h1>
                                <h2 className="mb-4 text-2xl lg:text-4xl leading-none tracking-tight text-gray-900 dark:text-white font-uk-reg-plates">1. Message Us</h2>
                                <p>
                                    Ready to book an appointment with 24h Tyres? We&apos;ve got you covered! Whether you&apos;re in need of tyre changing, repairing, or balancing, we&apos;ve got the expertise to keep you rolling smoothly on the road. Don&apos;t waste time searching - just send us a message or give us a call, and we&apos;ll take care of the rest.
                                </p>
                                <br/>
                                <p>
                                    Our friendly team is here to assist you every step of the way. Experience hassle-free booking and exceptional service. Contact us now and let&apos;s get you back on track in no time!
                                </p>
                                <div className={`flex gap-2 py-4`}>
                                    <GeneralRequestCallbackDialog/>
                                </div>
                            </div>
                            <div className={`w-full lg:w-1/3 flex justify-end`}>
                                <Image src={`/booking-process-message-us.svg`} alt={`Booking process, Call us to get help with your tyres`} width={`320`} height={`320`} className={`rotate-2`}/>
                            </div>
                        </div>





                        <div className={`flex flex-col lg:flex-row gap-10 p-6 lg:p-0`}>
                            <div className={`w-full lg:w-1/3 flex justify-start`}>
                                <Image src={`/booking-process-confirm-a-date.svg`} alt={`Booking process, Confirm a date to get help with your tyres`} width={`320`} height={`320`} className={`rotate-2`}/>
                            </div>
                            <div className={`w-full lg:w-2/3 flex flex-col justify-center`}>
                                <h2 className="mb-4 text-2xl leading-none tracking-tight text-gray-900 lg:text-4xl dark:text-white font-uk-reg-plates">2. Confirm Your Preferred Date</h2>
                                <p>
                                    Ready to move forward with 24h Tyres? We&apos;re all about making your experience as convenient as possible.
                                </p>
                                <br/>
                                <p>
                                    We respect your time, so simply let us know the 2-hour slot that suits you best. No more waiting around all day for us to arrive. We pride ourselves on being punctual, ensuring that we&apos;ll be there when we say we will. Say goodbye to wasted time and hello to reliable service. Take the next step and confirm your preferred date now. We&apos;re here to make it easy for you!
                                </p>
                            </div>
                        </div>





                        <div className={`flex flex-col-reverse lg:flex-row gap-10 p-6 lg:p-0`}>
                            <div className={`w-full lg:w-2/3 flex flex-col justify-center`}>
                                <h2 className="mb-4 text-2xl leading-none tracking-tight text-gray-900 lg:text-4xl dark:text-white font-uk-reg-plates">3. Wait for our Arrival</h2>
                                <p>
                                    Sit back and relax while we come to you! Our fully-equipped van is on its way, ready to handle all your tyre needs right at your location. No more hassle of driving to a service center or waiting in long queues. Our skilled technicians will arrive promptly, armed with all the necessary tools and expertise to change or fix your tyres on the spot. You can trust our team to deliver efficient and reliable service, so you can get back on the road in no time.
                                </p>
                                <br/>
                                <p className={``}>
                                    <strong>Just sit tight and leave the rest to us.</strong>
                                </p>
                            </div>
                            <div className={`w-full lg:w-1/3 flex justify-end`}>
                                <Image src={`/booking-process-message-us.svg`} alt={`Booking process, Call us to get help with your tyres`} width={`320`} height={`320`} className={`rotate-2`}/>
                            </div>
                        </div>

                        <div className={`flex justify-center`}>
                            <div className={`w-full lg:w-1/4 flex gap-2 justify-center`}>
                                <GeneralRequestCallbackDialog/>
                            </div>
                        </div>
                        <CtaBanner/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}