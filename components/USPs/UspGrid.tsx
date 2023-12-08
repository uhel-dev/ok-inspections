import Image from "next/image";

export default function UspGrid() {
    return (
        <>
            <div className={`p-8`}>
                <div className={`grid grid-cols-2 lg:grid-cols-3 p-6 gap-8`}>
                    <div className={`flex flex-col items-center gap-2`}>
                        <Image src={`/icons/funding.svg`} alt={`We offer all types of tyres, high-spec but also affordable ones`} width={64} height={64}/>
                        <div className={`text-sm lg:text-lg font-uk-reg-plates`}>Affordable</div>
                    </div>
                    <div className={`flex flex-col items-center gap-2`}>
                        <Image src={`/icons/easy-access.svg`} alt={`You can easily reach us to get help with tyres`} width={64} height={64}/>
                        <div className={`text-sm lg:text-lg font-uk-reg-plates`}>Easily Accessible</div>
                    </div>
                    <div className={`flex flex-col items-center gap-2`}>
                        <Image src={`/icons/badge.svg`} alt={`We sell only quality tyres`} width={64} height={64}/>
                        <div className={`text-sm lg:text-lg font-uk-reg-plates`}>Authentic</div>
                    </div>
                    <div className={`flex flex-col items-center gap-2`}>
                        <Image src={`/icons/paypal.svg`} alt={`We accept paypal payments for tyre services provided`} width={64} height={64}/>
                        <div className={`text-sm lg:text-lg font-uk-reg-plates`}>PayPal</div>
                    </div>
                    <div className={`flex flex-col items-center gap-2`}>
                        <Image src={`/icons/visa.svg`} alt={`We accept card payments for all tyre services`} width={64} height={64}/>
                        <div className={`text-sm lg:text-lg font-uk-reg-plates`}>Card Payments</div>
                    </div>
                    <div className={`flex flex-col items-center gap-2`}>
                        <Image src={`/icons/pound-sterling.svg`} alt={`We also accept cash for the tyre services`} width={64} height={64}/>
                        <div className={`text-sm lg:text-lg font-uk-reg-plates`}>Cash</div>
                    </div>
                </div>
            </div>
        </>
    )
}