import Link from "next/link";
import React from "react";
import { HideMenuIcon, ShowMenuIcon } from "./types";


interface MobileNavbarMegaMenuItemSecondLayerProps {
    title: string;
    slug?: string;
    fullPath?: string;
    urls?: any[];
}


const MobileNavbarMegaMenuItemSecondLayer = ({title, slug, urls}: MobileNavbarMegaMenuItemSecondLayerProps) => {
    const [showMenu, setShowMenu] = React.useState(false);
    const url = slug || "";


    return (
      <>
        <div className={`flex flex-col gap-2 w-full`}>
          <div className={`flex flex-col gap-2`}>
            { !urls && (
              <div className={`flex justify-between w-full pb-2`}>
                { url !== "" && (
                  <Link href={url} className={`text-lg lg:text-xl text-medykPurple/80 hover:text-orange-600 hover:cursor-pointer`}>{title}</Link>
                )}
                { url === "" && (
                  <div className={`text-lg lg:text-xl text-medykPurple/80 hover:text-orange-600 hover:cursor-pointer`}>{title}</div>
                )}
              </div>
            )}

            { urls && urls?.length > 0 && (
              <button aria-label={`show nav child menu item`} onClick={() => setShowMenu(!showMenu)} className={`flex justify-between w-full pb-2`}>
                { url !== "" && (
                  <Link href={url} className={`text-lg lg:text-xl text-medykPurple/80 hover:text-orange-600 hover:cursor-pointer`}>{title}</Link>
                )}
                { url === "" && (
                  <div className={`text-lg lg:text-xl text-medykPurple/80 hover:text-orange-600 hover:cursor-pointer`}>{title}</div>
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
                    <>
                      <Link href={path} key={index}>
                        <div key={index}
                             className="flex items-center gap-4
                                         px-4 py-4 rounded-lg hover:text-orange-600 hover:cursor-pointer">
                          <div className={`text-md lg:text-xl`}>{item.title}</div>
                        </div>
                      </Link>
                    </>
                  )})
                }
              </div>
            )}
          </div>
        </div>
      </>
    )
}

export default MobileNavbarMegaMenuItemSecondLayer