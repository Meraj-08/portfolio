import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/ScrollAnimations"
import GradualBlur from "@/components/GradualBlur"

const hkGrotesk = Hanken_Grotesk({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-hk-grotesk',
  display: 'swap',
})


const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  // TODO: change to your real domain once deployed.
  metadataBase: new URL('https://md-meraj-alam.vercel.app'),
  title: 'Md Meraj Alam',
  description: 'Software engineer building scalable systems, cloud infrastructure, and full-stack apps. SDE Intern @ Amazon.',
  icons: {
    icon: '/pfp.jpg',
  },
  openGraph: {
    url: 'https://md-meraj-alam.vercel.app/',
    siteName: 'Md Meraj Alam — Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 662,
      alt: 'Md Meraj Alam - Portfolio'
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        <link rel="icon" href="/pfp.jpg" />
      </head>
      <body className={`${hkGrotesk.className} ${instrumentSerif.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            {children}
          </div>
          <GradualBlur 
            position="bottom" 
            height="5rem" 
            target="page" 
            zIndex={1}
            strength={2}
            divCount={5}
          />
          <ScrollToTop />
        </ThemeProvider>
        {/* TODO: add your own analytics ids before deploying. */}
      </body>
    </html>
  );
}
