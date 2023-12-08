import React from "react";
import PageLayout from "../../../components/mainLayout/PageLayout";
import Link from "next/link";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const legalPageMetadata = {
    title: "Legal Information | 24h Tyres",
    description: "Explore our legal information, including terms and conditions, cookies policy, and privacy policy.",
    url: "/legal",
    canonical: "https://www.24h-tyres.co.uk/legal",
    keywords: "legal information, terms and conditions, cookies policy, privacy policy, 24h Tyres",
    imageUrl: "https://www.24h-tyres.co.uk/legal/legal.png", // Replace with the actual URL of your legal page image
};

const Legal = () => {
    return (
        <PageLayout metadata={legalPageMetadata}>
            <section className={`kdev-section`}>
                <div className="w-full flex items-center justify-center">
                    <div className="w-full py-4 flex flex-col gap-2">
                        <h1 className={`kdev-h1`}>Legal Information</h1>
                        <p className={`text-lg font-uk-reg-plates-regular`}>Welcome to our Legal Information page. Here you can find important documents that govern our relationship with our users.</p>
                    </div>
                </div>
            </section>

            <section className={`kdev-section`}>
                <div className={`flex flex-col gap-4`}>
                    <div className={`grid gap-4 grid-cols-1 md:grid-cols-2`}>
                        <div className={`md:row-span-1 rounded-xl md:col-span-1 border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90`}>
                            <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                                <h3 className={`kdev-h3`}>Privacy Policy</h3>
                                <p className={`kdev-text`}>
                                    At 24h Tyres, we understand the significance of brand reputation. We offer a wide selection of top-tier tyre brands known for their quality and durability. Brands like Michelin, Bridgestone, and Goodyear are among
                                    our offerings. Choosing tyres from trusted brands not only enhances your {`vehicle's`} performance but also guarantees reliability and peace of mind.
                                </p>
                                <div className={`pt-4`}>
                                    <Link href={`/legal/privacy-policy`} className={`p-4 bg-black text-white font-uk-reg-plates-bold-caps hover:bg-24h-yellow hover:text-black`}>
                                        View Privacy Policy
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`md:row-span-1 rounded-xl md:col-span-1 border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90`}>
                            <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                                <h3 className={`kdev-h3`}>Cookies Policy</h3>
                                <p className={`kdev-text`}>
                                    At 24h Tyres, we understand the significance of brand reputation. We offer a wide selection of top-tier tyre brands known for their quality and durability. Brands like Michelin, Bridgestone, and Goodyear are among
                                    our offerings. Choosing tyres from trusted brands not only enhances your {`vehicle's`} performance but also guarantees reliability and peace of mind.
                                </p>
                                <div className={`pt-4`}>
                                    <Link href={`/legal/cookies-policy`} className={`p-4 bg-black text-white font-uk-reg-plates-bold-caps hover:bg-24h-yellow hover:text-black`}>
                                        View Cookies Policy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
                        <div className={`md:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  p-4 dark:bg-neutral-90 lg:col-span-2`}>
                            <div className={`flex flex-col gap-4 justify-center h-full p-4`}>
                                <h3 className={`kdev-h3`}>Terms and Conditions</h3>
                                <p className={`kdev-text`}>
                                    At 24h Tyres, we understand the significance of brand reputation. We offer a wide selection of top-tier tyre brands known for their quality and durability. Brands like Michelin, Bridgestone, and Goodyear are among
                                    our offerings. Choosing tyres from trusted brands not only enhances your {`vehicle's`} performance but also guarantees reliability and peace of mind.
                                </p>
                                <div className={`pt-4`}>
                                    <Link href={`/legal/terms-and-conditions`} className={`p-4 bg-black text-white font-uk-reg-plates-bold-caps hover:bg-24h-yellow hover:text-black`}>
                                        View Terms & Conditions
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`b-g h-full`}>
                                <div className={`flex flex-col gap-4 justify-center items-center p-4`}>
                                    <QuestionMarkCircleIcon className={`w-12 h-12`} />
                                    <h5 className={`kdev-h3`}>Questions?</h5>
                                    <p className={`kdev-text text-center`}>Feel free to reach out if you have any questions</p>
                                    <Link className={`font-uk-reg-plates-bold-caps rounded-xl border-2 border-slate-400/10 p-4 hover:bg-orange-600 hover:text-black`} href={`/contact-us`}>
                                        Get in Touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Legal;
