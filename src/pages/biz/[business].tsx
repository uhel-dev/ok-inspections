import "../../app/globals.css";

import { BusinessCMS, OpeningDetails } from "../../../data/businesses/business";
import { GetStaticPaths, GetStaticProps } from "next";
import CustomHeader from "../../../components/mainLayout/CustomHeader";
import { Footer } from "../../../components/mainLayout/Footer";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRightCircleIcon, ArrowLeftCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { FullyQualifiedUSP, HighestStandardUSP, ReliableServicesUSP, ReviewBox } from "../../../components/business";
import hygraphClient from "../../../lib/hygraphClient.mjs";
import { gql } from "graphql-request";
import { delay } from "@/utils/delay";
import { RichText } from "@graphcms/rich-text-react-renderer";

export const getStaticPaths: GetStaticPaths = async () => {
  const { businesses }: any = await hygraphClient.request(
    gql`
     query MyQuery {
       businesses(first: 100) {
        businessSlug
      }
    }
    `
  );
  const paths = businesses.map(({ businessSlug }: any) => ({
    params: { business: businessSlug },
  }));
  return {
    paths,
    fallback: false
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.business as string;

  await delay(1200);

  const { businesses }: any = await hygraphClient.request(
    gql`
    query MyQuery($slug: String!) {
      businesses(where: {businessSlug: $slug}) {
        businessSlug
        businessAddress
        businessAverageRating
        businessEmail
        businessName
        businessNumberOfReviews
        businessOpeningHours
        businessOverview {
          raw
        }
        businessPhone
        businessPhotos {
          url
        }
        businessType
        businessWebsite
        businessReviews
        businessLogoImage {
          url
        }
      }
    }`
  , { slug });


  return {
    props: {
      business: businesses[0]
    }
  };
}
export interface BusinessProps {
  business: BusinessCMS
}

export default function Business({ business }: BusinessProps) {
  const [visibleImagesStartIndex, setVisibleImagesStartIndex] = useState<number>(0);
  const [visibleImagesEndIndex, setVisibleImagesEndIndex] = useState<number>(4);


  function handleNextImage() {
    if (visibleImagesEndIndex < business.businessPhotos.length) {
      setVisibleImagesStartIndex(visibleImagesStartIndex + 1)
      setVisibleImagesEndIndex(visibleImagesEndIndex + 1)
    }
  }

  function handlePreviousImage() {
    if (visibleImagesStartIndex > 0) {
      setVisibleImagesStartIndex(visibleImagesStartIndex - 1)
      setVisibleImagesEndIndex(visibleImagesEndIndex - 1)
    }
  }

  return (
    <>
      <CustomHeader/>
      <section className={`kdev-section-no-margin`}>
        <div className={`flex justify-center items-center text-white font-uk-reg-plates-regular`}>
          <div className={`grid grid-cols-12 w-full`}>
            <div className={`col-span-2 bg-black py-8 px-4  rounded-l-xl`}>
              <div className={`grid gap-4 justify-center`}>
                <Image width={140} height={140}
                       src={`/businesses/business-example-logo.png`}
                       alt={`${business.businessName} logo`}/>
                <div className={`flex justify-center items-center gap-2`}>
                  <ClockIcon className={`w-6 h-6`}/>
                  <span>Open 24 Hours</span>
                </div>
              </div>
            </div>
            <div className={`col-span-6 bg-neutral-900 py-8 px-4 relative`}>
              <div className={`grid gap-2 business-info-top-section`}>
                <div className={`kdev-h3`}>{business.businessName}</div>
                <div>{business.businessType} | {business.businessAverageRating} Star Reviews</div>
                <div className={`grid`}>
                  <div className={`flex gap-1 items-center`}>
                    { Array(business.businessAverageRating).fill(0).map((_, i) => {
                      return (
                        <StarIcon key={i} className={`w-6 h-6`}/>
                      )
                    })}
                    <div className={`ml-2 flex gap-2 items-center justify-center text-xl`}>
                      <div className={`font-uk-reg-plates-bold-caps`}>{business.businessAverageRating.toFixed(1)}</div>
                      <div>({business.businessNumberOfReviews} Reviews)</div>
                      <div>|</div>
                      <Link href={`/`} className={`hover:text-orange-600`}>Write a review</Link>
                    </div>
                  </div>
                </div>
                <div className={`flex gap-2`}>
                  { business.businessPhone && (
                    <div className={`flex gap-2 items-center justify-center bg-24h-yellow text-black hover:text-24h-yellow hover:bg-black p-2 text-lg`}>
                      <PhoneIcon className={`w-8 h-8`}/>
                      <Link href={`tel:${business.businessPhone}`}>Call Now</Link>
                    </div>
                  )}
                  { business.businessEmail && (
                    <div className={`flex gap-2 items-center justify-center bg-24h-yellow text-black hover:text-24h-yellow hover:bg-black p-2 text-lg`}>
                      <EnvelopeIcon className={`w-8 h-8`}/>
                      <Link href={`mailto:${business.businessEmail}`}>Email</Link>
                    </div>
                  )}
                  { business.businessWebsite && (
                    <div className={`flex gap-2 items-center justify-center bg-24h-yellow text-black hover:text-24h-yellow hover:bg-black p-2 text-lg`}>
                      <GlobeAltIcon className={`w-8 h-8`}/>
                      <Link href={`${business.businessWebsite}`}>Website</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={`col-span-4 py-8 px-4 bg-neutral-100 rounded-r-xl`}></div>
          </div>
        </div>
      </section>
      <section className={`kdev-section-no-margin`}>
        <div className={`flex justify-between bg-neutral-900 px-8 py-4 text-white rounded-xl divide-x-2`}>
          <div className={`font-uk-reg-plates-bold-caps text-xl flex items-center`}>
            Why Choose Us?
          </div>
          <div className={`flex gap-32 pl-4`}>
            <div className={``}>
              <HighestStandardUSP/>
            </div>
            <div className={``}>
              <ReliableServicesUSP/>
            </div>
            <div className={``}>
              <FullyQualifiedUSP/>
            </div>
          </div>
        </div>
      </section>

      <section className={`kdev-section-no-margin text-white font-uk-reg-plates-regular`}>
        <div className={`grid grid-cols-3 gap-2`}>
          <div className={`col-span-1 row-span-1 bg-neutral-700 rounded-xl p-4`}>
            <ReviewBox businessAverageRating={business.businessAverageRating} businessNumberOfReviews={business.businessNumberOfReviews} reviews={business.businessReviews}/>
          </div>
          <div className={`col-span-2 row-span-2 bg-neutral-800 rounded-xl p-4 flex flex-col justify-center`}>
            <RichText
              content={business.businessOverview.raw}
              renderers={{
                h1: ({ children }) => <h1 className="text-4xl text-white font-uk-reg-plates-bold-caps mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl text-white font-uk-reg-plates mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl text-white font-uk-reg-plates mb-3">{children}</h3>,
                h4: ({ children }) => <h4 className="text-xl text-white font-uk-reg-plates mb-3">{children}</h4>,
                h5: ({ children }) => <h5 className="text-lg text-white font-uk-reg-plates mb-3">{children}</h5>,
                p: ({ children }) => <p className="text-base mb-3 font-uk-reg-plates-regular">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-5 mb-3">{children}</ul>,
                li: ({ children }) => <li className="mb-1 p-2">{children}</li>,
                bold: ({ children }) => <strong className="font-bold">{children}</strong>,
                a: ({ children, href, openInNewTab }) => (
                  <Link
                    href={href || "#"}
                    target={openInNewTab ? '_blank' : '_self'}
                    className="text-green-500 hover:underline"
                    rel="noreferrer"
                  >
                    {children}
                  </Link>
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
          </div>
          <div className={`col-span-1 row-span-2 bg-neutral-800/80 rounded-xl`}>
            <div className={`grid gap-2`}>
              <div className={`p-4`}>
                { business.businessOpeningHours.map((day: any) => {
                  return (
                    <div className={`grid grid-cols-2 gap-2 text-lg justify-between`} key={day.day}>
                      <div className={`flex`}>{day.day}</div>
                      <div className={`flex justify-end items-center`}>{day.open} - {day.close}</div>
                    </div>
                  )
                })}
              </div>
              <Image className={`rounded-b-xl`} src={`/businesses/open-247-v1.png`} alt={`we are always open at 24h tyres`} width={500} height={500}/>
            </div>
          </div>
          <div className={`col-span-2 row-span-1 bg-neutral-900/80 rounded-xl p-4`}>
            <div className={`grid gap-4`}>
              <h3 className={`kdev-h3`}>Photos</h3>

              <div className={`relative`}>
                <div>
                  <ArrowLeftCircleIcon onClick={() => handlePreviousImage()} className={`w-16 h-16 absolute top-[40%] -left-5 z-20 hover:text-orange-600 hover:cursor-pointer`}/>
                </div>
                <div className={`grid grid-cols-4 gap-2`}>
                  { business.businessPhotos.slice(visibleImagesStartIndex, visibleImagesEndIndex).map((photo: any, index) => {
                    return (
                      <div key={index} className={``}>
                        <Image onMouseOver={(e) => e.stopPropagation()}
                               className={`w-full h-full rounded-xl shadow-xl select-none`}
                               src={photo.url} alt={photo.url}
                               width={500}
                               height={500}
                               sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )
                  })}
                </div>
                <div>
                  <ArrowRightCircleIcon onClick={() => handleNextImage()} className={`w-16 h-16 absolute top-[40%] -right-5 z-20 hover:text-orange-600 hover:cursor-pointer`}/>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-span-2 row-span-2 bg-neutral-950/80 rounded-xl p-4`}>
            <div className={`grid gap-4`}>
              <h3 className={`kdev-h3`}>Photos</h3>

              <div className={`relative`}>
                <div>
                  <ArrowLeftCircleIcon onClick={() => handlePreviousImage()} className={`w-16 h-16 absolute top-[40%] -left-5 z-20 hover:text-orange-600 hover:cursor-pointer`}/>
                </div>
                <div className={`grid grid-cols-4 gap-2`}>
                  { business.businessPhotos.slice(visibleImagesStartIndex, visibleImagesEndIndex).map((photo: any, index) => {
                    return (
                      <div key={index} className={``}>
                        <Image onMouseOver={(e) => e.stopPropagation()}
                               className={`w-full h-full rounded-xl shadow-xl select-none`}
                               src={photo.url} alt={photo.url}
                               width={500}
                               height={500}
                               sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )
                  })}
                </div>
                <div>
                  <ArrowRightCircleIcon onClick={() => handleNextImage()} className={`w-16 h-16 absolute top-[40%] -right-5 z-20 hover:text-orange-600 hover:cursor-pointer`}/>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-span-1 row-span-1 bg-neutral-950/80 rounded-xl p-4`}>
            <div className={`grid gap-4`}>
              <h3 className={`kdev-h3`}>Photos</h3>

              <div className={`relative`}>
                <div>
                  <ArrowLeftCircleIcon onClick={() => handlePreviousImage()} className={`w-16 h-16 absolute top-[40%] -left-5 z-20 hover:text-orange-600 hover:cursor-pointer`}/>
                </div>
                <div className={`grid grid-cols-4 gap-2`}>
                  { business.businessPhotos.slice(visibleImagesStartIndex, visibleImagesEndIndex).map((photo: any, index) => {
                    return (
                      <div key={index} className={``}>
                        <Image onMouseOver={(e) => e.stopPropagation()}
                               className={`w-full h-full rounded-xl shadow-xl select-none`}
                               src={photo.url} alt={photo.url}
                               width={500}
                               height={500}
                               sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )
                  })}
                </div>
                <div>
                  <ArrowRightCircleIcon onClick={() => handleNextImage()} className={`w-16 h-16 absolute top-[40%] -right-5 z-20 hover:text-orange-600 hover:cursor-pointer`}/>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-span-1 row-span-1 bg-neutral-950/80 rounded-xl p-4`}>
            <div className={`grid gap-4`}>
              <h3 className={`kdev-h3`}>Find us on</h3>

              <div className={`relative`}>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </>
  )
}