import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Footer } from "./Footer";
import SeoMetadata, { CustomMetadata } from "./SeoMetadata";
import Script from "next/script";
import { Breadcrumbs } from "./Breadcrumbs";
import MobileNavbar from "./MobileNavbar";
import { Navbar } from "./Navbar";
import { useScrollPosition } from "@/hooks/useScrollPosition";

interface LayoutProps {
  children: ReactNode;
  jsonLD?: any;
  metadata?: CustomMetadata;
  showBreadcrumbs?: boolean;
  showErrorBreadcrumb?: boolean;
}


const PageLayout: React.FC<LayoutProps> = ({ children, jsonLD, metadata, showBreadcrumbs = true, showErrorBreadcrumb = false}) => {
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
      {/* TODO: need to replace this with ok-inspection*/}
      {/*<Script*/}
      {/*  src="https://www.googletagmanager.com/gtag/js?id=G-W2H41VV65X"*/}
      {/*  strategy="afterInteractive"*/}
      {/*/>*/}
      {/*<Script id="google-analytics" strategy="afterInteractive">*/}
      {/*  {`*/}
      {/*                window.dataLayer = window.dataLayer || [];*/}
      {/*                function gtag(){window.dataLayer.push(arguments);}*/}
      {/*                gtag('js', new Date());*/}
      {/*      */}
      {/*                gtag('config', 'G-W2H41VV65X');*/}
      {/*              `}*/}
      {/*</Script>*/}
      { metadata && <SeoMetadata metadata={metadata}/> }
      { jsonLD && (
        <Script
          id="app-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLD, null, "\t"),
          }}
        >
        </Script>
      )}

      <main className={`mx-auto flex flex-col justify-between min-h-screen`}>
        <div className={`flex flex-col md:hidden justify-center`}>
          <MobileNavbar headerWidth={headerWidth}/>
        </div>
        <div className={`hidden md:flex flex-col justify-center`}>
          <Navbar headerWidth={headerWidth}/>
        </div>
        { showBreadcrumbs && !showErrorBreadcrumb &&(
          <div className={`flex justify-center items-center`}>
            <Breadcrumbs width={`w-4/5`} />
          </div>
        ) }
        { showErrorBreadcrumb &&(
          <div className={`flex justify-center items-center`}>
            <Breadcrumbs width={`w-4/5`} showErrorBreadcrumbs={true}/>
          </div>
        ) }
        <div>
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default PageLayout