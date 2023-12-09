import "../app/globals.css";

import React, { useEffect, useState } from "react";
import { CustomMetadata } from "../../components/mainLayout/SeoMetadata";
import { phoneNumberValidator } from "@/utils/validators/phoneNumberValidator";
import Swal from "sweetalert2";
import Image from "next/image";
import PageLayout from "../../components/mainLayout/PageLayout";
import Link from "next/link";


const metadata: CustomMetadata = {
  title: "Choose Your Tyre Size - Enter Your Vehicle Reg | 24h Tyres",
  description: `Select the perfect tyre size for your vehicle at 24h Tyres. Enter your vehicle registration number and choose from a range of suitable tyres. Easy and accurate tyre selection.`,
  url: "/choose-tyre-size",
  imageUrl: "https://24h-tyres.co.uk/choose-tyre-size.jpg",
  canonical: "https://24h-tyres.co.uk/choose-tyre-size",
  keywords: "select tyre size, tyre size by vehicle reg, 24h Tyres, accurate tyre fitting, vehicle tyre selection, convenient tyre sizing, professional tyre services"
}

// UPDATED JSON LD
const jsonLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Choose Tyre Size",
  "description": `Select the perfect tyre size for your vehicle at 24h Tyres. Enter your vehicle registration number and choose from a range of suitable tyres. Easy and accurate tyre selection.`,
  "url": "https://www.24h-tyres.co.uk/choose-tyre-size",
  "logo": "https://www.24h-tyres.co.uk/logo/ok-logo.png",
  "areaServed": {
    "@type": "Country",
    "name": "UK"
  },
  "serviceType": "Choose Tyre Size",
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
    "logo": "https://www.24h-tyres.co.uk/logo/ok-logo.png",
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

const TyreSizeOption = ({width, profile, rim, isSelected, onSelect}: any) => {
  return (
    <div className={`grid grid-cols-4 gap-4 border-2 border-orange-500 rounded-xl px-4 py-2`}>
      <div className={`flex flex-col gap-2 justify-center`}>
        <input
          type="checkbox"
          className="form-checkbox h-6 w-6 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
          checked={isSelected}
          onChange={() => onSelect(width, profile, rim)}
        />
      </div>
      <div className={`flex flex-col gap-2 items-center`}>
        <div>Width</div>
        <div className={`font-bold`}>{width}</div>
      </div>
      <div className={`flex flex-col gap-2 items-center`}>
        <div>Profile</div>
        <div className={`font-bold`}>{profile}</div>
      </div>
      <div className={`flex flex-col gap-2 items-center`}>
        <div>Rim</div>
        <div className={`font-bold`}>{rim}</div>
      </div>
    </div>
  )
}

const ChooseTyreSize: React.FC<any> = () => {
  const [selectedTyreSize, setSelectedTyreSize] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingCarData, setIsLoadingCarData] = useState<boolean>(true);
  const [carData, setCarData] = useState<any>(null);
  const [postcode, setPostcode] = useState<string>("");
  const [registration, setRegistration] = useState<string>("");

  const mockCarData = {
    "Make": "BMW",
    "Model": "440I M SPORT AUTO",
    "BuildYear": "2016",
    "tyreSizes": [
      "225/45R18",
      "225/40R19"
    ]
  }


  useEffect(() => {
    if(typeof localStorage !== 'undefined') {
      const registration = localStorage.getItem("registration") || ""
      setPostcode(localStorage.getItem("postcode") || "")
      setRegistration(registration)
      // fetch(`/api/vehicle?registration=${registration}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setCarData(data)
      //     setIsLoadingCarData(false)
      //   });
      setCarData(mockCarData)
      setIsLoadingCarData(false)
    }
  }, []);

  const sendRequestToTelegramBot = async () => {
    setIsLoading(true)
    if (phoneNumber && postcode) {

      const callbackRequest = {
        phoneNumber: phoneNumber,
        location: postcode,
        tyreSize: selectedTyreSize
      };

      const res = await fetch("/api/callback", {
        body: JSON.stringify(callbackRequest),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      } else {
        // @ts-ignore
        gtag('event', 'telegram_request_message', {});
        setIsLoading(false);
        await Swal.fire({
          position: "top-end",
          icon: 'success',
          title: 'Request sent!',
          showConfirmButton: false,
          text: 'Thank you for sending the request, nearest fitter will reach out to you shortly',
          timer: 1500
        })
        setSelectedTyreSize(null)
        setPhoneNumber("")
        setIsConfirmed(false)
      }
    }
  };



  return (
    <>
      <PageLayout metadata={metadata} jsonLD={jsonLD} showBreadcrumbs={false}>
        <section className={`w-full flex bg-black justify-center py-2 border-t-2 border-white`}>
          <div className={`flex text-black font-uk-reg-plates justify-center gap-8 w-4/5`}>
            <Link href={`/postcode`}>
              <div className={`kb bg-white font-uk-reg-plates`}>
                <div className={``}>Change Postcode</div>
              </div>
            </Link>
            <Link href={`/registration`}>
              <div className={`kb bg-white font-uk-reg-plates`}>
                <div className={``}>Your Vehicle</div>
              </div>
            </Link>
            <Link href={`/choose-tyre-size`}>
              <div className={`kb bg-24h-yellow after:bg-24h-yellow before:bg-24h-yellow`}>
                <div className={`bg-24h-yellow font-uk-reg-plates`}>Confirm Tyre Size</div>
              </div>
            </Link>
          </div>
        </section>
        { isLoadingCarData && (
          <>
            Loading
          </>
        )}
        { !isLoadingCarData && (
          <section>
            <div className="bg-gray-200 p-4 lg:p-8">
              <div className="lg:max-w-2xl lg:mx-auto bg-white p-6 rounded-lg shadow-md">
                {/* Heading */}
                <h1 className="text-lg lg:text-4xl font-bold text-center mb-6">Please check & select your <span className={`text-orange-500`}>tyre size</span></h1>


                {/* Vehicle Card */}
                <div className={`p-4 bg-gray-100/20 rounded-lg mb-4 shadow-lg`}>
                  <div className={`flex items-center justify-center gap-4 lg:gap-8`}>
                    <Image width={120} height={120} src={`https://cdn.vdicheck.com/badges/${carData.Make}.png`} alt="Vehicle Logo" className="h-10 w-12" />
                    <div className={`flex flex-col gap-4 items-center justify-center`}>
                      <div className="text-lg lg:text-2xl text-center font-light font-uk-reg-plates">YOUR VEHICLE</div>
                      <div className="text-sm lg:text-xl text-center font-light">{carData.Make} {carData.Model}</div>
                    </div>
                  </div>
                </div>


                <div className="bg-gray-100/20 rounded-lg mb-6 shadow-lg">
                  <div className="flex items-center justify-center">
                    <img src="/tyres/services/tyre-size-guide.png" alt="Tyre Guide" className="lg:h-[280px]" />
                  </div>
                </div>


                <div className="mb-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className={`font-uk-reg-plates text-2xl mt-4`}>Select tyre size</div>
                    <div className={`grid lg:grid-cols-2 gap-4 px-0 py-4 w-full`}>
                      {carData.tyreSizes.map((tyreSize: any) => {
                        const tyreSizes = tyreSize.split('/')
                        const profile = tyreSizes[1].split('R')[0]
                        const rim = tyreSizes[1].split('R')[1]
                        const sizeString = `${tyreSizes[0]}/${profile}/R${rim}`;
                        return (
                          <>
                            <TyreSizeOption
                              width={tyreSizes[0]}
                              profile={profile}
                              rim={`R${rim}`}
                              isSelected={selectedTyreSize === sizeString}
                              onSelect={() => setSelectedTyreSize(sizeString)}
                            />
                          </>
                        )
                      })}
                    </div>
                  </div>
                </div>



                {/* Confirmation Section */}
                <div className="mb-6">
                  <div className="mb-4 bg-yellow-200 p-3 rounded-md text-sm">
                    Check the sidewall of your tyre and confirm your size
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-col ">
                    <label htmlFor="phoneNumber" className="flex items-center">
                      <div className={`flex w-full items-center gap-4`}>
                        <div className={`lg:text-2xl w-full font-uk-reg-plates`}>Enter Your Phone Number</div>
                        <input
                          id="phoneNumber"
                          type="text"
                          placeholder="07xxxxxxxxx"
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                          className="w-full p-2 border-2 border-orange-500 rounded-lg"
                        />
                      </div>
                    </label>
                  </div>
                </div>


                <div className="flex items-center mb-4">
                  <input type="checkbox"
                         id="confirmationCheckbox"
                         name="confirmation"
                         className="form-checkbox h-5 w-5 text-green-600"
                         checked={isConfirmed}
                         onChange={() => setIsConfirmed(!isConfirmed)}
                  />
                  <label htmlFor="confirmationCheckbox" className="ml-2 text-sm">
                    I can confirm the size I have selected matches the size on the sidewall of my tyre
                  </label>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between">
                  <button aria-label={`click to enter tyre size manually`} className="text-blue-600 hover:underline">Enter a size manually</button>
                  <button aria-label={`send request message to tyre fitters network`} onClick={sendRequestToTelegramBot} disabled={selectedTyreSize === null || !isConfirmed || !phoneNumberValidator(phoneNumber)} className={`${selectedTyreSize === null || !isConfirmed || !phoneNumberValidator(phoneNumber) ? 'opacity-50 cursor-not-allowed' : ''} bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
                    { isLoading && (
                      <div className={`flex gap-2`}>
                        <span>Loading...</span>
                        <svg aria-hidden="true"
                             className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                        </svg>
                      </div>
                    )}
                    { !isLoading && (
                      <>
                        Send Mobile Tyre Fitting Request
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

          </section>
        )}
      </PageLayout>
    </>

  )
}

export default ChooseTyreSize