"use client";


import { useEffect, useState } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Splitter = () => {
    return (
        <>
            <div className={`text-black`}>&gt;</div>
        </>
    )
}

export const Breadcrumbs = ({width, showErrorBreadcrumbs}: any) => {

    const [pathComponents, setPathComponents] = useState<any>([])
    const pathname = usePathname()

    const parseUrl = (path: any) => {
        // Check if path ends with a slash and remove it
        if (path.endsWith("/")) {
            path = path.slice(0, -1);
        }

        const pc = path.split('/').filter((component: any) => component);
        // Construct the path parts
        let pathParts = [];
        let currentPath = '';
        for (let i = 0; i < pc.length; i++) {
            currentPath += '/' + pc[i];
            pathParts.push(currentPath);
        }

        return pathParts;
    }

    const formatTextAnchor = (text: string) => {
        if (text.startsWith("/")) {
            text = text.slice(1);
        }

        if(text.split('/').length > 0) {
            text = text.split('/')[text.split('/').length - 1]
        }


        return text.replaceAll('-', ' ')
    }

    useEffect(() => {
        setPathComponents(parseUrl(pathname))
    }, [pathname])


    return (
        <>
            <div className={`hidden lg:flex w-full xl:${width ? width : "w-2/3"} items-center gap-2 pb-2 lg:p-4 font-uk-reg-plates`}>
                <Link href="/"><HomeIcon className={`h-5 w-5 text-black`}/></Link>
                { showErrorBreadcrumbs && (
                    <>
                        <Splitter/>
                        <div className={`text-black`}>404</div>
                    </>
                )}
                { !showErrorBreadcrumbs && pathComponents?.length > 0 && pathComponents.map((path: string) => {
                    return (
                        <div key={path} className={`flex gap-2`}>
                            <Splitter/>
                            <Link className={`capitalize`} href={path}>{formatTextAnchor(path)}</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}