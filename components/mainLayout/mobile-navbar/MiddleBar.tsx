import Image from "next/image";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import LocalStorageService from "@/services/LocalStorageService";

export default function MiddleBar({headerWidth, scrollPosition}: any) {

  const [registration, setRegistration] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');

  useEffect(() => {
    const storedRegistration = LocalStorageService.getRegistration()
    const storedPostcode = LocalStorageService.getPostcode()
    setRegistration(storedRegistration || '');
    setPostcode(storedPostcode || '');
  }, [])

  return (
    <div className="flex sticky top-0 z-40">
      <div className={`${scrollPosition > 0 ? 'shadow bg-black' : 'shadow-none bg-gray-100'} z-20 transition-shadow w-full flex justify-center`}>
        <div className={`${headerWidth} flex justify-between px-4 py-1 lg:py-0`}>
          <div className="flex justify-center items-center gap-2">
            <Image src="/live-support-agent.png"
                   width={48}
                   height={48}
                   alt="Picture of our live support agent"
                   className={` ${scrollPosition > 0 ? 'hidden' : 'block'} hidden lg:block`}
            />
            <span className={`${scrollPosition > 0 ? 'text-white' : 'text-black'} text-md lg:text-2xl font-bold`}>
                                  <Link className={`hover:text-orange-600`} href={CTA_PHONE_NUMBER}>
                                      07496122886
                                  </Link>
                              </span>
            <div className="hidden md:flex ml-2 gap-1">
              <span className={`${scrollPosition > 0 ? 'text-white' : 'text-black'}`}>Live</span>
              <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
          </div>
          <div className={`flex items-center`}>
            <Image className={`hidden md:flex`}
                   src="/english-flag.png"
                   width={52}
                   height={52}
                   alt="Picture of English flag"/>
            <div className="ml-2 flex md:hidden gap-1">
              <span className={`${scrollPosition > 0 ? 'text-white' : 'text-black'}`}>Live</span>
              <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
          </div>
          {/*{ registration !== "" && (*/}
          {/*  <Link href={`/registration`} className={`flex items-center`}>*/}
          {/*    { registration }*/}
          {/*  </Link>*/}
          {/*)}*/}
          {/*{ postcode !== "" && (*/}
          {/*  <Link href={`/postcode`} className={`flex items-center`}>*/}
          {/*    { postcode }*/}
          {/*  </Link>*/}
          {/*)}*/}
        </div>
      </div>
    </div>
  )
}