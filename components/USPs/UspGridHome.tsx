import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UspGridHome() {
    return (
        <>
            <div className={`w-full grid grid-cols-1 lg:grid-cols-3 gap-4`}>
                <div className={`bg-white shadow flex flex-col gap-2`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/ok-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`usp-grid-home-h`}>Network<br className={`hidden xl:block`}></br>of Local Fitters</p>
                            <p>We&apos;re thrilled to provide a Lifetime Guarantee that covers all tyre brands. Peace of mind, at no extra cost.</p>
                        </div>
                        <div className={`w-full`}>
                            <Image className={`w-full h-full`} src={`/24h-tyres-local-fitters-network-v1.png`} alt={`24H Tyres is growing a network of tyre specialists in London, join now.`} height={320} width={320}/>
                        </div>

                    </div>
                    <Link href={`/network-of-local-fitters`} className={`px-8 py-2 font-uk-reg-plates bg-24h-yellow hover:bg-orange-600 hover:text-white`}>Network of Local Fitters</Link>
                </div>
                <div className={`bg-white shadow flex flex-col gap-2`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div className={``}>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/ok-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`usp-grid-home-h`}>Lifetime<br className={`hidden xl:block`}></br> Guarantee</p>
                            <p>We&apos;re thrilled to provide a Lifetime Guarantee that covers all tyre brands. Peace of mind, at no extra cost.</p>
                        </div>
                        <div className={``}>
                            <Image className={`w-full h-full`} src={`/24h-tyres-lifetime-guarantee.png`} alt={`We provide lifetime guarantee on all tyres`} height={320} width={320}/>
                        </div>
                    </div>
                    <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12]`}>Lifetime Guarantee</p>
                </div>
                <div className={`bg-white shadow flex flex-col gap-2`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/ok-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`usp-grid-home-h`}>Mobile & Emergency<br className={`hidden xl:block`}></br> Tyre Services</p>
                            <p>We&apos;re thrilled to provide a Lifetime Guarantee that covers all tyre brands. Peace of mind, at no extra cost.</p>
                        </div>
                        <div className={``}>
                            <Image className={`w-full h-full`} src={`/24h-tyres-car.jpg`} alt={`our 24h tyres van for mobile tyre services`} height={320} width={320}/>
                        </div>
                    </div>
                    <Link href={`/tyres`} className={`px-8 py-2 font-uk-reg-plates bg-24h-yellow hover:bg-orange-600 hover:text-white`}>Mobile & Emergency Tyre Services</Link>
                </div>
            </div>
        </>
    )
}