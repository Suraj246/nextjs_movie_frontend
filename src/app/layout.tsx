import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./redux/ReduxProvider";
import Navbar from "./components/navbar/Navbar";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark Movies"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // baseColor = 'rgb(51 65 85)'
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <SkeletonTheme baseColor='rgb(51 65 85)' highlightColor="#444">
            <Navbar />
            {children}
          </SkeletonTheme>
        </ReduxProvider>

      </body>
    </html>
  );
}
