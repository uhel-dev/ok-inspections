import "../../../app/globals.css";

import SearchTabs from "../../../../components/search-sections/SearchTabs";
import UspRow from "../../../../components/USPs/UspRow";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import CtaBanner from "../../../../components/shared/CtaBanner";
import { FAQ } from "../../../../components/shared/FAQ";
import CarMakesList from "../../../../components/shared/CarMakesList";
import { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import Image from "next/image";
import { FAQuestion } from "../../../../components/types";
import PageLayout from "../../../../components/mainLayout/PageLayout";

const questions: FAQuestion[] = [
    {
        question: "What types of new car tyres do you offer?",
        answer: "At 24h Tyres, we offer a comprehensive range of new car tyres, including summer tyres, winter tyres, all-season tyres, performance tyres, run-flat tyres and more. We cater to a wide variety of car makes and models."
    },
    {
        question: "How do I know when to replace my car tyres?",
        answer: "Tyres should generally be replaced when the tread depth reaches 1.6mm, the legal limit in the UK. Other indicators include uneven wear, vibrations while driving, or visible damage like cuts, cracks or bulges."
    },
    {
        question: "Can you fit the new car tyres at my location?",
        answer: "Yes, we offer a mobile tyre fitting service where we can fit your new car tyres at a location that suits you, whether that's your home, workplace, or even the roadside."
    },
    {
        question: "How do I choose the right tyres for my car?",
        answer: "Choosing the right tyres depends on various factors like your driving style, where you drive, the car make and model, and the weather conditions you usually drive in. Our experts can help you select the perfect tyres to meet your specific needs."
    },
    {
        question: "Do new car tyres come with a warranty?",
        answer: "Yes, all our new car tyres come with a manufacturer's warranty that covers any manufacturing defects. Damage due to road hazards, improper use, or lack of maintenance is typically not covered."
    },
    {
        question: "How much do new car tyres cost?",
        answer: "The cost of new car tyres can vary greatly depending on the brand, size, and type of tyre. For a detailed quote, please browse our range or contact our customer service team."
    },
    {
        question: "What payment methods do you accept for new car tyres?",
        answer: "We accept a variety of payment methods, including major credit cards and debit cards. For more specific information, please refer to our Payment Options section on our website or contact our customer service team."
    },
    {
        question: "How long does it take to fit new car tyres?",
        answer: "The time it takes to fit new car tyres can vary, but typically it takes about 30 minutes per tyre. However, this can be slightly longer if additional services such as wheel alignment or balancing are required."
    },
    {
        question: "Can I buy new car tyres online?",
        answer: "Yes, you can browse and buy from our wide range of new car tyres directly on our website. Simply select the tyres you need, book a fitting time and location that suits you, and we'll take care of the rest."
    },
    {
        question: "What should I do with my old tyres when I buy new ones?",
        answer: "When you purchase new car tyres and have them fitted by us, we'll take care of your old tyres. We ensure all old tyres are disposed of in an environmentally friendly manner according to local regulations."
    }
];

const metadata: CustomMetadata = {
    title: "New Car Tyres - 24h Tyres",
    description: "Enhance your ride with branded tyres from 24h Tyres. Select from a diverse range of brands and models for the perfect fit.",
    url: "/tyres/fitting-options/services-new-tyres",
    imageUrl: "https://24h-tyres.co.uk/tyres/services/services-new-tyres.png",
    canonical: "https://24h-tyres.co.uk/tyres/fitting-options/new-car-tyres"
}

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "New Car Tyres",
    description: "Enhance your ride with branded tyres from 24h Tyres. Select from a diverse range of brands and models for the perfect fit.",
    url: "https://www.24h-tyres.co.uk/tyres/fitting-options/new-car-tyres",
    image: "https://24h-tyres.co.uk/tyres/services/services-new-tyres.png",
    logo: "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
    areaServed: {
        "@type": "Country",
        name: "UK",
    },
    serviceType: "New Car Tyres",
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

export default function NewCarTyres() {
    return (
       <PageLayout metadata={metadata} jsonLD={jsonLD}>
           <section className={`kdev-section`}>
               <div className="w-full lg:w-4/5 flex items-center justify-center">
                   <div className="w-full p-4 flex flex-col gap-2">
                       <div className={`flex flex-col gap-4`}>
                           <h1 className={`text-3xl lg:text-6xl font-uk-reg-plates font-extrabold bg-[#feea12] p-2 lg:p-8`}>
                               New Car Tyres
                           </h1>
                       </div>
                       <SearchTabs/>


                       <div className={`flex flex-col lg:flex-row gap-2`}>
                           <div className={`w-full lg:w-1/3`}>
                               <Image width={500} height={500} src={`/new-car-tyres/cheap-tyres-at-24h-tyres.png`} alt={``}/>
                           </div>
                           <div className={`w-full lg:w-2/3 lg:p-8`}>
                               <div className={`flex flex-col gap-2`}>
                                   <div className={`text-3xl lg:text-4xl`}>Car Tyres Online With Local Fitting</div>
                                   <div>
                                       {`Can't make it to the garage? No problem. 24h-tyres.co.uk brings the garage to you with our New Car Tyres service. Welcome to the page where convenience meets excellence.
                                    Our New Car Tyres service is designed to add flexibility and ease to your busy life. Whether you're at home, at work, or stranded due to a sudden tyre issue, our skilled technicians can come to your location to provide professional tyre fitting services.`}
                                   </div>
                                   <div>
                                       {`Our technicians are equipped with advanced tools and a broad selection of top-tier tyres from respected brands, ready for immediate installation. Whether you need a single tyre replaced or an entire set, we provide swift, precise fitting right at your doorstep.`}
                                   </div>
                                   <div>
                                       {`Remember, with 24h-tyres.co.uk, expert tyre fitting is just a phone call away. Choose our New Car Tyres service and experience the convenience of professional tyre services delivered to you, wherever you are.`}
                                   </div>
                               </div>
                           </div>
                       </div>


                       <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 py-6`}>
                           <Link className={`btn`} href={CTA_PHONE_NUMBER}>Call Us</Link>
                           <Link className={`btn`} href={`/how-to-book-an-appointment`}>How To Book An Appointment</Link>
                           <Link className={`btn`} href={`/tyres`}>Additional Tyre Services</Link>
                           <Link className={`btn`} href={`/faq`}>FAQs</Link>
                       </div>


                       <div>
                           <div className={`grid lg:grid-cols-2`}>
                               <div className={`flex flex-col gap-4 p-4`}>
                                   <div className={`text-3xl`}>Finding Your Tyre Size</div>
                                   <div>{`Your vehicle's tyre size might seem like a cryptic code, but it holds the key to getting the right tyres. To find it, consult your owner's manual or take a look at the sidewall of your current tyres. It's usually a combination of numbers and letters, like P215/65R16. This number sequence tells you the tyre's width, aspect ratio, construction type, and wheel diameter. When you're aware of your tyre size, you're one step closer to ensuring your safety on the road.`}</div>
                               </div>
                               <div className={`flex flex-col gap-4 p-4`}>
                                   <div className={`text-3xl`}>Buying Cheap Tyres</div>
                                   <div>{`Budget constraints don't have to mean compromising on safety. Affordable tyre options exist, and finding them is easier than you might think. Look for reputable tyre retailers or online shops that offer discounts and promotions. Remember that cost-effective tyres can still provide the performance and reliability you need.`}</div>
                               </div>
                               <div>
                                   <div></div>
                                   <div></div>
                               </div>
                           </div>
                       </div>

                       <CtaBanner/>
                       <div>
                           <section className="bg-gray-100 py-10 px-4 md:px-10 rounded-lg shadow-lg">
                               <h2 className="text-4xl font-semibold text-gray-800 mb-6">Choosing the Perfect Tyres
                                   for Your Vehicle - Elevate Your Driving Experience</h2>
                               <p className="text-gray-600 mb-6">{`When it comes to selecting the right tyres for your
                                    vehicle, there's no room for compromise. Dive into this comprehensive guide to
                                    understand how your tyre choice can revolutionize your driving experience. Explore
                                    the intricate world of tyre options tailored to your vehicle type and driving
                                    preferences, and ensure your safety and performance are top-notch.`}</p>
                           </section>
                       </div>
                       <CarMakesList/>
                       <div>
                           <div className="bg-gray-100 p-8">
                               <div className="mb-8">
                                   <h2 className="text-3xl font-semibold">Premium Tyres vs. Budget
                                       Options</h2>
                                   <p className="mt-4">
                                       When it comes to choosing the right tyres for your vehicle, {`there's`} often a
                                       trade-off between premium and budget options. Premium tyres are known for their
                                       exceptional performance, handling, and longevity. However, they do come with a
                                       higher price tag. On the other hand, budget tyres are more cost-effective and
                                       can still offer safety and reliability. {`Let's`} explore the pros and cons of each
                                       to help you make an informed choice.
                                   </p>
                               </div>

                               <div className="mb-8">
                                   <h3 className="text-xl font-semibold">Premium Tyres:</h3>
                                   <ul className="list-disc list-inside mt-4">
                                       <li>Superior Performance: Premium tyres are engineered with advanced technology
                                           and high-quality materials to provide exceptional performance in various
                                           driving conditions. They often offer better traction, handling, and
                                           responsiveness, which can enhance your driving experience.
                                       </li>
                                       <li>Longevity: Premium tyres are designed to last longer due to their durable
                                           construction. This means fewer replacements over time, ultimately saving you
                                           money in the long run.
                                       </li>
                                       <li>Safety: The advanced features of premium tyres, such as improved wet and dry
                                           grip, can contribute to better safety on the road, especially during adverse
                                           weather conditions.
                                       </li>
                                   </ul>
                               </div>

                               <div className="mb-8">
                                   <h3 className="text-xl font-semibold">Budget Tyres:</h3>
                                   <ul className="list-disc list-inside mt-4">
                                       <li>Cost-Effective: Budget tyres are a more budget-friendly option, making them
                                           an attractive choice for many consumers.
                                       </li>
                                       <li>Reliability: While they may not offer the same level of performance as
                                           premium tyres, budget tyres still provide a reliable and safe driving
                                           experience for everyday use.
                                       </li>
                                       <li>Value: Budget tyres can be a practical choice for drivers who primarily use
                                           their vehicles for commuting and {`don't`} require the high-performance
                                           capabilities of premium tyres.
                                       </li>
                                   </ul>
                               </div>

                               <div className="mb-8">
                                   <p className="font-semibold">Ultimately, the choice between premium and budget tyres
                                       depends on your specific needs, driving habits, and budget constraints. Consider
                                       factors such as your typical driving conditions, mileage, and willingness to
                                       invest in long-term performance when making your decision.</p>
                               </div>

                               <div className={`mb-8 text-xl font-bold`}>
                                   <p>At 24h-Tyres, we offer <strong>Premium</strong> and <strong>Budget</strong> tyres. <Link className={`text-[#feea12] bg-black p-2 rounded shadow`} href={CTA_PHONE_NUMBER}>Call Now</Link></p>
                               </div>

                               <div className="mb-8">
                                   <h2 className="text-3xl font-semibold">Adjusting Driving Styles for Tyre
                                       Longevity</h2>
                                   <p className="mt-4">
                                       Your driving style plays a significant role in determining how long your tyres
                                       will last. To extend their lifespan and optimize their performance, follow these
                                       tips:
                                   </p>
                                   <ol className="list-decimal list-inside mt-4">
                                       <li>Smooth Acceleration and Braking: Avoid rapid acceleration and abrupt
                                           braking, as these actions can cause excessive wear on your tyres. Gradual
                                           acceleration and braking help distribute the forces more evenly, preserving
                                           tyre tread.
                                       </li>
                                       <li>Pothole and Curb Avoidance: Be vigilant while driving and steer clear of
                                           potholes, curbs, and other road hazards. Impacting these obstacles can lead
                                           to tyre damage and premature wear.
                                       </li>
                                       <li>Proper Alignment and Balancing: Regularly check your {`vehicle's`} alignment and
                                           ensure that your tyres are balanced correctly. Misalignment can cause uneven
                                           tyre wear, reducing their longevity.
                                       </li>
                                   </ol>
                               </div>

                               <div className="mb-8">
                                   <h2 className="text-3xl font-semibold">Buying Tyres Online and Visiting a
                                       Fit Centre</h2>
                                   <p className="mt-4">
                                       Choosing where to purchase and install your tyres is an essential part of the
                                       process. {`Let's`} explore the advantages and considerations of buying tyres online
                                       versus visiting a fit center for professional installation.
                                   </p>
                               </div>

                               <div className="mb-8">
                                   <h3 className="text-xl font-semibold">Buying Tyres Online:</h3>
                                   <ul className="list-disc list-inside mt-4">
                                       <li>Convenience: Online tyre shopping offers convenience and the flexibility to
                                           browse a wide range of tyre options from the comfort of your home. You can
                                           easily compare prices and read reviews to make an informed decision.
                                       </li>
                                       <li>Cost Transparency: Online retailers often provide detailed information about
                                           tyre prices, including any discounts or promotions available, allowing you
                                           to budget effectively.
                                       </li>
                                   </ul>
                               </div>

                               <div className="mb-8">
                                   <h3 className="text-xl font-semibold">Visiting a Fit Centre:</h3>
                                   <ul className="list-disc list-inside mt-4">
                                       <li>Professional Installation: Fit centers provide expert installation services,
                                           ensuring that your tyres are mounted, balanced, and aligned correctly. This
                                           is crucial for optimal tyre performance and safety.
                                       </li>
                                       <li>Expert Advice: Fit center staff can offer personalized recommendations based
                                           on your vehicle type, driving habits, and specific needs. They can help you
                                           choose the right tyres for your situation.
                                       </li>
                                   </ul>
                               </div>

                               <div className="mb-8">
                                   <p className="font-semibold">{`It's`} important to strike a balance between convenience
                                       and professional expertise when buying and installing tyres. While online
                                       shopping can offer cost savings and convenience, visiting a fit center ensures
                                       that your tyres are installed correctly, maximizing their performance and
                                       safety.</p>
                               </div>

                               <div className="mb-8">
                                   <h2 className="text-3xl font-semibold">Maintaining Proper Tyre
                                       Pressure</h2>
                                   <p className="mt-4">
                                       Proper tyre pressure is a fundamental aspect of tyre maintenance that should not
                                       be overlooked. Maintaining the correct tyre pressure is essential for safety,
                                       fuel efficiency, and tyre longevity. {`Here's`} how you can ensure your tyres are
                                       properly inflated:
                                   </p>
                                   <ol className="list-decimal list-inside mt-4">
                                       <li>Regular Pressure Checks: Use a reliable tyre pressure gauge to check the
                                           tyre pressure regularly. Aim to do this at least once a month and before
                                           long trips. Remember that tyre pressure can change with temperature
                                           fluctuations, so monitor it throughout the year.
                                       </li>
                                       <li>{`Refer to Your Vehicle's Manual: Consult your vehicle's owner's manual or the
                                            tyre placard, typically located on the driver's door frame or inside the
                                            fuel filler door, for the manufacturer's recommended PSI (pounds per square
                                            inch) for your tyres.`}
                                       </li>
                                       <li>Adjust as Needed: If your tyres are underinflated, inflate them to the
                                           recommended PSI. Overinflated tyres can also be problematic, so make sure
                                           not to overinflate. Properly inflated tyres will promote even wear and
                                           improve fuel efficiency.
                                       </li>
                                   </ol>
                               </div>
                           </div>

                       </div>
                       <UspRow/>
                       <FAQ questionsIn={questions}/>


                       <div>
                           <section className="bg-gray-100 py-8 px-4 md:px-8">
                               <h2 className="text-3xl font-semibold text-gray-800 mb-4">Checking Your
                                   Tyres Regularly - Safeguarding Your Vehicle and Well-Being</h2>
                               <p className="text-gray-600 mb-4">{`Regular tyre checks are not just a routine chore;
                                    they're your first line of defense on the road. Discover why tyre maintenance is
                                    crucial and how to do it effectively in this informative section.`}</p>
                               <p className="text-gray-600 mb-4">Regular tyre checks are essential for your safety and
                                   the well-being of your vehicle. Neglecting tyre maintenance can lead to a range of
                                   issues, including decreased fuel efficiency, compromised handling, and increased
                                   risk of accidents. To ensure your tyres are in optimal condition, follow these
                                   detailed steps:</p>
                               <ol className="list-decimal ml-8 text-gray-700 mb-4">
                                   <li className="mb-2"><strong>Tread Depth Inspection</strong>: {`Your tyre's tread depth should be
                                        above the legal limit, which is typically 2/32 of an inch. Inadequate tread
                                        depth can reduce traction and increase the risk of hydroplaning in wet
                                        conditions. To check tread depth, you can use a tread depth gauge or the penny
                                        test.`}
                                   </li>
                                   <li className="mb-2"><strong>Wear and Tear Examination</strong>: {`Look closely for signs of wear,
                                        such as cracks, bulges, or punctures on the tyre's surface. These issues can
                                        weaken the tyre's structure and lead to blowouts or sudden flats. Inspect the
                                        sidewalls and the tyre's overall condition regularly.`}
                                   </li>
                                   <li className="mb-2"><strong>Tyre Pressure Check</strong>: {`Maintaining the correct tyre pressure
                                        is crucial for your safety and fuel efficiency. Incorrect tyre pressure can lead
                                        to uneven wear and decreased handling. Refer to your vehicle's manual or the
                                        tyre placard on the door jamb for the recommended pressure. Use a reliable
                                        pressure gauge to check and adjust the pressure when necessary. We'll delve
                                        deeper into this topic in the 'Maintaining Proper Tyre Pressure' section.`}
                                   </li>
                               </ol>
                               <p className="text-gray-600 mb-4">By following these steps and incorporating them into
                                   your routine vehicle maintenance, you not only ensure your safety but also prolong
                                   the lifespan of your tyres, saving you money in the long run. Regular tyre checks
                                   are a small investment of time that pays off in terms of safety and vehicle
                                   performance.</p>
                               <p className="text-gray-600">Remember, well-maintained tyres are a cornerstone of safe
                                   driving. Neglecting them can lead to unforeseen issues on the road, while proper
                                   care can enhance your driving experience and provide peace of mind.</p>
                           </section>

                       </div>
                   </div>
               </div>
           </section>
       </PageLayout>
    )
}