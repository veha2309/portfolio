import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AnimationWrapper from "./Components/AnimationWrapper";


const myFont = localFont({
  src: "../fonts/BitcountGridDouble-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf",
  variable: "--font-bitcount",
});
export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.variable} antialiased bg-primary `}
      >
        <AnimationWrapper/>
        <NavBar />
        {children}
        {/* <ChatBotBlob/> */}
        <Footer />
      </body>
    </html>
  );
}
