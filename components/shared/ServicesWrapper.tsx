import { FAQ } from "./FAQ";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";

export default function ServicesWrapper() {
    return (
        <>
            <div className={`flex flex-col lg:flex-row gap-2 w-full`}>
                <div className={`w-full lg:w-1/2 p-6 lg:p-16 flex flex-col bg-gradient-radial from-black to-gray-700 items-center justify-center`}>
                    <div>
                        <div className={`font-uk-reg-plates text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-300`}>WE&apos;LL COME TO YOU</div>
                        <div className={`font-uk-reg-plates text-transparent text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-300`}>FOR FREE</div>
                        <div className={`font-uk-reg-plates text-white text-2xl`}>TYRES & OUR MOBILE EXPERT</div>
                    </div>
                    <div className={`text-white self-start lg:self-center font-uk-reg-plates text-xs`}>
                        *Select <span className={`line-through text-red-500`}>8am to 8am</span> anytime slots, book in advance.
                    </div>
                    <div className={`mt-2 flex gap-2 w-full justify-start lg:justify-center`}>
                        <button
                            aria-label={`Request Callback`}
                            className={`btn p-2 rounded bg-gradient-to-r from-orange-600 to-yellow-300 text-black items-center justify-center font-uk-reg-plates shadow shadow-amber-50 hover:to-orange-600 hover:from-yellow-300 hover:text-blue-800`}>
                            <Link href={CTA_PHONE_NUMBER}>
                                Request Callback
                            </Link>
                        </button>
                        <button aria-label={`send a message`} className={`btn p-2 rounded bg-gradient-to-r from-orange-600 to-yellow-300 hover:to-orange-600 hover:from-yellow-300 hover:text-blue-800 text-black items-center justify-center font-uk-reg-plates shadow shadow-amber-50`}>
                            <Link href={`/contact-us`}>
                                Send a message
                            </Link>
                        </button>
                    </div>
                </div>

                <div className={`w-full lg:w-1/2`}>
                    <FAQ/>
                </div>
            </div>
        </>
    )
}