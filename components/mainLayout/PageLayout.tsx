import React, { ReactNode } from "react";
import CustomHeader from "./CustomHeader";
import { Footer } from "./Footer";
import SeoMetadata, { CustomMetadata } from "./SeoMetadata";
import Script from "next/script";
import { Breadcrumbs } from "./Breadcrumbs";

interface LayoutProps {
  children: ReactNode;
  jsonLD?: any;
  metadata?: CustomMetadata;
  showBreadcrumbs?: boolean;
  showErrorBreadcrumb?: boolean;
}


const PageLayout: React.FC<LayoutProps> = ({ children, jsonLD, metadata, showBreadcrumbs = true, showErrorBreadcrumb = false}) => {
  return (
    <>
      <CustomHeader/>
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

      <main className={`mx-auto`}>
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
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PageLayout