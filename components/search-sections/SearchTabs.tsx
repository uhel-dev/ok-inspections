"use client";


import { useState } from "react";
import SearchSectionByTyreSize from "./SearchSectionByTyreSize";
import SearchSectionByVehicleNumberPlate from "./SearchSectionByVehicleNumberPlate";

const SearchTabs = (isOpen?: any) => {

    const [activeSearchTab, setActiveSearchTab] = useState(isOpen ? "search-by-vehicle" : "")

    const removeClassesFromActiveSearchTab = (activeSearchTab: any) => {
        document.getElementById(activeSearchTab)!.classList.remove("bg-[#feea12]")
        document.getElementById(activeSearchTab)!.classList.remove("text-black")
        document.getElementById(activeSearchTab)!.classList.remove("border-1")
        document.getElementById(activeSearchTab)!.classList.remove("border-black")
        document.getElementById(activeSearchTab)!.classList.add("border")
        document.getElementById(activeSearchTab)!.classList.add("bg-white")
        document.getElementById(activeSearchTab)!.classList.add("p-4")
        document.getElementById(activeSearchTab)!.classList.add("text-black")
        document.getElementById(activeSearchTab)!.classList.add("border-1")
        document.getElementById(activeSearchTab)!.classList.add("border-black")
    }

    const addClassesToActiveSearchTab = (searchTabName: any) => {
        document.getElementById(searchTabName)!.classList.remove("bg-white")
        document.getElementById(searchTabName)!.classList.remove("border-black")
        document.getElementById(searchTabName)!.classList.remove("border-1")
        document.getElementById(searchTabName)!.classList.remove("text-black")
        document.getElementById(searchTabName)!.classList.add("bg-[#feea12]")
        document.getElementById(searchTabName)!.classList.add("p-4")
        document.getElementById(searchTabName)!.classList.add("text-black")
        document.getElementById(searchTabName)!.classList.add("border-black")
        document.getElementById(searchTabName)!.classList.add("border-1")
    }

    const toggleActiveSearchTab = (searchTabName: any) => {
        if(activeSearchTab === searchTabName) {
            removeClassesFromActiveSearchTab(activeSearchTab)
            setActiveSearchTab('')
            return
        }
        setActiveSearchTab(searchTabName)

        if(searchTabName !== "") {
            if(activeSearchTab !== '') {
                removeClassesFromActiveSearchTab(activeSearchTab)
            }
            addClassesToActiveSearchTab(searchTabName)
        }
    }

    return (
        <>
            <div className="flex gap-2 w-full py-4">
                <button id="search-by-vehicle" className="text-md lg:text-lg w-full lg:w-1/2 flex gap-2 items-center justify-center border bg-[#feea12] border-1 border-black pt-4 pb-4 text-black font-uk-reg-plates hover:bg-black hover:text-white" onClick={() => toggleActiveSearchTab("search-by-vehicle")}>
                    Search By <br className={`block lg:hidden`}/>Registration Number
                    <svg className="hidden lg:block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <button aria-label={`search by tyre size`} id="search-by-tyre-size" className="text-md lg:text-lg w-full lg:w-1/2 flex gap-2 items-center justify-center border border-black bg-white pt-4 pb-4 text-black font-uk-reg-plates hover:bg-black hover:text-white" onClick={() => toggleActiveSearchTab("search-by-tyre-size")}>
                    Search By <br className={`block lg:hidden`}/>Tyre Size
                    <svg className="hidden lg:block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
            <div>
                {
                    activeSearchTab === 'search-by-vehicle' && (
                        <SearchSectionByVehicleNumberPlate
                            handleChangeToSearchByTyre={(data: any) => toggleActiveSearchTab(data)}
                        />
                    )
                }
                {
                    activeSearchTab === 'search-by-tyre-size' && (
                        <SearchSectionByTyreSize handleChangeToSearchByTyre={(data: any) => toggleActiveSearchTab(data)}/>
                    )
                }
            </div>
        </>
    )
}

export default SearchTabs