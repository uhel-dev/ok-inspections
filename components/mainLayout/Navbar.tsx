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
      <svg className="h-8 mb-3 mr-3 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
        <div className={`flex flex-col bg-white border-2 border-b-black`}>
            <div className={"flex justify-between w-full xl:w-4/5 mx-auto"}>
                <Link className={"flex justify-center items-center"} href={"/"}>
                    <Image src="/logo/ok-logo.png" width={200} height={200} className={``} alt="Picture of our logo" />
                </Link>
                <div className={`text-black`}>
                    <nav className="w-full text-black">
                        <div className="flex mx-auto justify-between">
                            <ul className="flex justify-center items-center xl:items-end font-uk-reg-plates py-4 lg:p-0">
                                <NavbarParentElement title={`Home`} slug={`/`} />
                                <NavbarParentElement title={`View Item`} slug={`/items/view-item`} />
                                <NavbarParentElement title={`Edit Item`} slug={`/items/edit-item`} />
                                <NavbarParentElement title={`Create Item`} slug={`/items/create-item`} />
                                {/*<NavbarParentElement title={`Contact Us`} slug={`/contact-us`} />*/}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
