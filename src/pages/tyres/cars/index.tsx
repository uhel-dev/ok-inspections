import "../../../app/globals.css";


import { Breadcrumbs } from "../../../../components/mainLayout/Breadcrumbs";
import CustomHeader from "../../../../components/mainLayout/CustomHeader";
import { Footer } from "../../../../components/mainLayout/Footer";
import CarMakesList from "../../../../components/shared/CarMakesList";
import SeoMetadata, { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import Image from "next/image";
import Script from "next/script";
import React from "react";

export default function Cars() {
    const metadata: CustomMetadata =  {
        "title": "We Have Tyres For All Car & Van Makes - 24h Tyres",
        "description": "From small cars to luxury vehicles, 24h Tyres offers comprehensive tyre services for all car makes and models.",
        "url": "/tyres/cars",
        "imageUrl": "https://24h-tyres.co.uk/cars.jpg",
        "canonical": "https://24h-tyres.co.uk/tyres/cars"
    }

    const jsonLDForTyresForAllCars = {
      "@context": "http://schema.org",
      "@type": "Service",
      "name": "We Have Tyres For All Car & Van Makes - 24h Tyres",
      "image": "https://24h-tyres.co.uk/cars.jpg",
      "description": "From small cars to luxury vehicles and businesses van fleets, 24h Tyres offers comprehensive tyre services for all car makes and models.",
      "url": "https://24h-tyres.co.uk/tyres/cars",
      "serviceType": "Tyre Services for All Vehicles",
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

    return (
        <>
            <SeoMetadata metadata={metadata}/>
          <Script
            id="app-ld-json"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLDForTyresForAllCars, null, "\t"),
            }}
          >
          </Script>
            <CustomHeader/>
            <main className="flex flex-col items-center justify-between justify-center">
                <Breadcrumbs width={`w-4/5`}/>
                <div className="flex flex-col w-full lg:w-4/5">
                    <div className={`p-4 flex flex-col gap-2`}>
                      <h1 className={`kdev-h1`}>Find the Perfect Tyres for Your Vehicle</h1>
                      <p>Welcome to 24h Tyres – your ultimate destination to find the right tyres for your car. Choosing the right tyres is crucial for safety, performance, and fuel efficiency. Our easy-to-use search tool helps you find the perfect match for your vehicle based on make, model, and more.</p>
                    </div>
                    <div className={`p-4`}>
                      <CarMakesList val={100} hideTitle={true}/>
                    </div>

                    <div className={`p-4`}>
                      <div className={`flex flex-col gap-4`}>
                        <h2 className={`kdev-h2`}>Tyre Selection Tips</h2>
                        <p>When it comes to selecting the right tyres for your vehicle, there are several key factors to consider. Making the right choice can significantly impact the safety, performance, and efficiency of your car. Here’s a detailed guide to help you make an informed decision:</p>
                      </div>

                      <div className={`flex flex-col gap-2 lg:mt-8`}>
                        <div className={`flex flex-col lg:flex-row gap-4 lg:gap-16`}>
                          <div className={`order-last lg:order-none w-full lg:w-1/2`}>
                            <Image className={`w-full`} width={500} height={500} src={`/tyre-size-guide.svg`} alt={``}/>
                          </div>
                          <div className={`w-full lg:w-1/2 flex flex-col justify-center`}>
                            <h3 className={`kdev-h3 pt-8 pb-4`}>#1 Tyre Size</h3>
                            <div>
                              <div className={`kdev-subheading`}>
                                Compatibility
                              </div>
                              <div>
                                It’s crucial to choose tyres that are compatible with your car’s specifications. Using the wrong size can adversely affect the vehicle’s handling, safety, and fuel efficiency.
                              </div>
                            </div>
                            <div>
                              <div className={`kdev-subheading`}>
                                How to Check
                              </div>
                              <div>You can find the recommended tyre size for your vehicle in the owner’s manual or on a placard located on the driver’s side door jamb.</div></div>
                            <div>
                              <div className={`kdev-subheading`}>
                                Understanding Tyre Size
                              </div>
                              <div>Tyre sizes are typically displayed in a set format, e.g., 205/55R16, where 205 is the tyre width in millimeters, 55 is the aspect ratio (height to width), R indicates radial construction, and 16 is the diameter of the wheel in inches.</div></div>
                          </div>

                        </div>


                        <div className={`flex flex-col lg:flex-row gap-4 lg:gap-16 lg:py-16`}>

                          <div className={`w-full lg:w-1/3 flex flex-col justify-center`}>
                            <h3 className={`kdev-h3 pt-8 pb-4`}>#2 Weather Conditions</h3>
                            <div className={`flex flex-col gap-2`}>
                              <div>
                                <div className={`kdev-subheading`}>
                                  Adaptability
                                </div>
                                <div>
                                  Different tyres are designed to perform optimally in specific weather conditions. For instance, summer tyres offer better performance in warm, dry conditions, while winter tyres provide improved traction in cold, snowy, or icy conditions.
                                </div>
                              </div>
                              <div>
                                <div className={`kdev-subheading`}>
                                  All-Season Tyres
                                </div>
                                <div>
                                  If you live in an area with moderate weather patterns, all-season tyres might be the best choice, offering a balance between summer and winter tyre characteristics.
                                </div>
                              </div>
                              <div>
                                <div className={`kdev-subheading`}>
                                  Specialised Tyres
                                </div>
                                <div>
                                  For regions with extreme weather, consider specialised tyres. Winter tyres use a softer rubber compound and unique tread designs for better grip in snow and ice, whereas summer tyres have fewer grooves for improved contact with the road in dry conditions.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={`order-last lg:order-none w-full lg:w-2/3 flex justify-center`}>
                            <Image className={`w-full`} width={500} height={500} src={`/winter-tyres-and-summer-tyres.jpeg`} alt={``}/>
                          </div>
                        </div>

                        <div>
                          <h3 className={`kdev-h3 pt-8 pb-4`}>#3 Driving Habits</h3>
                          <div className={`grid lg:grid-cols-3`}>
                            <div>
                              <div className={`kdev-subheading`}>
                                Performance vs Comfort
                              </div>
                              <div>
                                Your driving style should influence your tyre choice. Performance tyres, designed for high-speed and agile handling, are ideal for enthusiastic drivers who prefer a sporty driving experience.
                              </div>
                            </div>
                            <div>
                              <div className={`kdev-subheading`}>
                                Eco-Friendly Options
                              </div>
                              <div>You can find the recommended tyre size for your vehicle in the owner’s manual or on a placard located on the driver’s side door jamb.</div></div>
                            <div>
                              <div className={`kdev-subheading`}>
                                Tread Wear and Durability
                              </div>
                              <div>Tyre sizes are typically displayed in a set format, e.g., 205/55R16, where 205 is the tyre width in millimeters, 55 is the aspect ratio (height to width), R indicates radial construction, and 16 is the diameter of the wheel in inches.</div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}