import "../app/globals.css";

import React, { useEffect, useState } from "react";
import { CustomMetadata } from "../../components/mainLayout/SeoMetadata";
import Link from "next/link";
import PageLayout from "../../components/mainLayout/PageLayout";
import { useRouter } from "next/router";
import { validateRegPlates } from "@/types";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import LocalStorageService from "@/services/LocalStorageService";


const metadata: CustomMetadata = {
  title: "Enter Your Registration To Find Right Tyres | 24h Tyres",
  description: "",
  url: "/registration",
  imageUrl: "https://24h-tyres.co.uk/enter-your-registration.png",
  canonical: "https://24h-tyres.co.uk/registration",
  keywords: "mobile tyre fitting, tyre fitting, 24h Tyres, search tyres by registration, convenient tyre fitting, professional tyre services"
}
const jsonLDForRegistrationPage = {
  "@context": "http://schema.org",
  "@type": "Service",
  "name": "Enter Your Registration To Find Right Tyres | 24h Tyres",
  "image": "https://24h-tyres.co.uk/enter-your-registration.png",
  "description": "Begin the journey to find the perfect tyres for your vehicle at 24h Tyres. Enter your registration number to access a tailored selection of tyres suitable for your car.",
  "url": "https://24h-tyres.co.uk/registration",
  "serviceType": "Tyre Selection by Registration",
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

interface RegistrationProps {

}

const Registration: React.FC<RegistrationProps> = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isRegistrationValid, setIsRegistrationValid] = useState<boolean>(false);
  const [registration, setRegistration] = useState<string>("");

  useEffect(() => {
    setIsMounted(true);
    const storedRegistration = LocalStorageService.getRegistration()
    if(storedRegistration !== "") {
      setRegistration(storedRegistration)
      setIsRegistrationValid(validateRegPlates(storedRegistration))
    }
  }, [])

  const handleRegistrationChange = (e: any) => {
    setRegistration(e.target.value);
    const isValid = validateRegPlates(e.target.value);
    if(isValid) {
        setIsRegistrationValid(true)
        LocalStorageService.setRegistration(e.target.value);
        return;
    }
    setIsRegistrationValid(false)
  }

  const handleContinueButtonClick = async () => {
    if (isRegistrationValid) {
      const storedPostcode = LocalStorageService.getPostcode()
      if(storedPostcode !== "") {
        await router.push(`/choose-tyre-size`)
      }
      if(storedPostcode === "") {
        await router.push(`/postcode`)
      }
    }
  }


  function handleClearRegistration() {
    setRegistration("");
    setIsRegistrationValid(false);
    LocalStorageService.resetRegistration();
  }

  return (
    <>
      <PageLayout metadata={metadata} jsonLD={jsonLDForRegistrationPage} showBreadcrumbs={false}>
        { isMounted && (
          <>
            <section className={`w-full flex bg-black justify-center py-2 border-t-2 border-white`}>
              <div className={`flex text-black font-uk-reg-plates-regular justify-center gap-8 w-4/5`}>
                <Link href={`/postcode`}>
                  <div className={`kb bg-white font-uk-reg-plates-bold-caps`}>
                    <div className={``}>Change Postcode</div>
                  </div>
                </Link>
                <Link href={`/registration`}>
                  <div className={`kb bg-24h-yellow after:bg-24h-yellow before:bg-24h-yellow`}>
                    <div className={`bg-24h-yellow font-uk-reg-plates-bold-caps`}>Your Vehicle</div>
                  </div>
                </Link>
                <Link href={`/choose-tyre-size`}>
                  <div className={`kb bg-white font-uk-reg-plates-bold-caps`}>
                    <div>Confirm Tyre Size</div>
                  </div>
                </Link>
              </div>
            </section>
            <section>
              <div className="bg-gray-100 p-8">
                {/* Registration Form Section */}
                <div className="bg-white shadow-md rounded-lg max-w-2xl mx-auto p-8 mb-8">
                  <h1 className="text-2xl font-uk-reg-plates font-bold mb-6">{registration.length === 0 ? "Enter" : "Update"} your vehicle registration</h1>
                  <div className="flex flex-col space-y-4">
                    <label htmlFor="registration" className="flex items-center relative">
                <span className="flex items-center h-[48px] bg-blue-600 text-white p-2 rounded-l-md">
                  <div className={`font-uk-reg-plates`}>
                    <svg className={`w-8 h-8 text-white`} fill={`white`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.97 262.7">
                      <path d="M108.27 17.35a2.87 2.87 0 0 0-1.59-4.89l-9.67-1.41a1.27 1.27 0 0 1-1-.69L91.69 1.6a2.87 2.87 0 0 0-5.14 0l-4.32 8.76a1.26 1.26 0 0 1-1 .69l-9.67 1.41a2.86 2.86 0 0 0-1.59 4.89l7 6.82a1.27 1.27 0 0 1 .36 1.12l-1.65 9.63a2.82 2.82 0 0 0 .63 2.32 2.89 2.89 0 0 0 3.54.7l8.65-4.55a1.29 1.29 0 0 1 1.18 0l8.65 4.55a2.82 2.82 0 0 0 1.33.34 2.87 2.87 0 0 0 2.2-1 2.82 2.82 0 0 0 .63-2.32l-1.65-9.63a1.27 1.27 0 0 1 .36-1.12ZM108.27 144.81a2.87 2.87 0 0 0-1.59-4.89l-9.67-1.41a1.27 1.27 0 0 1-1-.69l-4.32-8.76a2.87 2.87 0 0 0-5.14 0l-4.32 8.76a1.26 1.26 0 0 1-1 .69l-9.67 1.41a2.86 2.86 0 0 0-1.59 4.89l7 6.82a1.27 1.27 0 0 1 .36 1.12l-1.65 9.63a2.82 2.82 0 0 0 .63 2.32 2.89 2.89 0 0 0 3.54.7l8.65-4.55a1.29 1.29 0 0 1 1.18 0l8.65 4.55a2.82 2.82 0 0 0 1.33.34 2.87 2.87 0 0 0 2.2-1 2.82 2.82 0 0 0 .63-2.32l-1.65-9.63a1.27 1.27 0 0 1 .36-1.12ZM39.09 80.76a2.87 2.87 0 0 0-1.59-4.89l-9.67-1.41a1.27 1.27 0 0 1-1-.69l-4.32-8.76a2.87 2.87 0 0 0-5.14 0l-4.32 8.76a1.26 1.26 0 0 1-1 .69l-9.67 1.41a2.86 2.86 0 0 0-1.59 4.89l7 6.82a1.27 1.27 0 0 1 .36 1.12L6.5 98.33a2.82 2.82 0 0 0 .68 2.32 2.89 2.89 0 0 0 3.54.7l8.65-4.55a1.29 1.29 0 0 1 1.18 0l8.65 4.55a2.82 2.82 0 0 0 1.33.34 2.87 2.87 0 0 0 2.2-1 2.82 2.82 0 0 0 .63-2.32l-1.65-9.63a1.27 1.27 0 0 1 .36-1.12ZM178.11 80.93a2.87 2.87 0 0 0-1.59-4.89l-9.68-1.39a1.27 1.27 0 0 1-1-.69l-4.32-8.76a2.87 2.87 0 0 0-5.14 0l-4.32 8.76a1.26 1.26 0 0 1-1 .69l-9.67 1.41a2.86 2.86 0 0 0-1.59 4.89l7 6.82a1.27 1.27 0 0 1 .36 1.12l-1.65 9.63a2.82 2.82 0 0 0 .63 2.32 2.89 2.89 0 0 0 3.54.7l8.65-4.55a1.29 1.29 0 0 1 1.18 0l8.65 4.55a2.82 2.82 0 0 0 1.33.34 2.87 2.87 0 0 0 2.2-1 2.82 2.82 0 0 0 .63-2.32l-1.65-9.63a1.27 1.27 0 0 1 .36-1.12ZM64.07 123.88a2.87 2.87 0 0 0-1.59-4.89l-9.67-1.41a1.27 1.27 0 0 1-1-.69l-4.32-8.76a2.87 2.87 0 0 0-5.14 0l-4.32 8.76a1.26 1.26 0 0 1-1 .69l-9.67 1.41a2.86 2.86 0 0 0-1.59 4.89l7 6.82a1.27 1.27 0 0 1 .36 1.12l-1.65 9.63a2.82 2.82 0 0 0 .63 2.32 2.89 2.89 0 0 0 3.54.7l8.65-4.55a1.29 1.29 0 0 1 1.18 0l8.65 4.55a2.82 2.82 0 0 0 1.33.34 2.87 2.87 0 0 0 2.2-1 2.82 2.82 0 0 0 .63-2.32l-1.65-9.63a1.27 1.27 0 0 1 .36-1.12ZM153.77 123.88a2.87 2.87 0 0 0-1.59-4.89l-9.67-1.41a1.27 1.27 0 0 1-1-.69l-4.32-8.76a2.87 2.87 0 0 0-5.14 0l-4.32 8.76a1.26 1.26 0 0 1-1 .69l-9.55 1.41a2.86 2.86 0 0 0-1.59 4.89l7 6.82a1.27 1.27 0 0 1 .36 1.12l-1.65 9.63a2.82 2.82 0 0 0 .63 2.32 2.89 2.89 0 0 0 3.54.7l8.65-4.55a1.29 1.29 0 0 1 1.18 0l8.65 4.55a2.82 2.82 0 0 0 1.33.34 2.87 2.87 0 0 0 2.2-1 2.82 2.82 0 0 0 .63-2.32l-1.65-9.63a1.27 1.27 0 0 1 .36-1.12ZM64.07 38.26a2.87 2.87 0 0 0-1.59-4.89l-9.67-1.41a1.27 1.27 0 0 1-1-.69l-4.32-8.76a2.87 2.87 0 0 0-5.14 0l-4.32 8.76a1.26 1.26 0 0 1-1 .69l-9.67 1.41a2.86 2.86 0 0 0-1.59 4.89l7 6.82a1.27 1.27 0 0 1 .36 1.12l-1.65 9.63a2.82 2.82 0 0 0 .63 2.32 2.89 2.89 0 0 0 3.54.7l8.65-4.55a1.29 1.29 0 0 1 1.18 0l8.7 4.55a2.82 2.82 0 0 0 1.33.34 2.87 2.87 0 0 0 2.2-1 2.82 2.82 0 0 0 .63-2.32l-1.65-9.63a1.27 1.27 0 0 1 .36-1.12ZM153.77 38.26a2.87 2.87 0 0 0-1.59-4.89l-9.67-1.41a1.27 1.27 0 0 1-1-.69l-4.32-8.76a2.87 2.87 0 0 0-5.14 0l-4.32 8.76a1.26 1.26 0 0 1-1 .69l-9.55 1.41a2.86 2.86 0 0 0-1.59 4.89l7 6.82a1.27 1.27 0 0 1 .36 1.12l-1.65 9.63a2.82 2.82 0 0 0 .63 2.32 2.89 2.89 0 0 0 3.54.7l8.65-4.55a1.29 1.29 0 0 1 1.18 0l8.65 4.55a2.82 2.82 0 0 0 1.33.34 2.87 2.87 0 0 0 2.2-1 2.82 2.82 0 0 0 .63-2.32l-1.65-9.63a1.27 1.27 0 0 1 .36-1.12ZM34.18 233.9v-.16c0-15.68 12-29 28.88-29 8.4 0 14 2 19.12 5.68a5 5 0 0 1 2 4 4.9 4.9 0 0 1-4.88 4.88 5.17 5.17 0 0 1-3-1.12 21.28 21.28 0 0 0-13.6-4.4c-10.32 0-18.16 9-18.16 19.76v.16c0 11.52 7.6 20 19 20a22.86 22.86 0 0 0 13.52-4.24v-10.44h-11a4.3 4.3 0 0 1-4.4-4.24 4.37 4.37 0 0 1 4.4-4.32h15.6a4.88 4.88 0 0 1 5 5v15a6.8 6.8 0 0 1-3.44 6.24 35.66 35.66 0 0 1-20.04 5.95c-17.5 0-29-12.43-29-28.75ZM99.36 210.65a4.88 4.88 0 0 1 5-5h20.12c6.4 0 11.44 1.76 14.64 5a12.54 12.54 0 0 1 3.76 9.28v.16c0 6.72-3.84 10.32-8 12.48 6.56 2.24 11.12 6 11.12 13.6v.16c0 10-8.24 15.36-20.72 15.36h-21a4.88 4.88 0 0 1-5-5v-46.04Zm23.12 18.64c6.32 0 10.56-2.48 10.56-7.6v-.16c0-4.4-3.52-7.12-9.84-7.12h-14.16v14.88h13.44Zm2.88 23.68c6.72 0 10.8-2.64 10.8-7.68v-.16c0-4.72-3.76-7.52-11.52-7.52h-15.6v15.36h16.32Z"/>
                    </svg>
                  </div>
                </span>
                      <input
                        id="registration"
                        type="text"
                        placeholder="AB23 CDE"
                        name="registration"
                        maxLength={7}
                        value={registration}
                        onChange={(e) => handleRegistrationChange(e)}
                        className="disabled:opacity-25 h-[48px] flex-1 p-2 border-2 border-blue-600 rounded-r-md focus:outline-none font-uk-reg-plates-bold-caps"
                      />
                      <span className="flex items-center h-[48px] text-white p-2 absolute right-0">
                    <button aria-label={`remove saved postcode`} onClick={handleClearRegistration} className={`font-uk-reg-plates`}>
                      <XCircleIcon className={`w-8 h-8 text-blue-600 hover:text-gray-600 hover:cursor-pointer`}/>
                    </button>
                </span>
                    </label>
                    <button aria-label={`continue search with postcode`} disabled={!isRegistrationValid} onClick={handleContinueButtonClick}
                            className="font-uk-reg-plates-bold-caps disabled:opacity-25 bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">
                      Continue
                    </button>
                  </div>
                </div>

                {/* Why Registration Section */}
                <div className="text-center">
                  <h3 className="text-2xl font-uk-reg-plates mb-2">Why do we need your registration?</h3>
                  <div className="border-b-2 border-gray-300 mb-6"></div>

                  {/* Reasons with Icons */}
                  <div className="flex flex-col lg:flex-row justify-around font-uk-reg-plates-regular gap-8 lg:gap-0">
                    {/* Reason 1 */}
                    <div className="flex flex-col items-center">
                      <div className="mb-2">
                        <Image src={`/stepper-icons/vehicle-specification.png`} alt={``} width={120} height={120}/>
                      </div>
                      <h4 className="text-lg font-uk-reg-plates">Pinpointing Your {`Vehicle's`} Specific Requirements</h4>
                      <p className={`lg:p-4`}>We need your {`vehicle's`} registration details to accurately search for and identify the precise products and parts needed for your vehicle, ensuring a perfect match for your specific search criteria.</p>
                    </div>

                    {/* Reason 2 */}
                    <div className="flex flex-col items-center">
                      <div className="mb-2">
                        <Image src={`/stepper-icons/appointment.png`} alt={``} width={120} height={120}/>
                      </div>
                      <h4 className="text-lg font-uk-reg-plates">Efficiently Identifying Your Vehicle at the Service Appointment</h4>
                      <p className={`lg:p-4`}>Your {`vehicle's`} registration is a key tool that enables our technicians to quickly and efficiently locate your vehicle among others at the time of the fitting, ensuring a smooth and swift service experience.</p>
                    </div>

                    {/* Reason 3 */}
                    <div className="flex flex-col items-center">
                      <div className="mb-2">
                        <Image src={`/stepper-icons/accuracy.png`} alt={``} width={120} height={120}/>
                      </div>
                      <h4 className="text-lg font-uk-reg-plates">Providing Accurate Service Time Estimates</h4>
                      <p className={`lg:p-4`}>By understanding the unique specs of various car models, we can accurately predict the time needed for servicing your vehicle, allowing for better scheduling and minimizing any potential inconvenience.</p>
                    </div>
                  </div>
                </div>
              </div>


            </section>
          </>
        ) }
      </PageLayout>
    </>

  )
}

export default Registration