"use client"

import MobileNavbar from "./MobileNavbar";
import { Navbar } from "./Navbar";
import React, { useEffect, useRef, useState } from "react";

export default function KDevNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<any>(null);

  const headerWidth = "w-full xl:w-4/5"

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

  return (
    <>
      <div className={`flex flex-col md:hidden justify-center`}>
        <MobileNavbar headerWidth={headerWidth}/>
      </div>
      <div className={`hidden md:flex flex-col justify-center`}>
        <Navbar headerWidth={headerWidth}/>
      </div>
    </>
  )
}