"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Navbar } from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import AnnouncementBar from "./mobile-navbar/AnnouncementBar";


const CustomHeader = ({ headerWidthIn }: any) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerRef = useRef<any>(null);


    const headerWidth = headerWidthIn?.length > 0 ? headerWidthIn : "w-full xl:w-4/5"

    useEffect(() => {
        const handleOutsideClick = (event:  any) => {
            if (!drawerRef.current.contains(event.target)) {
                if(isDrawerOpen) setIsDrawerOpen(false);
            }
        };

        if (isDrawerOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };

    }, [isDrawerOpen]);


    const scrollPosition = useScrollPosition()

    return (
        <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-W2H41VV65X"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){window.dataLayer.push(arguments);}
                      gtag('js', new Date());
            
                      gtag('config', 'G-W2H41VV65X');
                    `}
            </Script>
            <div className={`hidden md:block sticky top-0 z-40`}>
              <AnnouncementBar headerWidth={headerWidth} scrollPosition={scrollPosition}/>
            </div>
            <div className={`flex flex-col md:hidden justify-center`}>
              <MobileNavbar headerWidth={headerWidth}/>
            </div>
            {/*<div className={`hidden md:flex flex-col justify-center sticky top-[60px] z-40`}>*/}
            <div className={`hidden md:flex flex-col justify-center`}>
              <Navbar headerWidth={headerWidth}/>
            </div>
        </>
    )
}

export default CustomHeader