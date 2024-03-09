import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({ 
  subsets: ["cyrillic"],
  weight: ['300', '400', '500', '700'],
  variable: "--foto-roboto"
  
});
const oswald = Oswald({ 
  subsets: ["cyrillic"],
  weight: ['500', '600', '700'],
  variable: '--foto-oswald'
  
});

export const metadata: Metadata = {
  title: "femboy",
  description: "продажа тярпок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable} w-full bg-zinc-950`}>
        <div className="__next">
          <Header />
          <main className="main w-full" id="main">
            <div className="w-full" id="mainPage">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
