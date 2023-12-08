import Image from "next/image";
import Link from "next/link";

export default function ThreeWaysOfSearchingTyreSize() {
    return (
        <>
            <div className={`flex w-full justify-center p-4`}>
                <div className={`flex flex-col justify-center`}>
                    <p className={`font-uk-reg-plates text-3xl lg:text-4xl lg:self-center`}>Find Your Perfect Tyres</p>
                    <p className={`font-uk-reg-plates text-lg`}>Discover the perfect tyres for your vehicle with our easy-to-use search features. No matter your preferred search method, we&apos;ve got you covered.</p>
                </div>
            </div>
            <div className={`flex w-full justify-center`}>
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4`}>
                    <div>
                        <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                            <div className={`p-4 lg:p-8 flex flex-col`}>
                                <div className={`flex flex-col gap-2`}>
                                    <div className={`flex gap-2 items-center`}>
                                        <Image src={`/24h-tyres-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                        <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                                    </div>
                                    <p className={`text-4xl font-uk-reg-plates`}>Search By Tyre Dimensions</p>
                                    <p>If you&apos;re a savvy motorist who knows your tyre size, this option is for you. Enter the tyre dimensions directly into our system, and we&apos;ll present you with all available options. You can find the dimensions on your current tyres.</p>
                                </div>
                                <div className={`pt-2`}>
                                </div>
                            </div>
                            <Link href={`/tyres/find/by-size`}>
                                <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12] flex gap-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                    <span className={'hover:translate-x-2'}>Search By Tyre Size</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                            <div className={`p-4 lg:p-8 flex flex-col`}>
                                <div className={`flex flex-col gap-2`}>
                                    <div className={`flex gap-2 items-center`}>
                                        <Image src={`/24h-tyres-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                        <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                                    </div>
                                    <p className={`text-4xl font-uk-reg-plates`}>Search By Car or Van Make</p>
                                    <p>Navigate your tyre selection effortlessly by entering your vehicle&apos;s make. We&apos;ve streamlined this process to present you with tyres that are the perfect fit for your car, ensuring optimal performance and safety.</p>
                                </div>
                                <div className={`pt-2`}>
                                </div>
                            </div>

                            <Link href={`/tyres/find/by-make`}>
                                <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12] flex gap-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                    <span className={'hover:translate-x-2'}>Search By Car or Van Make</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                            <div className={`p-4 lg:p-8 flex flex-col`}>
                                <div className={`flex flex-col gap-2`}>
                                    <div className={`flex gap-2 items-center`}>
                                        <Image src={`/24h-tyres-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                        <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                                    </div>
                                    <p className={`text-4xl font-uk-reg-plates`}>Search By Vehicle Registration Number</p>
                                    <p>Enter your vehicle&apos;s registration number and let our system do the work. This feature provides a list of suitable tyres specifically matched to your vehicle&apos;s make and model - it doesn&apos;t get any simpler than that!</p>
                                </div>
                                <div className={`pt-2`}>
                                </div>
                            </div>
                            <Link href={`/tyres/find/by-registration`}>
                                <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12] flex gap-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                    <span className={'hover:translate-x-2'}>Search By Vehicle Registration Number</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}