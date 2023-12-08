import Head from "next/head";

export interface CustomMetadata {
  title: string,
  description: string,
  url: string,
  imageUrl: string,
  canonical: string,
  keywords?: string,
}

export interface SeoMetadataProps {
  metadata: CustomMetadata
}

export default function SeoMetadata({metadata}: SeoMetadataProps) {
  const { title, description, url, imageUrl, canonical, keywords } = metadata
  return (
      <Head>
          <title>{title ? title : "24h Tyres - All Tyre Services for Your Vehicle"}</title>
          <meta name="description" content={description ? description : "Experience 24/7, reliable tyre services at your doorstep. Choose 24h Tyres for convenient tyre solutions across the UK."} />
          {keywords && (
            <meta name="keywords" content={keywords}/>
          )}

          <meta itemProp="name" content={title ? title : "24h Tyres - All Tyre Services for Your Vehicle"}/>
          <meta itemProp="description" content={description ? description : "Experience 24/7, reliable tyre services at your doorstep. Choose 24h Tyres for convenient tyre solutions across the UK."}/>
          <meta itemProp="image" content={imageUrl ? imageUrl : "https://24h-tyres.co.uk/_next/image?url=%2F24h-tyres-logo.png&w=640&q=75"}/>

          <meta property="twitter:title" content={title ? title : "24h Tyres - All Tyre Services for Your Vehicle"}/>
          <meta property="twitter:description" content={description ? description : "Experience 24/7, reliable tyre services at your doorstep. Choose 24h Tyres for convenient tyre solutions across the UK."}/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:image" content={imageUrl ? imageUrl : "https://24h-tyres.co.uk/_next/image?url=%2F24h-tyres-logo.png&w=640&q=75"}/>

          <meta property="og:title" content={title ? title : "24h Tyres - All Tyre Services for Your Vehicle"}/>
          <meta property="og:description" content={description ? description : "Experience 24/7, reliable tyre services at your doorstep. Choose 24h Tyres for convenient tyre solutions across the UK."}/>
          <meta property="og:site_name" content="24h Tyres"/>
          <meta property="og:url" content={url ? url : "https://24h-tyres.co.uk/"}/>
          <meta property="og:type" content="website"/>
          <meta property="og:image" content={imageUrl ? imageUrl : "https://24h-tyres.co.uk/_next/image?url=%2F24h-tyres-logo.png&w=640&q=75"}/>
          <link rel="canonical" href={canonical ? canonical : "https://24h-tyres.co.uk/"} />
      </Head>
  )
}


