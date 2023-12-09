import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function CrosslinksModule({ locations, path }: any) {

  const [visibleAmount, setVisibleAmount] = useState(10)

  const toggleLocations = () => {
    if(visibleAmount === locations.length) {
      setVisibleAmount(5)
    }
    else if (visibleAmount + 5 > locations.length) {
      setVisibleAmount(locations.length)
    }
    else {
      setVisibleAmount(visibleAmount + 5)
    }
  }

  const [isTyreServiceLocation] = useState(path === "tyre-services-in")


  return (
    <>
        <h3 className={`text-2xl font-uk-reg-plates py-4`}>{isTyreServiceLocation ? "Tyre Services in other locations" : "Other locations"}</h3>
        <div className={`w-full grid grid-cols-2 lg:grid-cols-5 gap-8`}>
          { !isTyreServiceLocation && locations.slice(0, visibleAmount).map(({location}: any) => (
            <Link key={location} href={`/locations/${location}`} className={`font-uk-reg-plates`}>
              <div className={`bg-gray-900 text-white p-4 rounded-2xl`} >
                <Image src={`/ok-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                {location.replace("tyre-services-in-", "").substring(0, 1).toUpperCase() + location.replace("tyre-services-in-", "").substring(1)}
              </div>
            </Link>
          ))}
          { isTyreServiceLocation && locations.slice(0, visibleAmount).map(({tyreServicesInLocationUrl}: any) => (
            <Link key={tyreServicesInLocationUrl} href={`/tyres/${tyreServicesInLocationUrl}`} className={`font-uk-reg-plates`}>
              <div className={`bg-gray-900 text-white p-4 rounded-2xl`} >
                <Image src={`/ok-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                {tyreServicesInLocationUrl.replace("tyre-services-in-", "").substring(0, 1).toUpperCase() + tyreServicesInLocationUrl.replace("tyre-services-in-", "").substring(1)}
              </div>
            </Link>
          ))}

          <div>
            <div className={`btn btn-outline`} onClick={() => toggleLocations()}>{visibleAmount === locations.length ? "Hide all" : "Show more"} Locations</div>
          </div>
        </div>
    </>
  )
}