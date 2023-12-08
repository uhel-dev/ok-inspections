import { GetStaticPaths, GetStaticProps } from "next";
import CustomHeader from "../../../../../components/mainLayout/CustomHeader";
import hygraphClient from "../../../../../lib/hygraphClient.mjs";
import { gql } from "graphql-request";
import { Breadcrumbs } from "../../../../../components/mainLayout/Breadcrumbs";
import { Footer } from "../../../../../components/mainLayout/Footer";
import React from "react";
import CtaBanner from "../../../../../components/shared/CtaBanner";
import { RichText } from "@graphcms/rich-text-react-renderer";
import SeoMetadata from "../../../../../components/mainLayout/SeoMetadata";
import { MinifiedRequestCallbackDialog } from "../../../../../components/dialogs/MinifiedRequestCallbackDialog";
import UspGridHome from "../../../../../components/USPs/UspGridHome";
import ThreeGridColSelectBestTime from "../../../../../components/ThreeGridColSelectBestTime";
import Link from "next/link";

interface BrandDetails {
  brand: string;
  brandLogo: {
    url: string;
  };
  brandDescription: string;
  brandType: string;
  brandText: {
    raw: any
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { tyreBrandInformations }: any = await hygraphClient.request(
    gql`
      query MyQuery {
        tyreBrandInformations(first: 50) {
          brand
        }
      }
    `
  );
  // Map the newsEntries to an array of paths
  const paths = tyreBrandInformations.map((entry: any) => ({
    params: { brand: entry.brand }, // assuming url is the unique identifier you want to use as id
  }));

  // Return the paths
  return {
    paths,
    fallback: false // or 'blocking' if you want to enable server-side rendering for not pre-rendered pages
  };
};

const delay = (ms: any) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const brand = params?.brand as string;
  await delay(200)
  const { tyreBrandInformations }: any = await hygraphClient.request(
    gql`
    query MyQuery($brand: String!) {
     tyreBrandInformations(where: {brand: $brand}) {
        brand
        brandDescription
        brandLogo {
          url
        }
        brandText {
          raw
        }
        brandType
      }
    }
    
  `, { brand })


  return {props: tyreBrandInformations[0]};
}

interface BrandProps {
  brand: string;
  brandLogo: {
    url: string;
  },
  brandDescription: string;
  brandType: string;
  brandText: {
    raw: any;
  }
}

const Brand: React.FC<BrandProps> = (props) => {
  const { brand, brandLogo, brandDescription, brandType, brandText } = props

  const tyreBrandMetadata = () => {
    const capitalizedBrand = brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();

    return {
      "title": `24h Tyres - ${capitalizedBrand} Tyres | Mobile Tyre Fitting`,
      "description": `Discover our extensive selection of ${capitalizedBrand} tyres. As dedicated suppliers and mobile fitters, we guarantee optimal performance and safety for your vehicle with our premium tyre range.`,
      "url": `/tyres/brands/${brand.toLowerCase()}`,
      "imageUrl": brandLogo.url,
      "canonical": `https://24h-tyres.co.uk/tyres/brands/${brand.toLowerCase()}`
    };
  };

  // TODO: add json-ld

  return (
    <>
      <SeoMetadata metadata={tyreBrandMetadata()}/>
      <CustomHeader headerWidthIn={'w-full lg:w-4/5'}/>
      <main className="flex flex-col items-center justify-between justify-center">
        <Breadcrumbs width={`w-4/5`}/>
        <div className="flex flex-col w-full lg:w-4/5 p-2">
          <div className={`my-4 flex flex-col gap-4`}>


            <div className={`flex flex-col lg:flex-row justify-center items-center`}>
              <div className={`lg:w-1/2 flex flex-col gap-4`}>
                <h1 className={`text-3xl lg:text-6xl font-bold`}>{brand.toUpperCase()} TYRES</h1>
                <p className={`font-light`}>{brandDescription}</p>
                <div className={`kdev-button-cta-yellow-black`}>Call Now</div>
                {/*<h4 className={`mt-2 text-2xl font-semibold`}>We offer various categories of tyres, each varying in terms of cost and performance characteristics.</h4>*/}
              </div>
              <div className={`lg:w-1/2 lg:px-16 flex justify-center items-center`}>
                {/*<Image src={brandLogo.url} alt={brand} width={500} height={500}/>*/}
                <img src={brandLogo.url} alt={brand}/>
              </div>
            </div>


          </div>



          <div className={`py-16`}>
            <ThreeGridColSelectBestTime/>
          </div>

          <div className={`py-8 flex flex-col`}>
            <div>
              <div className={`kdev-h3`}>Mobile Tyre Fitting Services - At Our Center or Your Location</div>
              <div className={`kdev-subheading`}>Choose Your Convenience: Visit Us or {`We'll`} Come to You</div>
              <div>
                Discover the flexibility of our tyre fitting services. Whether you prefer visiting one of our well-equipped centers or having a professional fitter come directly to you, we cater to your needs. Our extensive network of centers is strategically located to serve you better. Use our interactive map to find a centre near you or conveniently book a mobile tyre fitter to meet you at your chosen location. Experience the ease of tailor-made tyre services, designed for your lifestyle.
              </div>
              <div className={`pt-8 flex gap-2`}>
                <Link className={`kdev-button-cta-yellow-black`} href={`/locations`}>Find Our Centers</Link>
                <Link className={`kdev-button-cta-yellow-black`} href={`/locations#use-your-current-location-btn`}>Use Our Location Finder</Link>

              </div>
            </div>
            <div>

            </div>
          </div>


          <div className={`bg-gray-200 my-4 w-full`}>
            <div className={`flex items-center`}>
              <div className={'border-l-yellow-400 border-l-8 text-2xl p-2 font-uk-reg-plates'}>{brandType}</div>
            </div>
          </div>
          <div className={`my-4 flex flex-col gap-4`}>
            <RichText
              content={brandText.raw}
              renderers={{
                h1: ({ children }) => <h1 className="text-4xl /80 font-bold mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl /80 font-semibold mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl /80 font-semibold mb-3">{children}</h3>,
                h4: ({ children }) => <h4 className="text-xl /80 font-semibold mb-3">{children}</h4>,
                h5: ({ children }) => <h5 className="text-lg /80 font-semibold mb-3">{children}</h5>,
                p: ({ children }) => <p className="text-base mb-3">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-5 mb-3">{children}</ul>,
                li: ({ children }) => <li className="mb-1 p-2">{children}</li>,
                bold: ({ children }) => <strong className="font-bold">{children}</strong>,
                a: ({ children, href, openInNewTab }) => (
                  <a
                    href={href}
                    target={openInNewTab ? '_blank' : '_self'}
                    className="text-green-500 hover:underline"
                    rel="noreferrer"
                  >
                    {children}
                  </a>
                ),
                Asset: {
                  text: () => (
                    <div className="bg-gray-100 p-2 rounded-md">
                      <p className="text-base">text plain</p>
                    </div>
                  ),
                },
              }}
            />
            <p className={`font-light`}>
              Tyres of superior quality are produced by established brands such as Bridgestone, Continental, Dunlop, Goodyear, Michelin and Pirelli. They utilize the most contemporary technology and innovative practices to manufacture these premium products. These tyre brands are renowned for achieving the highest ratings in evaluations conducted by automobile publications and organizations, due to their excellent performance under even the most challenging road conditions. The exceptional features incorporated in these premium tyres elevate the safety and comfort levels of driving.
            </p>
            <p className={`font-light`}>
              Particularly, the high-performance vehicles (including large sedans, sports cars, SUVs, etc.) and drivers with a lively driving style would greatly benefit from tyres made by these industry leaders. These top-tier tyre manufacturers have a rich legacy in the industry, often extending back to the 19th century, and have played a pivotal role in shaping the evolution of the automotive industry.
            </p>

          </div>


          <CtaBanner inText={`Always There, Always Fair: Beating Any Quote, Anytime!`}/>
          <div className={`py-8`}>
            <MinifiedRequestCallbackDialog/>
          </div>
          <div>
            <UspGridHome/>
          </div>

        </div>

      </main>
      <Footer/>
    </>
  )
}

export default Brand