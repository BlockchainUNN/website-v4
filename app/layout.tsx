import type { Metadata } from "next";
import { Inter, Raleway, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "BlockchainUNN - University of Nigeria Blockchain Community",
  description:
    "Leading blockchain community at the University of Nigeria, empowering students through education, innovation, and real-world blockchain applications.",
  keywords:
    "blockchain, cryptocurrency, UNN, university, Nigeria, community, education, web3",
  authors: [{ name: "BlockchainUNN Team" }],
  openGraph: {
    title: "BlockchainUNN - University of Nigeria Blockchain Community",
    description: "Leading blockchain community at the University of Nigeria",
    images: ["/images/og-image.png"],
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
    <html lang="en" className={`${raleway.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <ErrorBoundary>
            <div className="flex flex-col items-center min-h-screen">
              <div className="w-full max-w-screen-2xl">{children}</div>
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
