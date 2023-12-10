import Link from "next/link";
import Image from "next/image";
import MobileNavbarMegaMenu from "./MobileNavbarMegaMenu";
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PencilSquareIcon,
  PhoneArrowUpRightIcon
} from "@heroicons/react/24/outline";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import LocalStorageService from "@/services/LocalStorageService";

export default function MobileNavbar({headerWidth}: any) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [postcode, setPostcode] = useState<string>('');
  const [registration, setRegistration] = useState<string>('');
  const [postcodeText, setPostcodeText] = useState<string>('');
  const [registrationText, setRegistrationText] = useState<string>('');

  useEffect(() => {
    const storedPostcode = LocalStorageService.getPostcode().toUpperCase()
    const storedRegistration = LocalStorageService.getRegistration().toUpperCase()
    if(storedPostcode != "") {
      setPostcode(storedPostcode);
      setPostcodeText(storedPostcode);
    }
    if(storedRegistration != "") {
      setRegistration(storedRegistration);
      setRegistrationText(storedRegistration);
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className={`w-full bg-white`}>
        <div className={'flex justify-between px-4 border-b-2 border-white'}>
          <div className="w-full border-gray-300 text-gray-900">
            <div className="flex mx-auto justify-between py-2">
              {/*<div className="flex items-center lg:hidden">*/}
              {/*  <Link href={CTA_PHONE_NUMBER} className={`text-24h-yellow hover:text-orange-600`} aria-label={`click to call now`}>*/}
              {/*    <PhoneArrowUpRightIcon className="h-8 w-8 hover:text-orange-600" aria-hidden="true" />*/}
              {/*  </Link>*/}
              {/*</div>*/}
              <div className="relative block text-xl text-teal-600 font-bold flex justify-center items-center">
                <Link className={''} href={'/'}>
                  <Image src="/logo/ok-logo.png"
                         width={140}
                         height={140}
                         alt="Picture of our logo"
                  />
                </Link>
              </div>
              <div className="flex items-center lg:hidden">
                <button aria-label={`Menu`} onClick={() => toggleMobileMenu()}>
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-black hover:text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                </button>
                <MobileNavbarMegaMenu handleToggleMobileMenu={toggleMobileMenu} isMenuOpen={isMobileMenuOpen}/>
              </div>
            </div>
          </div>
        </div>


        <div className="flex items-center lg:hidden border-b border-t border-black font-uk-reg-plates text-xs text-black">
          <div className={`grid grid-cols-2 divide-x divide-black text-white w-full gap-4`}>
            <Link href={`/items/view-item`}
              aria-label={`View inspection form`}
              onMouseEnter={() => setPostcodeText("VIEW")}
              onMouseLeave={() => setPostcodeText(postcode)}
              className={`flex justify-center items-center w-full p-2 gap-2 hover:cursor-pointer text-black`}>
              <MagnifyingGlassCircleIcon className={`h-6 w-6 text-black`}/>
              <p className={`capitalize text-black`}>{postcodeText}</p>
            </Link>
            <Link href={`/items/edit-item`}
              aria-label={`Edit inspection form`}
              onMouseEnter={() => setRegistrationText("EDIT")}
              onMouseLeave={() => setRegistrationText(registration)}
              className={`flex justify-center items-center w-full gap-4 hover:cursor-pointer`}>
              <PencilSquareIcon className={`h-6 w-6 text-black`}/>
              <p className={`capitalize text-black`}>{registrationText}</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}