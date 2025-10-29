import type { Metadata } from "next";
import {Roboto_Flex } from "next/font/google";
import "./globals.css";



const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Dev Connect",
  description: "This is the home page of the website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${robotoFlex.variable} antialiased`}
      >
        
          <main className=''>
            
             {children}
          </main>
        
      </body>
    </html>
  );
}
