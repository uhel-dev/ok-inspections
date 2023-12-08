import Image from "next/image";

export default function MediumCostTyresGrid() {
    return (
        <>
            <div className={`flex flex-col justify-center p-4 lg:p-0 lg:py-16 gap-4`}>
                <p className={`font-uk-reg-plates text-4xl self-center`}>
                    Medium Cost Tyres
                </p>
                <p>
                    At <strong>24h-tyres.co.uk</strong>, we acknowledge that each driver is looking for the perfect balance of quality and value. For the motorist considering mid-range options, we offer a select collection of tyres from respected brands like Yokohama, Hankook, Falken, Fulda, GT, and BF Goodrich. We are committed to providing an optimal blend of performance and cost-effectiveness for every UK driver of cars or vans.
                </p>
                <p>
                    Start your quest for the ideal tyre by entering your registration number, vehicle make, or tyre size into our system. Once you&apos;ve identified your tyre size, simply click &apos;Request Callback&apos; or hit the &apos;Call Us&apos; button. Our knowledgeable team is always on hand to facilitate a seamless purchase experience. Your path to driving with confidence and cost efficiency starts here.
                </p>

            </div>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-32`}>
                <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div className={``}>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/24h-tyres-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`text-4xl font-uk-reg-plates`}>Falken Tyres</p>
                            <p>
                                Experience the power of Falken tyres. With globally recognised advanced tech and innovative design, they guarantee a reliable and confident drive. Navigate the city or countryside with Falken&apos;s superior grip and handling from <strong>24h-tyres.co.uk</strong>. Quality, safety, value - that&apos;s the Falken promise.
                            </p>
                        </div>
                        <div className={`pt-2`}>
                            <Image className={`w-full h-full`} src={`/medium-tyres-falken.webp`} alt={`We offer Medium Range Tyres - Falken Brand`} height={320} width={320}/>
                        </div>
                    </div>
                    <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12]`}>Falken Tyres</p>
                </div>
                <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div className={``}>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/24h-tyres-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`text-4xl font-uk-reg-plates`}>Fulda Tyres</p>

                            <p>
                                Meet Fulda, your ultimate choice for affordability and performance. Known for its innovative design and reliable performance, Fulda promises impressive road grip and lasting durability. Choose Fulda from <strong>24h-tyres.co.uk</strong> - dependable, safe, and exceptional value.
                            </p>
                        </div>
                        <div className={`pt-2`}>
                            <Image className={`w-full h-full`} src={`/medium-tyres-fulda.webp`} alt={`We offer Fulda tyres at great prices`} height={320} width={320}/>
                        </div>
                    </div>
                    <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12]`}>Fulda Tyres</p>
                </div>
                <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div className={``}>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/24h-tyres-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`text-4xl font-uk-reg-plates`}>BF Goodrich Tyres</p>
                            <p>
                                Elevate your drive with widely known BF Goodrich tyres. Known worldwide for robust performance and exceptional road handling, BF Goodrich is a promise of quality and comfort. Call <strong>24h-tyres.co.uk</strong> experts and choose safety, quality, and unbeatable prices. All quotes are free.
                            </p>
                        </div>
                        <div className={`pt-2`}>
                            <Image className={`w-full h-full`} src={`/medium-tyres-bf-goodrich.webp`} alt={`BF Goodrich Tyres - Quality Budget Tyres`} height={320} width={320}/>
                        </div>
                    </div>
                    <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12]`}>BF Goodrich Tyres</p>
                </div>
                <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div className={``}>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/24h-tyres-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`text-4xl font-uk-reg-plates`}>Yokohama Tyres</p>
                            <p>
                                Embrace the exceptional quality of Yokohama tyres. Trusted worldwide for advanced technology and safety, Yokohama guarantees excellent road grip under all conditions. Buy Yokohama at <strong>24h-tyres.co.uk</strong> - reliable, performance-driven, and a great value for your investment.
                            </p>
                        </div>
                        <div className={`pt-2`}>
                            <Image className={`w-full h-full`} src={`/medium-tyres-yokohama.webp`} alt={`Yokohama Tyres - Quality Budget Tyres`} height={320} width={320}/>
                        </div>
                    </div>
                    <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12]`}>Yokohama Tyres</p>
                </div>
            </div>
        </>
    )
}