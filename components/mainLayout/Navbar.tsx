import Link from "next/link";
import Image from "next/image";
import "../../src/app/globals.css";
import { HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import useLocations from "@/hooks/useLocations";
import React, { useEffect, useState } from "react";
import useCars from "@/hooks/useCars";
import NavbarSearchTypeaheadInput from "../NavbarSearchTypeaheadInput";
import useTyreBrands from "@/hooks/useTyreBrands";
import { LightBulbIcon, PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import { validateRegPlates } from "@/types";
import LocalStorageService from "@/services/LocalStorageService";
import { CTA_PHONE_NUMBER } from "@/static/utils";

const NavbarParentElement = ({ title, slug }: any) => {
    return (
        <li className="hover:bg-black hover:text-white">
            <Link href={slug} className={`kdev-navbar-parent-element`}>
                {title}
            </Link>
        </li>
    );
};

const TealArrow = () => {
    return (
        <svg className="h-6 pr-3 fill-current text-teal-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
        </svg>
    );
};

const WorkIcon = () => {
    return (
      <svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
      </svg>
    )
}

export const Navbar = ({ headerWidth }: any) => {

    const { locations, loadLocations, isLoadedLocations } = useLocations();
    const { cars, loadCars, isLoadedCars } = useCars();
    const { tyreBrands, loadTyreBrands, isLoadedTyreBrands } = useTyreBrands();
    const [registrationValue, setRegistrationValue] = useState<string>('');
    const [isRegistrationValid, setIsRegistrationValid] = useState<boolean>(false);
    const [registration, setRegistration] = useState<string>('');
    const [postcode, setPostcode] = useState<string>('');
    const [postcodeText, setPostcodeText] = useState<string>('');
    const [registrationText, setRegistrationText] = useState<string>('');



    useEffect(() => {
        const storedRegistration = LocalStorageService.getRegistration()
        const storedPostcode = LocalStorageService.getPostcode()
        setRegistration(storedRegistration);
        setRegistrationText(storedRegistration);
        setPostcode(storedPostcode);
        setPostcodeText(storedPostcode);
    }, [])


    useEffect(() => {
        loadLocations();
    }, [loadLocations]);

    useEffect(() => {
        loadCars();
    }, [loadCars]);

    useEffect(() => {
        loadTyreBrands();
    }, [loadTyreBrands]);




    function handleRegistrationChange(e: any) {
        setRegistrationValue(e.target.value.toUpperCase());

        if(validateRegPlates(e.target.value)) {
            setIsRegistrationValid(true)
        } else {
            setIsRegistrationValid(false)
        }
    }

    const handleContinueButtonClick = () => {
        if (isRegistrationValid) {
            LocalStorageService.setRegistration(registrationValue)
            if(LocalStorageService.getPostcode() !== "") {
                window.location.href = '/choose-tyre-size'
            }
            else {
                window.location.href = '/postcode'
            }
        }
    }


    return (
        <div className={`flex flex-col bg-black`}>
            <div className={"flex justify-between w-full xl:w-4/5 mx-auto"}>
                <Link className={"w-[100px] md:w-[140px] lg:w-[200px] pl-4 flex justify-center items-center"} href={"/"}>
                    <Image src="/logo/black-background-logo-charles.png" width={200} height={200} className={`py-2 xl:py-4`} alt="Picture of our logo" />
                </Link>
                <div>
                    <div className={`absolute bg-black w-2/3 xl:w-1/2 h-[32px] text-sm text-white right-0 hidden md:flex justify-end font-uk-reg-plates-regular z-30`}>
                        <div className={`relative bg-gray-800 h-[32px] flex justify-center items-center`}>
                            <div className={`user-info-navbar pl-6 pr-2`}>
                                { registration !== "" && (
                                  <Link href={`/registration`}
                                        className={`flex items-center`}
                                        onMouseEnter={() => setRegistrationText("UPDATE")}
                                        onMouseLeave={() => setRegistrationText(registration)}>
                                      <div className={`font-uk-reg-plates-bold-caps`}>
                                          { registrationText }
                                      </div>
                                  </Link>
                                )}
                            </div>
                            <div className={`user-info-navbar px-2`}>
                                { postcode !== "" && (
                                  <Link
                                    href={`/postcode`}
                                    className={`flex items-center`}
                                    onMouseEnter={() => setPostcodeText("UPDATE")}
                                    onMouseLeave={() => setPostcodeText(postcode)}
                                  >
                                      <div className={`font-uk-reg-plates-bold-caps`}>
                                          { postcodeText }
                                      </div>
                                  </Link>
                                )}
                            </div>
                            <div className={`user-info-navbar px-2`}>
                                Open 7 days a week 24 hours a day
                            </div>
                            <div className={`user-info-navbar xl:px-2 mr-0 md:pr-4 xl:pr-4`}>
                                <Link
                                  href={CTA_PHONE_NUMBER}
                                  className={`flex gap-2 hover:text-orange-600 font-uk-reg-plates-bold-caps`}
                                >
                                    <PhoneArrowUpRightIcon className="h-6 w-6" aria-hidden="true" />
                                    <span className={`flex items-center justify-center`}>Call Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <nav className="w-full text-white mt-4 lg:mt-8">
                        <div className="flex mx-auto justify-between">
                            <ul className="flex justify-center items-center xl:items-end font-uk-reg-plates py-4 lg:p-0">
                                <NavbarParentElement title={`Home`} slug={`/`} />
                                <NavbarParentElement title={`Find a Fitter`} slug={`/locations`} />
                                <li className="hoverable hover:bg-black hover:text-white z-30">
                                    <Link href={"/mobile-tyre-fitting"} className={`kdev-navbar-parent-element kdev-navbar-parent-element-with-y-char`}>
                                        Mobile Tyre Fitting
                                    </Link>
                                    <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-black border-t-2 border-white">
                                        <div className="container mx-auto w-4/5 flex flex-wrap mx-2">
                                            <div className="w-full text-white mb-8 text-center">
                                                <h2 className="font-bold text-2xl">Mobile Tyre Fitting</h2>
                                                <p>Quality tyres fitted at your convenience, whether at home or at work.</p>
                                            </div>
                                            <ul className="px-4 w-full lg:w-1/2 border-gray-600 border-b lg:border-b-0  lg:border-r pb-6 pt-6 lg:pt-3">
                                                <div className="flex items-center gap-2">
                                                    <HomeIcon className={`w-8 h-8`} />
                                                    <h3 className="font-bold text-xl text-white text-bold">Mobile Tyre Fitting at Home</h3>
                                                </div>
                                                <p className="text-gray-100 text-sm">Get your tyres fitted comfortably at home by our expert technicians.</p>
                                                <div className="flex items-center py-3">
                                                    <TealArrow />
                                                    <Link href="/mobile-tyre-fitting/at-home" className="text-white bold border-b-2 border-teal-300 hover:text-teal-400">
                                                        Fitting at Home
                                                    </Link>
                                                </div>
                                            </ul>
                                            <ul className="px-4 w-full lg:w-1/2 border-gray-600 pb-6 pt-6 lg:pt-3">
                                                <div className="flex items-center">
                                                    <WorkIcon />
                                                    <h3 className="font-bold text-xl text-white text-bold mb-2">Mobile Tyre Fitting at Work</h3>
                                                </div>
                                                <p className="text-gray-100 text-sm">Maximize your time by having your tyres fitted while you work.</p>
                                                <div className="flex items-center py-3">
                                                    <TealArrow />
                                                    <Link href="/mobile-tyre-fitting/at-work" className="text-white bold border-b-2 border-teal-300 hover:text-teal-400">
                                                        Fitting at Work
                                                    </Link>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="hoverable hover:bg-black hover:text-white">
                                    <Link href={"/tyres"} className={`kdev-navbar-parent-element kdev-navbar-parent-element-with-y-char`}>
                                        Tyres
                                    </Link>
                                    <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-black z-40 border-t-2 border-white">
                                        <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                                <Link href={`/tyres/find`} >
                                                    <h3 className="font-bold text-xl text-white text-bold mb-2 hover:text-orange-600">Find By</h3>
                                                </Link>
                                                <li>
                                                    <Link href="/tyres/find/by-size" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-600">
                                                        Search Tyres by Size
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/tyres/find/by-make" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-600">
                                                        Search Tyres by Make
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/tyres/find/by-brand" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-600">
                                                        Search Tyres by Brand
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/tyres/find/by-registration" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-600">
                                                        Search Tyres by Registration
                                                    </Link>
                                                </li>
                                            </ul>

                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                                <h3 className="font-bold text-xl text-white text-bold mb-2">Tyre Services</h3>

                                                <li className="group hoverable hover:bg-black hover:text-white">
                                                    <Link href="/tyres/fitting-options" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-600">
                                                        Fitting Options
                                                    </Link>
                                                    <div className="hidden group-hover:block bg-black p-3">
                                                        <ul>
                                                            <li>
                                                                <Link href="/tyres/fitting-options/new-car-tyres" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-500">
                                                                    New Car Tyres
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/tyres/fitting-options/part-worn-tyres" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-500">
                                                                    Part Worn Tyres
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li className="group hoverable hover:bg-black hover:text-white">
                                                    <Link href="/tyres/services/wheel-services" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-600">
                                                        Wheel Services
                                                    </Link>
                                                    <div className="hidden group-hover:block bg-black p-3">
                                                        <ul>
                                                            <li>
                                                                <Link href="/tyres/services/wheel-services/puncture-repair" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-500">
                                                                    Puncture Repair
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/tyres/services/wheel-services/rim-fitting" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-500">
                                                                    Rim Fitting
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/tyres/services/wheel-services/valve-servicing" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-500">
                                                                    Valve Servicing
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/tyres/services/wheel-services/wheel-balancing" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-500">
                                                                    Wheel Balancing
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <Link href="/tyres/services/emergency-tyre-repair" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-600">
                                                        Emergency Tyre Repair
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/tyres/services/express-tyre-fitting" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-600">
                                                        Express Tyre Fitting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/tyres/services/mobile-tyre-repair" className="block p-3 hover:bg-black text-gray-300 hover:text-orange-600">
                                                        Mobile Tyre Repair
                                                    </Link>
                                                </li>
                                            </ul>

                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                                <h3 className="font-bold text-xl text-white text-bold">More</h3>
                                                <li>
                                                    <div className="block pt-3 px-3 hover:bg-black text-gray-300 cursor-default">Tyre Services in</div>
                                                    {!isLoadedLocations && <div>Loading locations...</div>}
                                                    {isLoadedLocations && <NavbarSearchTypeaheadInput suggestionsIn={locations} isLoaded={isLoadedLocations} placeholder={`Search by Area`} pathPrefix={"/tyres/tyre-services-in"} />}
                                                </li>
                                                <li>
                                                    <Link href="/tyres/cars" className="block px-3 hover:bg-black text-gray-300 hover:text-white">
                                                        Tyres by Car Makes
                                                    </Link>
                                                    {!isLoadedCars && <div>Loading cars...</div>}
                                                    {isLoadedCars && <NavbarSearchTypeaheadInput suggestionsIn={cars} isLoaded={isLoadedCars} placeholder={`Search by Car Make`} pathPrefix={"/tyres/cars"} />}
                                                </li>
                                                <li>
                                                    <Link href="/tyres/brands" className="block px-3 hover:bg-black text-gray-300 hover:text-white">
                                                        Tyres by Brand
                                                    </Link>
                                                    {!isLoadedTyreBrands && <div>Loading tyre brands...</div>}
                                                    {isLoadedTyreBrands && <NavbarSearchTypeaheadInput suggestionsIn={tyreBrands} isLoaded={isLoadedTyreBrands} placeholder={`Search by Brand`} pathPrefix={"/tyres/brands"} />}
                                                </li>
                                                <li className={`hidden lg:block`}>
                                                    <Link href="/tyres/brands" className="block px-3 hover:bg-black text-gray-300 hover:text-white">
                                                        Tyres by Registration
                                                    </Link>
                                                    <div className={`p-3`}>
                                                        <input
                                                          placeholder={'Search by Registration'}
                                                          className={`p-2 placeholder-black text-black font-uk-reg-plates-bold-caps w-full bg-24h-yellow text-sm xl:text-base`}
                                                          type="text"
                                                          id={`navbar-search-by-car`}
                                                          value={registrationValue}
                                                          onChange={(e: any) => handleRegistrationChange(e)}
                                                        />
                                                        { isRegistrationValid && (
                                                          <button aria-label={`continue tyres search by registration`} onClick={handleContinueButtonClick} className="bg-white shadow-md mt-2 max-h-60 overflow-y-auto">
                                                              <div
                                                                className="p-2 hover:bg-gray-100 cursor-pointer text-black"
                                                              >
                                                                  Click to search
                                                              </div>
                                                          </button>
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>

                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3  flex justify-center items-center">
                                                <li className="pt-3">
                                                    <Image src="/24h-tyres-logo-white-version.png" className={`self-center`} width={320} height={320} alt="Picture of 24h tyres logo with white text" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="hoverable hover:bg-black hover:text-white z-40 ">
                                    <div className={`kdev-navbar-parent-element`}>More</div>
                                    <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-black border-t-2 border-white">
                                        <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                                            <div className="w-full text-white mb-8 text-center">
                                                <h2 className="font-bold text-2xl">Spend less, travel more - Your tyre&apos;s best friend!</h2>
                                                <p>Quality Tyres, Wallet-Friendly Prices - We Make Every Mile Count!</p>
                                            </div>
                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                                <div className="flex items-center gap-2">
                                                    <QuestionMarkCircleIcon className={`w-8 h-8 mb-3`} />
                                                    <h3 className="font-bold text-xl text-white text-bold mb-2">FAQ</h3>
                                                </div>
                                                <p className="text-gray-100 text-sm">Got questions? We&apos;ve got answers! Dive into our FAQ section where we&apos;ve addressed common queries around our tyre services. </p>
                                                <div className="flex items-center py-3">
                                                    <TealArrow />
                                                    <Link href="/faq" className="text-white bold border-b-2 border-teal-300 hover:text-teal-900">
                                                        Explore Our Expert Answers
                                                    </Link>
                                                </div>
                                            </ul>
                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-3">
                                                        <path
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                                        />
                                                    </svg>
                                                    <h3 className="font-bold text-xl text-white text-bold mb-2">Join Our Network</h3>
                                                </div>
                                                <p className="text-gray-100 text-sm">Step into a world of opportunities with 24h Tyres! Join our network to connect with a community of tyre service professionals and gain access to potential leads. </p>
                                                <div className="flex items-center py-3">
                                                    <TealArrow />
                                                    <Link href="https://t.me/+R8I7w8Kiz_MyMjI0" className="text-white bold border-b-2 border-teal-300 hover:text-teal-900">
                                                        Unlock Your Business Potential
                                                    </Link>
                                                </div>
                                            </ul>
                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                                <div className="flex items-center gap-2">
                                                    <svg className="h-8 mb-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                                                    </svg>
                                                    <h3 className="font-bold text-xl text-white text-bold mb-2">How to schedule?</h3>
                                                </div>
                                                <p className="text-gray-100 text-sm">Book with 24h Tyres for fast, reliable tyre services. Our expert team is ready to assist with tyre changes, repairs, and balancing.</p>
                                                <div className="flex items-center py-3">
                                                    <TealArrow />
                                                    <Link href="/how-to-book-an-appointment" className="text-white bold border-b-2 border-teal-300 hover:text-teal-900">
                                                        Book Your Service Today
                                                    </Link>
                                                </div>
                                            </ul>
                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <LightBulbIcon className={`w-8 h-8 mb-3`} />
                                                        <h3 className="font-bold text-xl text-white text-bold mb-2">Help & Advice</h3>
                                                    </div>
                                                    <p className="text-gray-100 text-sm">Discover all things tyre-related and more on our advice page. We provide valuable insights and information to keep you informed and confident.</p>
                                                </div>
                                                <div className="flex items-center py-3">
                                                    <TealArrow />
                                                    <Link href="/tyres/advice" className="text-white bold border-b-2 border-teal-300 hover:text-teal-900">
                                                        Uncover Essential Tyre Insights
                                                    </Link>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="hover:bg-black hover:text-white">
                                    <Link href={"/contact-us"} className={`kdev-navbar-parent-element`}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
