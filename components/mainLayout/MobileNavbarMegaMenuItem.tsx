import Link from "next/link";
import React, { useState } from "react";
import MobileNavbarMegaMenuItemSecondLayer from "./MobileNavbarMegaMenuItemSecondLayer";
import { HideMenuIcon, ShowMenuIcon } from "./types";


interface MobileNavbarMegaMenuItemProps {
    title: string;
    slug?: string;
    fullPath?: string;
    urls?: any[];
    depth?: number;
}

const MobileNavbarMegaMenuItem = ({title, slug, urls, depth}: MobileNavbarMegaMenuItemProps) => {
    const [showMenu, setShowMenu] = React.useState(false);
    const url = slug || "";

    return (
        <>
           <div className={`flex flex-col gap-2`}>
             { !urls && (
               <div className={`flex justify-between border-b-2 w-full pb-2`}>
                 { url !== "" && (
                   <Link href={url} className={`text-xl hover:text-orange-600 hover:cursor-pointer`}>{title}</Link>
                 )}
                 { url === "" && (
                   <div className={`text-xl hover:text-orange-600 hover:cursor-pointer`}>{title}</div>
                 )}
               </div>
             )}

             { urls && urls?.length > 0 && (
               <button aria-label={`show ${title}`} onClick={() => setShowMenu(!showMenu)} className={`flex justify-between border-b-2 w-full pb-2`}>
                  { url !== "" && (
                   <Link href={url} className={`text-xl hover:text-orange-600 hover:cursor-pointer`}>{title}</Link>
                  )}
                  { url === "" && (
                   <div className={`text-xl hover:text-orange-600 hover:cursor-pointer`}>{title}</div>
                  )}
                  {showMenu && <ShowMenuIcon/>}
                  {!showMenu && <HideMenuIcon/>}
               </button>
             )}

               { showMenu && (
                   <div className={`transition-all duration-700 ease-in-out transform ${showMenu ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} text-white`}>
                       { urls?.map((item, index) => {
                           const path = item.fullPath ? item.fullPath : (item.slug ? `${url}/${item.slug}` : "");
                           return (
                               <div key={index} className="flex items-center gap-4
                               px-4 py-4 rounded-lg hover:cursor-pointer hover:text-orange-600">
                                   { depth == undefined &&(
                                     <Link href={path} key={index}>
                                        <div className={`text-md lg:text-xl`}>{item.title}</div>
                                    </Link>
                                   )}
                                   { depth && depth === 2 && (
                                     <MobileNavbarMegaMenuItemSecondLayer
                                       title={item.title}
                                       slug={url}
                                       urls={item.urls}/>
                                   )}
                               </div>
                           )})
                       }
                   </div>
               )}
           </div>
        </>
    )
}

export default MobileNavbarMegaMenuItem