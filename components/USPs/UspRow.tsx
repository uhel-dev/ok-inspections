import Image from "next/image";

const UspRow = () => {

    return (
        <>
            <div className={`flex flex-col xl:flex-row gap-2`}>
                <div className={`flex w-full xl:w-1/2 items-center bg-gray-50 rounded-2xl p-6`}>
                    <div className={`flex flex-col gap-2 w-full lg:w-1/2`}>
                        <div className={`font-uk-reg-plates w-full lg:w-1/2`}>
                            Wide range of tyres
                        </div>
                        <div className={``}>
                            more than 520,000 tyres fitted
                            of 20,000 models.
                        </div>
                    </div>
                    <div className={`w-1/2 flex items-center justify-center`}>
                        <Image src="/tyres-front-shot-v1.png"
                               width={128}
                               height={128}
                               alt="Picture of our live support agent"
                               className={``}
                        />
                    </div>
                </div>
                <div className={`flex w-full xl:w-1/2 items-center bg-gray-50 rounded-2xl p-6`}>
                    <div className={`flex flex-col gap-2 w-full lg:w-1/2`}>
                        <div className={`font-uk-reg-plates`}>
                            Free delivery from just one tyre
                        </div>
                        <div className={``}>
                            Free delivery
                            to any address
                            within the UK mainland
                        </div>
                    </div>
                    <div className={`w-1/2 flex items-center justify-center`}>
                        <Image src="/tyres-front-shot-v3.png"
                               width={128}
                               height={128}
                               alt="Picture of our live support agent"
                               className={``}
                        />
                    </div>
                </div>
                <div className={`flex w-full xl:w-1/2 items-center bg-gray-50 rounded-2xl p-6`}>
                    <div className={`flex flex-col gap-2 w-full lg:w-1/2`}>
                        <div className={`font-uk-reg-plates w-full lg:w-1/2`}>
                            Tyre fitting service
                        </div>
                        <div className={``}>
                            690 tyre fitters in the UK.
                            Free delivery - pay only for the tyre.
                        </div>
                    </div>
                    <div className={`w-1/2 flex items-center justify-center`}>
                        <Image src="/tyres-front-shot-v2.png"
                               width={128}
                               height={128}
                               alt="Picture of our live support agent"
                               className={``}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default UspRow

