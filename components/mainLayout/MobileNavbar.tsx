import Link from "next/link";
import Image from "next/image";
import MobileNavbarMegaMenu from "./MobileNavbarMegaMenu";
import React, { useEffect, useState } from "react";
import { MapPinIcon, PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
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
      <div className={`w-full bg-black`}>
        <div className={'flex justify-between px-4 border-b-2 border-white'}>
          <div className="w-full border-gray-300 text-gray-900">
            <div className="flex mx-auto justify-between py-2">
              <div className="flex items-center lg:hidden">
                <Link href={CTA_PHONE_NUMBER} className={`text-24h-yellow hover:text-orange-600`} aria-label={`click to call now`}>
                  <PhoneArrowUpRightIcon className="h-8 w-8 hover:text-orange-600" aria-hidden="true" />
                </Link>
              </div>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-24h-yellow hover:text-orange-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                </button>
                <MobileNavbarMegaMenu handleToggleMobileMenu={toggleMobileMenu} isMenuOpen={isMobileMenuOpen}/>
              </div>
            </div>
          </div>
        </div>


        <div className="flex items-center lg:hidden bg-black font-uk-reg-plates text-xs">
          <div className={`grid grid-cols-2 divide-x text-white w-full gap-4`}>
            <Link href={`/postcode`}
              aria-label={`search tyre by postcode`}
              onMouseEnter={() => setPostcodeText("UPDATE")}
              onMouseLeave={() => setPostcodeText(postcode)}
              className={`flex justify-center items-center w-full p-2 gap-2 hover:cursor-pointer`}>
              <MapPinIcon className={`h-6 w-6`}/>
              <p className={`capitalize`}>{postcodeText}</p>
            </Link>
            <Link href={`/registration`}
              aria-label={`search tyre by registration number`}
              onMouseEnter={() => setRegistrationText("UPDATE")}
              onMouseLeave={() => setRegistrationText(registration)}
              className={`flex justify-center items-center w-full gap-4 hover:cursor-pointer`}>
              <svg className={`h-10 w-10 text-white`} id="fi_2736918" fill={`white`} enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m98.025 317.265c1.919 0 3.839-.732 5.303-2.196l11.336-11.337c2.929-2.929 2.929-7.677 0-10.606s-7.678-2.929-10.606 0l-11.336 11.337c-2.929 2.929-2.929 7.677 0 10.606 1.465 1.464 3.384 2.196 5.303 2.196z"></path><path d="m416.688 315.068c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196c2.929-2.929 2.929-7.678 0-10.606l-11.336-11.337c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606z"></path><path d="m489.383 238.186c-42.36-19.672-106.078-21.554-118.944-21.731l-60.762-38.667c-17.955-11.426-38.693-17.465-59.974-17.465h-71.419c-18.49 0-37.005 4.371-53.543 12.64l-38.043 19.021c-11.461 5.731-23.72 9.442-36.436 11.032l-29.648 3.706c-11.752 1.468-20.614 11.507-20.614 23.35v47.869c0 14.011 9.409 26.485 22.881 30.334l35.431 10.123c6.086 19.269 24.126 33.279 45.381 33.279 17.679 0 33.125-9.699 41.328-24.049h229.973c8.203 14.35 23.649 24.049 41.328 24.049 26.236 0 47.581-21.345 47.581-47.581s-21.345-47.581-47.581-47.581-47.581 21.344-47.581 47.581c0 2.914.277 5.762.781 8.532h-219.03c.504-2.771.781-5.619.781-8.532 0-26.236-21.345-47.581-47.581-47.581-25.594 0-46.523 20.316-47.532 45.667l-29.159-8.331c-7.065-2.018-12.001-8.56-12.001-15.91v-22.457h8.532c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-8.532v-10.412c0-4.294 3.213-7.934 7.474-8.466l29.648-3.706c14.408-1.801 28.297-6.007 41.284-12.5l3.421-1.71 13.873 13.809c8.987 8.987 20.936 13.937 33.645 13.937h15.462c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-15.462c-1.311 0-2.607-.086-3.889-.238l8.287-36.604c9.582-2.812 19.566-4.272 29.542-4.272h38.152v41.113h-24.564c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h176.353c.711 0 71.566.258 114.84 20.354 2.539 1.179 4.801 2.794 6.734 4.726h-9.347c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h16.412c.081.812.136 1.628.136 2.456v26.612c0 7.43-3.27 12.045-8.532 12.045-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c6.642 0 12.677-2.733 16.995-7.696 4.276-4.917 6.537-11.607 6.537-19.349v-26.612c-.001-15.358-8.879-29.405-22.618-35.785zm-73.061 33.33c17.965 0 32.581 14.616 32.581 32.581s-14.616 32.581-32.581 32.581-32.581-14.616-32.581-32.581 14.616-32.581 32.581-32.581zm-312.629 0c17.965 0 32.581 14.616 32.581 32.581s-14.616 32.581-32.581 32.581-32.581-14.616-32.581-32.581 14.617-32.581 32.581-32.581zm22.566-60.549c-1.761-1.18-3.42-2.541-4.953-4.074l-10.295-10.295 20.438-10.219c.14-.07.283-.135.423-.204zm105.177-35.645h18.267c18.423 0 36.377 5.229 51.921 15.12l40.847 25.994h-111.035z"></path><path d="m175.839 280.564c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h168.338c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path></g></svg>
              <p className={`capitalize`}>{registrationText}</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}