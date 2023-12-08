"use client"

import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { MinifiedRequestCallbackDialog } from "./dialogs/MinifiedRequestCallbackDialog";
import MapComponent from "./shared/MapComponent";
import React, { useEffect } from "react";
import useServiceLocation from "@/hooks/useServiceLocation";

export default function TyreServicesInLocation({ serviceLocationSlug }: any) {

  useEffect(() => {
    loadServiceLocation(serviceLocationSlug);
  }, [])

  const renderTextWithBold = (text: string) => {
    // Split the text into segments based on <strong> tags
    const segments = text.split(/<strong>|<\/strong>/);

    return segments.map((segment, index) => {
      // Apply bold styling to every alternate segment (those originally within <strong> tags)
      if (index % 2 === 1) {
        return <strong key={index}>{segment}</strong>;
      }
      return segment; // Normal text segments
    });
  };

  const { serviceLocation, loadServiceLocation, isLoadedServiceLocation } = useServiceLocation();

  return (
    <>
      <div>
        {isLoadedServiceLocation && serviceLocation && (
          <div className={`flex flex-col lg:flex-row`}>
            <div className={`w-full lg:w-1/2 flex flex-col justify-center bg-24h-yellow  rounded-t-xl lg:rounded-tr-none lg:rounded-br-none lg:rounded-l-xl p-8 gap-4`}>
              <h2 className={`text-xl lg:text-3xl font-uk-reg-plates`}>{serviceLocation.serviceLocationLocalisedSubheading.replaceAll('"', "")}</h2>
              <div>{renderTextWithBold(serviceLocation.serviceLocationLocalisedText.replaceAll('"', ""))}</div>
              <div className={`mt-4 flex flex-col lg:flex-row gap-2`}>
                <Link className={`kdev-button-cta-black-yellow flex gap-1 items-center justify-center`} href={`${CTA_PHONE_NUMBER}`}>
                  <DevicePhoneMobileIcon className={`w-6 h-6`} />
                  <span>Call us now</span>
                </Link>
                <MinifiedRequestCallbackDialog
                  heading={`Send instant quote request to fitter`}
                  headingStyle={`bg-black p-4 text-base md:text-lg font-uk-reg-plates text-white border-2 border-24h-yellow hover:bg-24h-yellow hover:text-black hover:border-black hover:cursor-pointer`}
                  withIcon={true}
                />
              </div>
            </div>

            <div className={`w-full lg:w-1/2`}>
              {/*<Image priority={true} className={`w-full`} sizes="(max-width: 768px) 100vw, 50vw" width={500} height={500} src={`/general/contact-us.webp`} alt={'Expert Tyre Services at Your Doorstep Across London'}/>*/}
              { isLoadedServiceLocation && (
                <MapComponent
                  radiusMiles={10}
                  loc={{
                    location: serviceLocation.serviceLocationSlug,
                    coords: {
                      lat: parseFloat(serviceLocation.serviceLocationLatitude),
                      lng: parseFloat(serviceLocation.serviceLocationLongitude),
                    },
                  }}
                  isClickable={false}
                  singleLoc={true}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}