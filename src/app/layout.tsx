import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '24h Tyres - Transform Your Ride with Top-Brand Tyres Anytime!',
  description: '24h Tyres is your tyre lifesaver, always a call away. We provide round-the-clock quality service to keep your vehicle running smoothly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
        <Head>
            <title>24h Tyres</title>
        </Head>
        <body className={inter.className}>{children}</body>
        <Analytics />
    </html>
  )
}
