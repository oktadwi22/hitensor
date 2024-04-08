import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/component/navbar/Navbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitensor",
  description: "Hitensor ",
  icons: '/long_logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="w-full flex justify-center items-center">
            <Navbar />
          </div>
          {children}
        </Providers>
      </body>
    </html >
  );
}
