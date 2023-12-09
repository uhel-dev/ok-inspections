import Image from "next/image";

export default function BudgetTyresGrid() {
    return (
        <>
            <div className={`flex flex-col justify-center p-4 lg:p-0 lg:py-16 gap-4`}>
                <p className={`font-uk-reg-plates text-4xl self-center`}>
                    Budget Tyres
                </p>
                <p>
                    At <strong>24h-tyres.co.uk</strong>, we understand that every motorist has unique needs and budgets. Our diverse range of tyres includes trusted names like Michelin, Continental, Bridgestone, as well as budget tyres like Nexen, Roadstone, Kormoran, and Mazzini. Our focus is on ensuring safety and affordability for every UK driver of cars or vans.
                </p>
                <p>
                    Start by entering your registration number, vehicle make, or tyre size in our system. Once you&apos;ve found your tyre size, simply click &apos;Request Callback&apos; or hit the &apos;Call Us&apos; button. Our expert team is always ready to assist and ensure a smooth purchase experience. Your journey to safer, affordable driving starts here.
                </p>

            </div>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-32`}>
                <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div className={``}>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/ok-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`text-4xl font-uk-reg-plates`}>Nexen Tyres</p>
                            <p>We&apos;re thrilled to provide a Lifetime Guarantee that covers all tyre brands. Peace of mind, at no extra cost.</p>
                        </div>
                        <div className={`pt-2`}>
                            <Image className={`w-full h-full`} src={`/budget-tyres-nexen.webp`} alt={`Nexen Tyres - Quality Budget Tyres`} height={320} width={320}/>
                        </div>
                    </div>
                    <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12]`}>Nexen Tyres</p>
                </div>
                <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div className={``}>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/ok-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`text-4xl font-uk-reg-plates`}>Roadstone Tyres</p>
                            <p>We&apos;re thrilled to provide a Lifetime Guarantee that covers all tyre brands. Peace of mind, at no extra cost.</p>
                        </div>
                        <div className={`pt-2`}>
                            <Image className={`w-full h-full`} src={`/budget-tyres-roadstone.webp`} alt={`Roadstone Tyres - Quality Budget Tyres`} height={320} width={320}/>
                        </div>
                    </div>
                    <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12]`}>Roadstone Tyres</p>
                </div>
                <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div className={``}>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/ok-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`text-4xl font-uk-reg-plates`}>Kormoran Tyres</p>
                            <p>We&apos;re thrilled to provide a Lifetime Guarantee that covers all tyre brands. Peace of mind, at no extra cost.</p>
                        </div>
                        <div className={`pt-2`}>
                            <Image className={`w-full h-full`} src={`/budget-tyres-kormoran.webp`} alt={`Kormoran Tyres - Quality Budget Tyres`} height={320} width={320}/>
                        </div>
                    </div>
                    <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12]`}>Kormoran Tyres</p>
                </div>
                <div className={`bg-white shadow flex flex-col gap-2 hover:animate-pulse hover:cursor-pointer`}>
                    <div className={`p-4 lg:p-8 flex flex-col`}>
                        <div className={``}>
                            <div className={`flex gap-2 items-center`}>
                                <Image src={`/ok-favicon.png`} width={32} height={32} alt={`24h Tyres - Small Favicon Image Showcasing Our Mobile Tyre Services Offer`}></Image>
                                <span className={`font-uk-reg-plates`}>24h-tyres.co.uk</span>
                            </div>
                            <p className={`text-4xl font-uk-reg-plates`}>Mazzini Tyres</p>
                            <p>We&apos;re thrilled to provide a Lifetime Guarantee that covers all tyre brands. Peace of mind, at no extra cost.</p>
                        </div>
                        <div className={`pt-2`}>
                            <Image className={`w-full h-full`} src={`/budget-tyres-mazzini.webp`} alt={`Mazzini Tyres - Quality Budget Tyres`} height={320} width={320}/>
                        </div>
                    </div>
                    <p className={`px-8 py-2 font-uk-reg-plates bg-[#feea12]`}>Mazzini Tyres</p>
                </div>
            </div>
        </>
    )
}