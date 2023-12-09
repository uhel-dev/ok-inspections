import "../app/globals.css";

import React, { ChangeEvent, useEffect, useState } from "react";
import { CustomMetadata } from "../../components/mainLayout/SeoMetadata";
import Link from "next/link";
import PageLayout from "../../components/mainLayout/PageLayout";
import { useRouter } from "next/router";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import LocalStorageService from "@/services/LocalStorageService";

interface RegistrationProps {

}

const metadata: CustomMetadata = {
  title: "Find Your Nearest Tyre Fitter by Postcode | 24h Tyres",
  description: "Enter your postcode to locate the closest professional tyre fitting services with 24h Tyres. Quick, easy, and convenient.",
  url: "/postcode",
  imageUrl: "https://24h-tyres.co.uk/postcode.png",
  canonical: "https://24h-tyres.co.uk/postcode",
  keywords: "search tyre by postcode, search tyre fitter by postcode, nearest tyre fitter, tyre fitting services, postcode search, 24h Tyres, local tyre fitting"
}
const jsonLDForFindFitterPage = {
  "@context": "http://schema.org",
  "@type": "Service",
  "name": "Find Your Nearest Tyre Fitter by Postcode | 24h Tyres",
  "image": "https://24h-tyres.co.uk/postcode.png",
  "description": "Easily find the nearest professional tyre fitting services by entering your postcode. 24h Tyres offers a convenient way to locate local tyre fitting experts.",
  "url": "https://24h-tyres.co.uk/postcode",
  "serviceType": "Local Tyre Fitting Search by Postcode",
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

const validatePostCode = (postCode: string) => {
  const reg = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/;
  return reg.test(postCode.toUpperCase());
}


const Postcode: React.FC<RegistrationProps> = () => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isPostcodeValid, setIsPostcodeValid] = useState<boolean>(false);
  const [postcode, setPostcode] = useState<string>("");

  useEffect(() => {
    setIsMounted(true);
    const storedPostcode = LocalStorageService.getPostcode()
    if(storedPostcode != "") {
      setPostcode(storedPostcode);
      setIsPostcodeValid(validatePostCode(storedPostcode));
    }
  }, [])

  const handlePostcodeChange = async (e: any) => {
    setPostcode(e.target.value);
    const isValid = validatePostCode(e.target.value)
    if(isValid) {
      setIsPostcodeValid(true);
      LocalStorageService.setPostCode(e.target.value);
      return;
    }
    setIsPostcodeValid(false);
  }

  const handleClearPostcode = async () => {
    setPostcode("");
    setIsPostcodeValid(false);
    LocalStorageService.resetPostcode();
  }

  async function handleContinueClick() {
    if (isPostcodeValid) {
      const storedRegistration = LocalStorageService.getRegistration()
      if(storedRegistration !== "") {
        await router.push(`/choose-tyre-size`);
      }
      if(storedRegistration === "") {
        await router.push(`/registration`);
      }
    }
  }

  return (
    <>
      <PageLayout
        metadata={metadata}
        jsonLD={jsonLDForFindFitterPage}
        showBreadcrumbs={false}
      >
        { isMounted && postcode != null && (
          <>
            <section className={`w-full flex bg-black justify-center py-2 border-t-2 border-white`}>
              <div className={`flex text-black font-uk-reg-plates justify-center gap-8 w-4/5`}>
                <Link href={`/postcode`}>
                  <div className={`kb font-uk-reg-plates bg-24h-yellow after:bg-24h-yellow before:bg-24h-yellow w-full`}>
                    <div className={``}>Change Postcode</div>
                  </div>
                </Link>
                <Link href={`/registration`}>
                  <div  className={`kb bg-white font-uk-reg-plates w-full`}>
                    <div>Your Vehicle</div>
                  </div>
                </Link>
                <Link href={`/choose-tyre-size`}>
                  <div  className={`kb bg-white font-uk-reg-plates`}>
                    <div>Confirm Tyre Size</div>
                  </div>
                </Link>
              </div>
            </section>
            <section>
              <div className="bg-gray-100 p-8">
                <div className="bg-white shadow-md rounded-lg max-w-2xl mx-auto p-8 mb-8">
                  <h1 className="text-2xl font-uk-reg-plates font-bold mb-6">{postcode.length === 0 ? "Enter" : "Update"} your post code</h1>
                  <div className="flex flex-col space-y-4">
                    <label htmlFor="registration" className="flex items-center relative">
                      <span className="flex items-center h-[48px] bg-orange-600 text-white p-2 rounded-l-md">
                        <div className={`font-uk-reg-plates`}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>

                        </div>
                      </span>
                      <input
                        id="registration"
                        type="text"
                        placeholder="SW1W 0NY"
                        name="registration"
                        maxLength={7}
                        value={postcode}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handlePostcodeChange(e)}
                        className="h-[48px] flex-1 p-2 border-2 border-orange-600 rounded-r-md focus:outline-none font-uk-reg-plates"
                      />
                      <span className="flex items-center h-[48px] text-white p-2 absolute right-0">
                        <button aria-label={`remove saved postcode`} onClick={handleClearPostcode} className={`font-uk-reg-plates`}>
                          <XCircleIcon className={`w-8 h-8 ${postcode.length === 0 ? `text-gray-600`: 'text-orange-600'} hover:text-gray-600 hover:cursor-pointer`}/>
                        </button>
                      </span>
                    </label>
                    <button aria-label={`continue search with postcode`} disabled={!isPostcodeValid} onClick={handleContinueClick}
                            className="font-uk-reg-plates disabled:opacity-25 bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">
                      Continue
                    </button>
                  </div>
                </div>

                {/* Why Registration Section */}
                <div className="text-center">
                  <h3 className="text-2xl font-uk-reg-plates mb-2">Why do we need your postcode?</h3>
                  <div className="border-b-2 border-gray-300 pb-4 mb-6"></div>

                  {/* Reasons with Icons */}
                  <div className="flex flex-col lg:flex-row justify-around font-uk-reg-plates gap-8 lg:gap-0">
                    {/* Reason 1 */}
                    <div className="flex flex-col items-center">
                      <div className="mb-2">
                        <Image src={`/stepper-icons/service-availability.png`} alt={``} width={120} height={120}/>
                      </div>
                      <h4 className="text-lg font-uk-reg-plates">Determine Service Availability in Your Area</h4>
                      <p className={`lg:p-4`}>We use your postcode to check the availability of our services in your area. This ensures that we can offer you the relevant services that are accessible in your locality as soon as possible.</p>
                    </div>

                    {/* Reason 2 */}
                    <div className="flex flex-col items-center">
                      <div className="mb-2">
                        <Image src={`/stepper-icons/efficient-scheduling.png`} alt={``} width={120} height={120}/>
                      </div>
                      <h4 className="text-lg font-uk-reg-plates">Facilitate Efficient Scheduling and Routing</h4>
                      <p className={`lg:p-4`}>Your postcode helps us to efficiently plan and schedule our {`technicians'`} routes. This ensures timely and efficient service by minimizing travel time and optimizing technician assignments based on geographical location.</p>
                    </div>

                    {/* Reason 3 */}
                    <div className="flex flex-col items-center">
                      <div className="mb-2">
                        <Image src={`/stepper-icons/special-offer.png`} alt={``} width={120} height={120}/>
                      </div>
                      <h4 className="text-lg font-uk-reg-plates">Customize Local Offers and Promotions</h4>
                      <p className={`lg:p-4`}>With your postcode, we can provide you with customized offers and promotions that are specific to your area. This way, you receive the most relevant and beneficial deals tailored to your locality.</p>
                    </div>
                  </div>
                </div>
              </div>


            </section>
          </>
        )}
      </PageLayout>
    </>

  )
}

export default Postcode