import type { Metadata } from "next";
import {
  Inter,
  Raleway,
  JetBrains_Mono,
  Hanken_Grotesk,
} from "next/font/google";
import localFont from "next/font/local";

import { ErrorBoundary } from "@/components/layout/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

// Import a local font in your Next JS project

const myFont = localFont({
  src: "../public/assets/fonts/digital_7/digital_7_mono.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-digital-7",
});

export const metadata: Metadata = {
  title: "BlockchainUNN - University of Nigeria Blockchain Community",
  description:
    "Leading blockchain community at the University of Nigeria, empowering students through education, innovation, and real-world blockchain applications.",
  keywords:
    "blockchain, cryptocurrency, UNN, university, Nigeria, community, education, web3",
  authors: [{ name: "BlockchainUNN Team" }],
  // commented out because it was throwing a warning
  // openGraph: {
  //   title: "BlockchainUNN - University of Nigeria Blockchain Community",
  //   description: "Leading blockchain community at the University of Nigeria",
  //   images: ["/images/og-image.png"],
  // },
  metadataBase: new URL("https://blockchainunn.org"),
  openGraph: {
    title: "BlockchainUNN - University of Nigeria Blockchain Community",
    description: "Leading blockchain community at the University of Nigeria",
    url: "https://blockchainunn.org",
    siteName: "BlockchainUNN",
    images: [
      {
        url: "/assets/blockchainunn-green.png", // Updated hero image for better preview
        width: 1200,
        height: 630,
        alt: "BlockchainUNN Hero Image",
      },
      {
        url: "/assets/blockchainunn-green.png", // Large logo (backup or branding image)
        width: 1563,
        height: 1563,
        alt: "BlockchainUNN Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlockchainUNN",
    description: "Leading blockchain community at the University of Nigeria",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${jetbrainsMono.variable} ${hanken.variable} ${myFont.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <ErrorBoundary>
            <div className="min-h-screen">
              <div className="w-full">{children}</div>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
            />
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
