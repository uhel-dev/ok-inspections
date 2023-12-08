"use client";

import "../../app/globals.css";
import React from "react";
import { CustomMetadata } from "../../../components/mainLayout/SeoMetadata";
import PageLayout from "../../../components/mainLayout/PageLayout";
import CtaBanner from "../../../components/shared/CtaBanner";
import UspRow from "../../../components/USPs/UspRow";
import ServicesWrapper from "../../../components/shared/ServicesWrapper";
import Link from "next/link";
import { SearchOptionsGrid } from "@/pages/tyres/find";
import FrequentlyAskedQuestion from "../../../components/FrequentlyAskedQuestions";
import { GetStaticPaths, GetStaticProps } from "next";
import hygraphClient from "../../../lib/hygraphClient.mjs";
import { gql } from "graphql-request";
import { delay } from "@/utils/delay";
import dynamic from "next/dynamic";

export interface ServiceLocation {
    serviceLocationLocalisedHeading: string;
    serviceLocationLocalisedSubheading: string;
    serviceLocationLocalisedText: string;
    serviceLocationName: string;
    serviceLocationSlug: string;
    serviceLocationLongitude: string;
    serviceLocationLatitude: string;
}

export interface TyreServicesInLocationUrlProps {
    tyreServicesInLocationUrl: string;
    serviceLocationLongitude: string;
    serviceLocationLatitude: string;
    serviceLocationIn: ServiceLocation;
}

export default function Tyreservicesinlocationurl({ tyreServicesInLocationUrl, serviceLocationIn }: TyreServicesInLocationUrlProps) {
    const lowerCaseLocationName = tyreServicesInLocationUrl.replace("tyre-services-in-", "").toLowerCase();
    const locationNameCapitalised = lowerCaseLocationName.charAt(0).toUpperCase() + lowerCaseLocationName.slice(1);
    const jsonLD = {
        "@context": "http://schema.org",
        "@type": "AutoRepair",
        name: `Tyre Services in ${locationNameCapitalised}`,
        description: `Experience superior tyre services in ${locationNameCapitalised} with 24h Tyres. We're at your service round the clock for all your tyre needs.`,
        url: `https://24h-tyres.co.uk/tyres/${tyreServicesInLocationUrl.toLowerCase()}`,
        image: "https://24h-tyres.co.uk/locations.jpg",
        address: {
            "@type": "PostalAddress",
            addressLocality: `${locationNameCapitalised}`,
            addressCountry: "United Kingdom",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: serviceLocationIn.serviceLocationLatitude,
            longitude: serviceLocationIn.serviceLocationLongitude,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
            },
        ],
        serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: serviceLocationIn.serviceLocationLatitude,
                longitude: serviceLocationIn.serviceLocationLongitude,
            },
            geoRadius: "50",
        },
        offers: {
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: "Tyre Fitting and Repair Services",
            },
        },
        slogan: "Your Trusted Tyre Service Partner Round the Clock",
    };
    const metadata: CustomMetadata = {
        title: `Tyre Services in ${locationNameCapitalised} | 24h Tyres`,
        description: `Experience superior tyre services in ${locationNameCapitalised} with 24h Tyres. We're at your service round the clock for all your tyre needs.`,
        url: `/tyres/${tyreServicesInLocationUrl.toLowerCase()}`,
        imageUrl: "https://24h-tyres.co.uk/locations.jpg",
        canonical: `https://24h-tyres.co.uk/tyres/${tyreServicesInLocationUrl.toLowerCase()}`,
    };

    const TyreServicesInLocation = dynamic(() => import('../../../components/TyreServicesInLocation'), {
        ssr: false, // Disable server-side rendering
    });

    return (
        <>
            <PageLayout metadata={metadata} jsonLD={jsonLD}>
                <section className={`kdev-section`}>
                    <h1 className={`text-3xl lg:text-4xl xl:text-5xl font-uk-reg-plates`}>{serviceLocationIn.serviceLocationLocalisedHeading}</h1>
                </section>
                <section className={`kdev-section`}>
                    <TyreServicesInLocation serviceLocationSlug={serviceLocationIn.serviceLocationSlug} />
                </section>
                <section className={`kdev-section`}>
                    <div>
                        <div className={`grid gap-2`}>
                            <h3 className={`font-uk-reg-plates text-3xl lg:text-4xl pb-4`}>
                                <strong>{serviceLocationIn.serviceLocationName} Tyres </strong>| <span className={`font-uk-reg-plates-regular`}>Search Tyres By Brand, Vehicle Make, Registration or Tyre Size</span>
                            </h3>
                            <p>
                                Looking for top-quality <strong>tyres in {serviceLocationIn.serviceLocationName}</strong>? At 24h Tyres, we offer a wide range of options to suit your specific needs. Whether {`you're`} searching for reliable brands,
                                specific vehicle makes, or unique tyre sizes, {`we've`} got you covered. Explore our comprehensive tyre selection and find the perfect fit for your vehicle with ease. For detailed search options and more information,
                                visit our{" "}
                                <Link className={`text-orange-800 font-bold hover:cursor-pointer hover:text-orange-600`} href="https://24h-tyres.co.uk/tyres/find" title="Find Tyres in {serviceLocation.serviceLocationName}">
                                    Tyre Finder page
                                </Link>
                                .
                            </p>
                        </div>
                        <div>
                            <SearchOptionsGrid />
                        </div>
                        <div className={`grid grid-cols-6`}></div>
                    </div>
                </section>
                <section className={`kdev-section`}>
                    <div>
                        <div className={`grid gap-2`}>
                            <h3 className={`font-uk-reg-plates text-3xl lg:text-4xl`}>Comprehensive Tyre Fitting Options in {serviceLocationIn.serviceLocationName}</h3>
                        </div>

                        <div className={`grid lg:grid-cols-2 gap-2 py-8`}>
                            <div className={`grid gap-4 bg-gradient-radial from-black to-gray-700 p-4 rounded-xl`}>
                                <h4 className={`font-uk-reg-plates-bold-caps text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-300`}>New Car Tyres</h4>
                                <p className={`font-uk-reg-plates-bold-caps text-center lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-300`}>Advanced New Car Tyres: Unmatched Performanc</p>
                                <p className={`text-white lg:text-lg font-uk-reg-plates-regular`}>
                                    Elevate your driving experience in {serviceLocationIn.serviceLocationName} with our premium range of new car tyres. Specially curated to enhance vehicle performance and safety, our new tyres offer the latest in
                                    tyre technology and innovation. From improved grip and stability to reduced noise and fuel consumption, our selection caters to all driving styles and conditions. Our expert team will guide you through the best
                                    options for your vehicle, ensuring optimal performance and longevity on the road.
                                </p>
                                <Link
                                    href={`/tyres/fitting-options/new-car-tyres`}
                                    aria-label={`View new car tyres`}
                                    className={`btn p-2 rounded bg-gradient-to-r from-orange-600 to-yellow-300 text-black items-center justify-center font-uk-reg-plates shadow shadow-amber-50 hover:to-orange-600 hover:from-yellow-300 hover:text-white`}
                                >
                                    Fitting Option - New Tyres
                                </Link>
                            </div>

                            <div className={`grid gap-4 bg-gradient-radial from-black to-gray-700 p-4 rounded-xl`}>
                                <h4 className={`font-uk-reg-plates-bold-caps text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-300`}>Part Worn Tyres</h4>
                                <p className={`font-uk-reg-plates-bold-caps text-center lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-300`}>Eco-Friendly Part Worn Tyres: Affordable Quality</p>
                                <p className={`text-white lg:text-lg font-uk-reg-plates-regular`}>
                                    In {serviceLocationIn.serviceLocationName}, our part worn tyres offer an economical yet reliable alternative. Each tyre is rigorously tested for safety and performance, ensuring you receive the highest quality at a
                                    fraction of the cost. Ideal for budget-conscious drivers who do not compromise on safety, our part worn tyres are a sustainable choice, reducing waste and environmental impact. Trust our specialists to help you
                                    find the perfect match for your vehicle, balancing cost and quality effortlessly.
                                </p>
                                <button
                                    aria-label={`View part worn tyres`}
                                    className={`btn p-2 rounded bg-gradient-to-r from-orange-600 to-yellow-300 text-black items-center justify-center font-uk-reg-plates shadow shadow-amber-50 hover:to-orange-600 hover:from-yellow-300 hover:text-white`}
                                >
                                    <Link href={`/tyres/fitting-options/part-worn-tyres`}>Fitting Option - Used Tyres</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`kdev-section`}>
                    <div className={`w-full flex flex-col lg:flex-row`}>
                        <div className={`w-full`}>
                            <h3 className={`font-uk-reg-plates text-3xl lg:text-4xl pb-4`}>
                                List of Tyre Services in{" "}
                                <span className={`text-[#feea12]`} style={{ textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, -2px 2px 2px #000, 2px 2px 2px #000" }}>
                                    {serviceLocationIn.serviceLocationName}
                                </span>
                            </h3>
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-2`}>
                                <div className="bg-gradient-radial from-24h-yellow/80 to-24h-yellow shadow-lg w-full p-4 rounded-xl grid gap-4">
                                    <div className={`font-uk-reg-plates uppercase`}>#Rim Fitting</div>
                                    <h4 className={`kdev-h5`}>Precision Rim Fitting for Enhanced Vehicle Aesthetics</h4>
                                    <p className={`font-uk-reg-plates-regular`}>
                                        Transform your {`vehicle's`} look with our precision rim fitting service. We offer a wide range of stylish and durable rims, expertly fitted to enhance both the appearance and performance of your car.
                                    </p>
                                    <Link className={`kdev-button-cta-black-yellow`} href={`/tyres/services/wheel-services/rim-fitting`}>
                                        View Rim Fitting Service
                                    </Link>
                                </div>
                                <div className="bg-gradient-radial from-24h-yellow/80 to-24h-yellow shadow-lg w-full p-4 rounded-xl grid gap-4">
                                    <div className={`font-uk-reg-plates uppercase`}>#Puncture Repair</div>
                                    <h4 className={`kdev-h5`}>Quick and Efficient Puncture Repair Services</h4>
                                    <p className={`font-uk-reg-plates-regular`}>
                                        Get back on the road swiftly with our puncture repair services. Our expert team provides fast and reliable repairs, ensuring your safety and minimizing downtime with top-notch workmanship.
                                    </p>
                                    <Link className={`kdev-button-cta-black-yellow`} href={`/tyres/services/wheel-services/puncture-repair`}>
                                        View Puncture Repair Service
                                    </Link>
                                </div>
                                <div className="bg-gradient-radial from-24h-yellow/80 to-24h-yellow shadow-lg w-full p-4 rounded-xl grid gap-4">
                                    <div className={`font-uk-reg-plates uppercase`}>#Wheel Balancing</div>
                                    <h4 className={`kdev-h5`}>Expert Wheel Balancing for Smooth Driving</h4>
                                    <p className={`font-uk-reg-plates-regular`}>
                                        Ensure a smooth and vibration-free drive with our professional wheel balancing services. Properly balanced wheels improve tyre life, enhance fuel efficiency, and provide a safer, more comfortable ride.
                                    </p>
                                    <Link className={`kdev-button-cta-black-yellow`} href={`/tyres/services/wheel-services/wheel-balancing`}>
                                        View Wheel Balancing Service
                                    </Link>
                                </div>
                                <div className="bg-gradient-radial from-24h-yellow/80 to-24h-yellow shadow-lg w-full p-4 rounded-xl grid gap-4">
                                    <div className={`font-uk-reg-plates uppercase`}>#Valve Servicing</div>
                                    <h4 className={`kdev-h5`}>Comprehensive Valve Servicing for Optimal Tyre Health</h4>
                                    <p className={`font-uk-reg-plates-regular`}>
                                        Prolong the life of your tyres with our thorough valve servicing. Regular valve maintenance prevents air leaks, maintains tyre pressure, and enhances overall tyre performance for a more reliable driving
                                        experience.
                                    </p>
                                    <Link className={`kdev-button-cta-black-yellow`} href={`/tyres/services/wheel-services/valve-servicing`}>
                                        View Valve Servicing Service
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`kdev-section`}>
                    <FrequentlyAskedQuestion />
                </section>
                <section className={`kdev-section`}>
                    <div className={`py-6 w-full`}>
                        <CtaBanner />
                    </div>
                    <UspRow />
                    <ServicesWrapper />
                </section>
            </PageLayout>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { serviceLocations }: any = await hygraphClient.request(
        gql`
      query MyQuery() {
        serviceLocations(first: 100) {
          serviceLocationSlug,
        }
      }
    `,
        {}
    );

    await delay(2200);

    const paths = serviceLocations.map(({ serviceLocationSlug }: any) => {
    // const paths = [{ serviceLocationSlug: "isleworth" }].map(({ serviceLocationSlug }: any) => {
        return {
            params: {
                tyreservicesinlocationurl: `tyre-services-in-${serviceLocationSlug.toLowerCase()}`,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const tyreServicesInLocationUrl: string = params?.tyreservicesinlocationurl as string;
    const { serviceLocations }: any = await hygraphClient.request(
        gql`
            query MyQuery($tyreServicesInLocationUrl: String!) {
                serviceLocations(where: { serviceLocationSlug: $tyreServicesInLocationUrl }) {
                    serviceLocationLocalisedHeading
                    serviceLocationLocalisedSubheading
                    serviceLocationLocalisedText
                    serviceLocationName
                    serviceLocationSlug
                    serviceLocationLongitude
                    serviceLocationLatitude
                }
            }
        `,
        { tyreServicesInLocationUrl: tyreServicesInLocationUrl.replaceAll("tyre-services-in-", "").toLowerCase() }
    );
    await delay(2100);

    return {
        props: {
            tyreServicesInLocationUrl: tyreServicesInLocationUrl,
            serviceLocationIn: serviceLocations[0],
        },
    };
};
