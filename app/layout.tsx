import type React from "react"
import {
  Space_Grotesk as SpaceGrotesk,
  IBM_Plex_Sans as IBMPlexSans,
  IBM_Plex_Mono as IBMPlexMono,
} from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const ibmPlexSans = IBMPlexSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
})

const ibmPlexMono = IBMPlexMono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.zkcero.xyz'),
  title: "ZKET Core Program - Ecuador",
  description: "Building the next generation of ZKP Contributors. From the center of the world.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    url: "https://www.zkcero.xyz/",
    type: "website",
    logo: "/logo.png",
    images: [
      {
        url: "/open-graph.png",
        type: "image/png",
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/open-graph.png",
        type: "image/png",
        width: 1200,
        height: 630,
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} font-sans bg-bg-prim text-bg-light antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
