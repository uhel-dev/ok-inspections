import "../../../app/globals.css";
import { CustomMetadata } from "../../../../components/mainLayout/SeoMetadata";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "../../../../components/mainLayout/PageLayout";

export default function Brands() {
    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Find Tyres by Brand",
        description: "Effortlessly find and compare tyres by brand for your vehicle. Choose from premium to budget options for mobile fitting with 24h Tyres.",
        url: "https://www.24h-tyres.co.uk/find/by-brand",
        image: "https://24h-tyres.co.uk/search-tyres-by-brand.jpg",
        logo: "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
        areaServed: {
            "@type": "Country",
            name: "UK",
        },
        serviceType: "Find Tyres by Brand",
        hoursAvailable: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
            },
        ],
        provider: {
            "@type": "Organization",
            name: "24h Tyres",
            url: "https://www.24h-tyres.co.uk",
            logo: "https://www.24h-tyres.co.uk/logo/black-background-logo-charles.png",
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "0208 0792 350",
                contactType: "customer service",
                contactOption: "TollFree",
                areaServed: "GB",
                availableLanguage: "en",
            },
        },
    };

    const findTyresByBrandMetadata: CustomMetadata = {
        title: "Find Tyres by Brand - Quick & Easy | 24h Tyres",
        description: "Effortlessly find and compare tyres by brand for your vehicle. Choose from premium to budget options for mobile fitting with 24h Tyres.",
        url: "/tyres/find/by-brand",
        imageUrl: "https://24h-tyres.co.uk/searcg-tyres-by-brand.jpg",
        canonical: "https://24h-tyres.co.uk/tyres/find/by-brand",
        keywords: "find tyres, tyre brands, premium tyres, budget tyres, vehicle tyres, 24h Tyres",
    };

    return (
        <PageLayout metadata={findTyresByBrandMetadata} jsonLD={jsonLD}>
            <section className={`kdev-section`}>
                <div className="flex flex-col w-full p-2">
                    <div className={`my-4 flex flex-col gap-4`}>
                        <h1 className={`text-6xl font-bold`}>Find By Tyre Brand</h1>
                        <p className={`font-light`}>
                            Choosing the correct tyres is vital for ensuring your safety and that of other motorists. Our store offers a diverse range of tyre options, featuring everything from globally renowned brands to unique models from niche,
                            local manufacturers. Our unparalleled selection and product availability simply cannot be found elsewhere.
                        </p>
                        <h4 className={`text-2xl font-semibold`}>We offer various categories of tyres, each varying in terms of cost and performance characteristics.</h4>
                    </div>

                    <div className={`bg-gray-200 my-4 w-full`}>
                        <div className={`flex items-center`}>
                            <div className={"border-l-yellow-400 border-l-8 text-2xl p-2 font-uk-reg-plates"}>Premium Tyres</div>
                        </div>
                    </div>
                    <div className={`my-4 flex flex-col gap-4`}>
                        <p className={`font-light`}>
                            Tyres of superior quality are produced by established brands such as Bridgestone, Continental, Dunlop, Goodyear, Michelin and Pirelli. They utilize the most contemporary technology and innovative practices to manufacture
                            these premium products. These tyre brands are renowned for achieving the highest ratings in evaluations conducted by automobile publications and organizations, due to their excellent performance under even the most
                            challenging road conditions. The exceptional features incorporated in these premium tyres elevate the safety and comfort levels of driving.
                        </p>
                        <p className={`font-light`}>
                            Particularly, the high-performance vehicles (including large sedans, sports cars, SUVs, etc.) and drivers with a lively driving style would greatly benefit from tyres made by these industry leaders. These top-tier tyre
                            manufacturers have a rich legacy in the industry, often extending back to the 19th century, and have played a pivotal role in shaping the evolution of the automotive industry.
                        </p>

                        <div className={`grid grid-cols-3 gap-12 my-4 items-center justify-center`}>
                            <div>
                                <Link href={`/tyres/brands/bridgestone`}>
                                    <Image src="/tyre-brands/bridgestone.svg" width={240} height={240} alt="Picture of Tyre Brand BRDIGESTONE" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/continental`}>
                                    <Image src="/tyre-brands/continental.svg" width={240} height={240} alt="Picture of Tyre Brand CONTINENTAL" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/dunlop`}>
                                    <Image src="/tyre-brands/dunlop.svg" width={240} height={240} alt="Picture of Tyre Brand DUNLOP" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/goodyear`}>
                                    <Image src="/tyre-brands/goodyear.svg" width={240} height={240} alt="Picture of Tyre Brand GOODYEAR" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/michelin`}>
                                    <Image src="/tyre-brands/michelin.svg" width={240} height={240} alt="Picture of Tyre Brand MICHELIN" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/pirelli`}>
                                    <Image src="/tyre-brands/pirelli.svg" width={240} height={240} alt="Picture of Tyre Brand PIRELLI" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={`bg-gray-200 my-4 w-full`}>
                        <div className={`flex items-center`}>
                            <div className={"border-l-yellow-400 border-l-8 text-2xl p-2 font-uk-reg-plates"}>Moderate-Priced Tyres</div>
                        </div>
                    </div>
                    <div className={`my-4 flex flex-col gap-4`}>
                        <p className={`font-light`}>
                            Tyre producers across the globe frequently include mid-range tyres in their product portfolios. Brands that are well-known in this segment include BFGoodrich, Falken, Firestone, Fulda, Hankook, GT, and Yokohama. These
                            tyres provide exceptional cost-effectiveness. They strike a balance between the quality of premium tyres and the affordability of economy tyres. Ideal for city and highway driving, these tyres are suitable for a variety of
                            vehicles, ranging from compact city cars to somewhat larger automobiles.
                        </p>

                        <div className={`grid grid-cols-3 gap-12 my-4 items-center justify-center`}>
                            <div>
                                <Link href={`/tyres/brands/yokohama`}>
                                    <Image src="/tyre-brands/yokohama.svg" width={240} height={240} alt="Picture of Tyre Brand YOKOHAMA" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/firestone`}>
                                    <Image src="/tyre-brands/firestone.svg" width={240} height={240} alt="Picture of Tyre Brand FIRESTONE" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/hankook`}>
                                    <Image src="/tyre-brands/hankook.svg" width={240} height={240} alt="Picture of Tyre Brand HANKOOK" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/falken`}>
                                    <Image src="/tyre-brands/falken.svg" width={240} height={240} alt="Picture of Tyre Brand FALKEN" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/fulda`}>
                                    <Image src="/tyre-brands/fulda.svg" width={240} height={240} alt="Picture of Tyre Brand FULDA" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/gt`}>
                                    <Image src="/tyre-brands/gt.svg" width={240} height={240} alt="Picture of Tyre GT" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/bfgoodrich`}>
                                    <Image src="/tyre-brands/BFGoodrich.svg" width={240} height={240} alt="Picture of Tyre Brand BF GOODRICH" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={`bg-gray-200 my-4 w-full`}>
                        <div className={`flex items-center`}>
                            <div className={"border-l-yellow-400 border-l-8 text-2xl p-2 font-uk-reg-plates"}>Budget Tyres</div>
                        </div>
                    </div>
                    <div className={`my-4 flex flex-col gap-4`}>
                        <p className={`font-light`}>
                            If budget-friendly tyres are what you&apos;re after, the economy class is an excellent choice. Brands like Roadstone, Mazzini, Nexen, Sumitomo, Kormoran and Sailun, along with several others that may not be as widely
                            recognized but are equally deserving of consideration, fall into this category. Such tyres are frequently recommended by manufacturers to drivers with a more relaxed driving style, primarily city dwellers, or those owning
                            smaller or less powerful vehicles. These economical tyres typically employ previously utilized technologies that were once prominent in premium models.
                        </p>

                        <div className={`grid grid-cols-3 gap-12 my-4 items-center justify-center`}>
                            <div>
                                <Link href={`/tyres/brands/roadstone`}>
                                    <Image src="/tyre-brands/roadstone.svg" width={240} height={240} alt="Picture of Tyre Brand ROADSTONE" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/firestone`}>
                                    <Image src="/tyre-brands/firestone.svg" width={240} height={240} alt="Picture of Tyre Brand MAZZINI" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/nexen`}>
                                    <Image src="/tyre-brands/nexen.svg" width={240} height={240} alt="Picture of Tyre Brand NEXEN" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/sumitomo`}>
                                    <Image src="/tyre-brands/sumitomo.svg" width={240} height={240} alt="Picture of Tyre Brand SUMITOMO" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/kormoran`}>
                                    <Image src="/tyre-brands/kormoran.svg" width={240} height={240} alt="Picture of Tyre Brand KORMORAN" />
                                </Link>
                            </div>
                            <div>
                                <Link href={`/tyres/brands/sailun`}>
                                    <Image src="/tyre-brands/sailun.svg" width={240} height={240} alt="Picture of Tyre SAILUN" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={`my-4 grid grid-cols-2 gap-4`}>
                        <p className={`font-light`}>
                            We offer a wide range of tire options catering to various vehicle types, not limited to car tire models. Whether you need van tires, 4x4 tires, or motorcycle tires (including those for quads and scooters), we have you
                            covered. Our inventory also includes sought-after Run Flat and reinforced tires. To assist you in making the right choice, we provide a helpful Tire Comparison Tool.
                        </p>
                        <p className={`font-light`}>
                            Should you find yourself uncertain, don&apos;t hesitate to reach out to us. Our team of knowledgeable consultants undergo regular training and possess a deep understanding of the offerings from different tire
                            manufacturers. They are passionate automotive enthusiasts, equipped to address any inquiries and guide you in selecting the most suitable tires that align with your preferences and requirements.
                        </p>
                    </div>

                    <div className={`flex justify-center my-4`}>
                        <p>With the extensive selection available in our store, there&apos;s undoubtedly something tailored to suit your needs.</p>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
