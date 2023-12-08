import Image from "next/image";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function AnnouncementBar({headerWidth, scrollPosition}: any) {

  return (
    <div className={`flex bg-black border-b-2 border-white h-[60px] z-50`}>
      <div className={`w-full pt-2 flex justify-center items-center relative`}>
        <div className={`w-full xl:w-4/5 flex justify-between`}>
          <div className="flex justify-center items-center px-4 md:pl-4 xl:gap-2">
            <Image src="/live-support-agent.png" width={48} height={48} alt="Picture of our live support agent"
                   className={`hidden lg:block`} />
            <div className={`text-white text-md lg:text-xl font-uk-reg-plates-bold-caps`}>
              <Link className={`hover:text-orange-600`} href={CTA_PHONE_NUMBER}>
                02080792350
              </Link>
            </div>
            <div className="hidden md:flex ml-2 gap-1">
              <span className={`text-white`}>Live</span>
              <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
          </div>
          <div className={`flex justify-center px-4 absolute right-0`}>
            <div className={`flex w-full justify-center gap-2`}>
              <Image src={`/icons/shield.svg`} alt={`lifetime guarantee on all car & van tyres`} width={32} height={32}></Image>
              <div className={`font-uk-reg-plates flex justify-center items-center text-white text-xs md:text-sm lg:text-lg`}>
                LIFETIME GUARANTEE on all car & van tyres. Peace of mind, at no extra cost
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}