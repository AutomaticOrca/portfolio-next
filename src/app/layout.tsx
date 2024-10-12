import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

import CustomizedNav from "./LayoutComponents/CustomizedNav";
import Footer from "./LayoutComponents/Footer";
import SidebarLeft from "./LayoutComponents/SidebarLeft";
import SidebarRight from "./LayoutComponents/SidebarRight";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <CustomizedNav />
          <SidebarLeft />
          <SidebarRight />
          <div className="min-h-screen grid p-4 ml-[150px] mr-[150px]">
            <main className="px-5 py-2">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
