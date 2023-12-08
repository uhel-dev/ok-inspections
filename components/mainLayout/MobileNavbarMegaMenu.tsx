import Image from "next/image";
import Link from "next/link";
import MobileNavbarMegaMenuItem from "./MobileNavbarMegaMenuItem";
import { CTA_PHONE_NUMBER } from "@/static/utils";

interface MobileNavbarMegaMenuProps {
    handleToggleMobileMenu: () => void,
    isMenuOpen: boolean
}

const mobileTyreFittingUrls = [
    {   title: `Mobile Tyre Fitting at Work`,
        slug: 'at-work',
    },
    {   title: `Mobile Tyre Fitting at Home`,
        slug: 'at-home',
    }
]

const tyresUrls =[
    {
        title: `Fitting Options`,
        urls: [
            {   title: `New Car Tyres`,
                slug: 'fitting-options/new-car-tyres',
            },
            {   title: `Part Worn Tyres`,
                slug: 'fitting-options/part-worn-tyres',
            }
        ]
    },
    {
        title: `Wheel Services`,
        urls: [
            {   title: `Puncture Repair`,
                slug: 'services/wheel-services/puncture-repair',
            },
            {   title: `Rim Fitting`,
                slug: 'services/wheel-services/rim-fitting',
            },
            {   title: `Valve Servicing`,
                slug: 'services/wheel-services/valve-servicing',
            },
            {   title: `Wheel Balancing`,
                slug: 'services/wheel-services/wheel-balancing',
            }
        ]
    },
    {
        title: `Emergency Tyre Repair`,
        slug: "services/emergency-tyre-repair"
    },
    {
        title: `Express Tyre Fitting`,
        slug: "services/express-tyre-fitting"
    },
    {
        title: `Mobile Tyre Repair`,
        slug: "services/mobile-tyre-repair"
    },
]

const moreUrls = [
    {
        title: "Frequently Asked Questions",
        slug: "/faq"
    },
    {
        title: "Join Our Team",
        fullPath: "https://t.me/+R8I7w8Kiz_MyMjI0"
    },
    {
        title: "How to Schedule?",
        slug: "/how-to-book-an-appointment"
    },

]

const MobileNavbarMegaMenu = ({handleToggleMobileMenu, isMenuOpen}: MobileNavbarMegaMenuProps) => {


    return (
        <>
            <div className={`xl:hidden 2xl:hidden fixed top-0 z-50 right-0 w-full h-full bg-black text-white shadow-xl transform duration-700  ease-in-out transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>

                <div className={`flex justify-between`}>
                    <div className={`flex justify-center p-4`}>
                        <Image className={``} src={`/logo/black-background-logo-charles.png`} width={180} height={180} alt={`Logo of 24h Tyres`}></Image>
                    </div>
                    <div className="flex justify-end p-4">
                        <button aria-label={`toggle menu`} onClick={handleToggleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`flex flex-col w-full`}>
                    <div className={`p-4 w-full flex flex-col gap-4`}>
                        <MobileNavbarMegaMenuItem title={`Home`}
                                                  slug={`/`}/>
                        <MobileNavbarMegaMenuItem title={`Locations`}
                                                  slug={`/locations`}/>
                        <MobileNavbarMegaMenuItem title={`Mobile Tyre Fitting`}
                                                  slug={`/mobile-tyre-fitting`}
                                                  urls={mobileTyreFittingUrls} />
                        <MobileNavbarMegaMenuItem title={`Tyres`}
                                                  slug={`/tyres`}
                                                  urls={tyresUrls}
                                                  depth={2} />
                        <MobileNavbarMegaMenuItem title={`More`}
                                                  urls={moreUrls} />
                        <MobileNavbarMegaMenuItem title={`Contact Us`} slug={`/contact-us`}/>
                        <div className={`pt-4`}>
                            <div className={`flex flex-col items-center gap-2`}>
                                <div className={`font-semibold text-xl /80`}>
                                    Schedule an appointment
                                </div>
                                <Link href={CTA_PHONE_NUMBER} className={` bg-24h-yellow p-4 text-lg uppercase text-black font-uk-reg-plates-bold-caps`}>
                                    Call Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavbarMegaMenu