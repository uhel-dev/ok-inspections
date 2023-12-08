import Image from "next/image";
import Link from "next/link";

export const Footer = () => {

    return (
        <>
            <div className={`w-full flex flex-col items-center`}>
                <div className={`flex w-full justify-center bg-black p-6 lg:p-16`}>

                    <div className={`flex flex-col lg:flex-row w-full lg:w-4/5 items-center`}>
                        <Link href="/" className={`pt-4 lg:pt-0`}>
                            <Image src="/24h-tyres-logo-white-version.png"
                                   className={`self-center`}
                                   width={320}
                                   height={320}
                                   alt="Picture of 24h tyres logo with white text"/>
                        </Link>

                        <div className={`flex flex-col lg:flex-row w-full lg:p-8`}>
                            <div className={`flex flex-col p-4 bg-black text-white w-full lg:w-1/4 self-e`}>
                                <div className={`p-2 font-bold font-uk-reg-plates`}>
                                    <strong>Search By</strong>
                                    <hr
                                        className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/tyres/find/by-size">
                                        <span className="hover:text-orange-400">Search Tyres by Size</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/tyres/cars">
                                        <span className="hover:text-orange-400">Search Tyres by Make</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/tyres/find/by-registration">
                                        <span className="hover:text-orange-400">Search Tyres by Reg</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/locations">
                                        <span className="hover:text-orange-400">Search Tyres by Location</span>
                                    </Link>
                                </div>
                            </div>

                            <div className={`flex flex-col p-4 bg-black text-white w-full lg:w-1/4`}>
                                <div className={`p-2 font-bold font-uk-reg-plates`}>
                                    <strong>Mobile Tyre Services</strong>
                                    <hr
                                        className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/mobile-tyre-fitting">
                                        <span className="hover:text-orange-400">Mobile Tyre Fitting</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/mobile-tyre-fitting/at-work">
                                        <span className="hover:text-orange-400">Mobile Tyre Fitting at Work</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/mobile-tyre-fitting/at-home">
                                        <span className="hover:text-orange-400">Mobile Tyre Fitting at Home</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/tyres/fitting-options">
                                        <span className="hover:text-orange-400">Fitting Options</span>
                                    </Link>
                                </div>
                            </div>

                            <div className={`flex flex-col p-4 text-white w-full lg:w-1/4`}>
                                <div className={`p-2 font-bold font-uk-reg-plates`}>
                                    <strong>Other Services</strong>
                                    <hr
                                        className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/tyres/services/mobile-tyre-repair">
                                        <span className="hover:text-orange-400">Mobile Tyre Repair</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/tyres/services/emergency-tyre-repair">
                                        <span className="hover:text-orange-400">Emergency Tyre Repair</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/tyres/services/express-tyre-fitting">
                                        <span className="hover:text-orange-400">Express Tyre Fitting</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/tyres/services/wheel-services">
                                        <span className="hover:text-orange-400">Wheel Services</span>
                                    </Link>
                                </div>
                            </div>

                            <div className={`flex flex-col p-4 text-white w-full lg:w-1/4`}>
                                <div className={`p-2 font-bold font-uk-reg-plates`}>
                                    <strong>Legal</strong>
                                    <hr
                                        className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/legal/privacy-policy" target={`_blank`}>
                                        <span className="hover:text-orange-400">Privacy Policy</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/legal/cookies-policy" target={`_blank`}>
                                        <span className="hover:text-orange-400">Cookies Policy</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/legal/terms-and-conditions" target={`_blank`}>
                                        <span className="hover:text-orange-400">Terms & Conditions</span>
                                    </Link>
                                </div>
                                <div className={`p-2 font-uk-reg-plates`}>
                                    <Link href="/contact-us" target={`_blank`}>
                                        <span className="hover:text-orange-400">Contact Us</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex bottom-0 w-full justify-center p-4 bg-gray-900`}>
                    <div className={`text-white text-center px-2`}>
                        By using our service you accept the terms contained in the Terms of service use and Privacy policy. | <Link href={`/sitemap.xml`}>Sitemap</Link>
                    </div>
                </div>
            </div>
        </>
    )
}