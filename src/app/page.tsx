"use client";

import "../app/globals.css";
import CustomHeader from "../../components/mainLayout/CustomHeader";
import { Footer } from "../../components/mainLayout/Footer";
import UspGridHome from "../../components/USPs/UspGridHome";
import TyreBrandsGrid from "../../components/grids/TyreBrandsGrid";
import HowToUse from "../../components/shared/HowToUse";
import UspRow from "../../components/USPs/UspRow";
import BudgetTyresGrid from "../../components/grids/BudgetTyresGrid";
import ThreeWaysOfSearchingTyreSize from "../../components/search-sections/ThreeWaysOfSearchingTyreSize";
import MapComponent from "../../components/shared/MapComponent";
import CtaBanner from "../../components/shared/CtaBanner";
import ServicesWrapper from "../../components/shared/ServicesWrapper";
import MediumCostTyresGrid from "../../components/grids/MediumCostTyresGrid";
import SeoMetadata, { CustomMetadata } from "../../components/mainLayout/SeoMetadata";
import SearchTabs from "../../components/search-sections/SearchTabs";

export default function Home() {
    const homepageMetadata: CustomMetadata = {
        title: "24h Tyres - Quality Tyres & Services",
        description: "Your one-stop shop for quality tyres and professional tyre services. Experience the best with 24h Tyres.",
        url: "/",
        imageUrl: "https://24h-tyres.co.uk/24h-tyres-favicon.png",
        canonical: "https://24h-tyres.co.uk/",
    };

    return (
        <>
            <SeoMetadata metadata={homepageMetadata} />
            <CustomHeader />
            {/*<CustomHeader headerWidthIn={'w-full'}/>*/}

            {/* Page Body */}
            <div
                className={`w-full flex justify-center`}
                style={{
                    backgroundImage: `url("hero-image-mobile-tyres.webp")`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className={`w-full h-full lg:w-4/5 flex flex-col justify-center gap-4 p-4 py-16 lg:py-0 lg:p-16`}>
                    <div className={`flex flex-col lg:py-8 lg:px-4 bg-black/40`}>
                        <h1 className={`kdev-h1 text-white`}>Roll Smoothly Anytime: Your 24/7 Tyre Experts!</h1>
                        <div className={`mb-4 lg:mb-0 pb-8`}>
                            <SearchTabs isOpen={true} />
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className={`w-full flex justify-center`}>*/}
            <div className={`w-full flex justify-center `} style={{ marginTop: "-40px" }}>
                <div className={`flex w-full lg:w-4/5 justify-center pt-6 lg:pt-0`}>
                    <UspGridHome />
                </div>
            </div>
            <div className={`w-full flex justify-center py-8`}>
                <div className={`w-full lg:w-4/5`}>
                    <TyreBrandsGrid />
                </div>
            </div>
            <div className={`w-full flex justify-center py-8`}>
                <div className={`w-full lg:w-4/5`}>
                    <HowToUse />
                </div>
            </div>

            <div className={`w-full flex justify-center py-8`}>
                <div className={`w-full lg:w-4/5`}>
                    <UspRow />
                </div>
            </div>

            <div className={`w-full flex justify-center py-8 bg-gray-200`}>
                <div className={`w-full lg:w-4/5`}>
                    <BudgetTyresGrid />
                </div>
            </div>

            <div className={`w-full flex justify-center py-8`}>
                <div className={`w-full lg:w-4/5`}>
                    <ThreeWaysOfSearchingTyreSize />
                </div>
            </div>

            <div className={`w-full flex justify-center py-8 bg-gray-200`}>
                <div className={`w-full lg:w-4/5`}>
                    <MediumCostTyresGrid />
                </div>
            </div>

            <div className={`w-full flex justify-center py-8`}>
                <div className={`w-full lg:w-4/5 p-4 flex flex-col`}>
                    <div className={`self-center text-3xl lg:text-4xl font-uk-reg-plates font-extrabold py-4 lg:py-8 self-center`}>Locations We Cover</div>
                    <MapComponent radiusMiles={25} singleLoc={false} />
                </div>
            </div>

            <div className={`w-full flex justify-center py-8`}>
                <div className={`w-full lg:w-4/5 p-4`}>
                    <ServicesWrapper />
                </div>
            </div>

            <div className={`w-full flex justify-center py-8`}>
                <div className={`w-full lg:w-4/5 p-4`}>
                    <CtaBanner />
                </div>
            </div>

            {/* Footer Section*/}
            <Footer />
        </>
    );
}
