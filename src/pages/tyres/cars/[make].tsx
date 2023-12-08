import "../../../app/globals.css";

import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import CustomHeader from "../../../../components/mainLayout/CustomHeader";
import { Breadcrumbs } from "../../../../components/mainLayout/Breadcrumbs";
import { Footer } from "../../../../components/mainLayout/Footer";
import * as fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import UspRow from "../../../../components/USPs/UspRow";
import MapComponent from "../../../../components/shared/MapComponent";
import TyreBrandsGrid from "../../../../components/grids/TyreBrandsGrid";
import ServicesWrapper from "../../../../components/shared/ServicesWrapper";
import CtaBanner from "../../../../components/shared/CtaBanner";
import SearchByCarRegDialog from "../../../../components/dialogs/SearchByCarRegDialog";
import React, { useState } from "react";
import SeoMetadata, { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import Script from "next/script";

const CAR_MAKES = JSON.parse(fs.readFileSync(path.resolve('carMakes.json'), 'utf8')).CAR_MAKES.map((el: any) => {
    return {
        make: el.make.replace(" ", "-").toLowerCase(),
        imgSrc: el.imgSrc
    }
});
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = CAR_MAKES.map(({make}: any) => {
        return {
            params: { make },
        }
    });
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const make = params?.make as string; // Assert that `make` is a string

    const carMake = CAR_MAKES.find((car: any) => car.make.toLowerCase() === make.toLowerCase());

    if (!make || !carMake) {
        return {
            notFound: true,
        };
    }

    return {props: {make: carMake.make, imgSrc: carMake.imgSrc}};
}


export default function Make({make, imgSrc}: any) {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [capitalizedMake] = useState(() => {
        return make.substring(0,1).toUpperCase() + make.substring(1)
    })

    const handleShowSuccessMessage = async () => {
        setShowSuccessMessage(true)
        await setTimeout(() => {
            setShowSuccessMessage(false)
        }, 2000)
    }

    const lowerCaseMake = make.toLowerCase();
    const metadata: CustomMetadata =  {
        "title": `${capitalizedMake} Tyre Services - 24h Tyres`,
        "description": `Get quality tyre services for your ${capitalizedMake} at 24h Tyres. Trust in our specialised care for your premium vehicle.`,
        "url": `/tyres/cars/${lowerCaseMake}`,
        "imageUrl": `https://24h-tyres.co.uk/tyres/cars/${lowerCaseMake}`,
        "canonical": `https://24h-tyres.co.uk/tyres/cars/${lowerCaseMake}`
    }

    const jsonLDForTyreServicesByMake = {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": `${capitalizedMake} Tyre Services - 24h Tyres`,
        "image": `https://24h-tyres.co.uk/tyres/cars/${lowerCaseMake}.jpg`, // Assuming a JPG extension, adjust as necessary
        "description": `Get quality tyre services for your ${capitalizedMake} at 24h Tyres. Trust in our specialised care for your premium vehicle.`,
        "url": `https://24h-tyres.co.uk/tyres/cars/${lowerCaseMake}`,
        "serviceType": `${capitalizedMake} Tyre Services`,
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
    }

    const router = useRouter();
    return (
        <>
            <SeoMetadata metadata={metadata}/>
            <Script
              id="app-ld-json"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLDForTyreServicesByMake, null, "\t"),
              }}
            >
            </Script>
            <CustomHeader/>
            <main className="flex flex-col items-center justify-between justify-center">
                <Breadcrumbs width={`w-4/5`}/>
                <div className="w-full lg:w-4/5 flex flex-col items-center justify-center p-6">
                    <div className={`flex flex-col lg:flex-row gap-4 w-full my-4`}>
                        <div className="card bg-base-100 shadow-xl flex justify-center items-center w-full lg:w-1/3">
                            <Image src={imgSrc} alt={`We offer ${make} Tyres`}  width={250} height={200} />
                            <div className="card-body">
                                <h1 className="card-title">New tyres for your {capitalizedMake}</h1>
                                <p>Do you need new Tyres? <br/> Dial Us Up and We&apos;ll Roll Out to Refit Your Ride!</p>
                                <div className="card-actions">
                                    <Link className="btn btn-primary" href={CTA_PHONE_NUMBER}>Call Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl flex justify-center items-center w-full  lg:w-2/3">
                            <div className="card-body">
                                <h2 className="card-title">Same day mobile tyre service</h2>
                                <p>Dependable and hassle-free, our same-day mobile tyre fitting or repair service is a cut above the rest. With a quick phone call, your tyres will be restored or replaced at the location of your choice, sparing you the trip to a garage and the stress that comes with it.</p>
                                <p>Our expert mobile tyre fitters are on standby around the clock, and they&apos;re just moments away from wherever you may be. Why wait any longer?</p>
                                <p>In need of a tyre fix or swap? or perhaps you are stuck on motorway and need an emergency tyre replacement? Dial us up at 07496122886, and we&apos;ll roll out to help!</p>
                                <div className="flex flex-col lg:flex-row gap-2">
                                    <SearchByCarRegDialog callHandleShowSuccessMessage={() => handleShowSuccessMessage()}/>
                                    <button aria-label={`navigate to contact us page`} className={`btn btn-outline`}>
                                        <Link href={`/contact-us`}>
                                            View Contact Us Page
                                        </Link>
                                    </button>
                                </div>
                                <div className={`alert alert-success shadow-lg ${showSuccessMessage ? showSuccessMessage : "hidden"}`}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Your request was sent successfully!</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*<SearchSection/>*/}
                    <div className={`py-6 w-full`}>
                        <CtaBanner/>
                    </div>
                    <UspRow/>
                    <div className={`self-center text-3xl lg:text-4xl font-uk-reg-plates font-extrabold py-4 lg:py-8`}>Locations We Cover</div>
                    <MapComponent radiusMiles={25}/>
                    <TyreBrandsGrid/>
                    {/*<CarMakesList/>*/}
                    {/*<FAQ/>*/}
                    <ServicesWrapper/>
                </div>
            </main>
            <Footer/>
        </>
    )
}


