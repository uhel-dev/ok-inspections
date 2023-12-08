import Image from "next/image";

export default function DaisyCarousel() {
    return (
        <>
            <div className={`flex gap-2`}>
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
                        <Image src="/tyre-fittings/tyre-fitting-1.jpg"
                               width={360}
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
                        <Image src="/tyre-fittings/tyre-fitting-2.jpg"
                               width={360}
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