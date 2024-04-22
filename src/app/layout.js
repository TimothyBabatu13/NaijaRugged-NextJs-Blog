
import { Inter } from "next/font/google";
import "./globals.css";
import MyLayout from "./component/MyLayout";
import NaijaRugged from "../../public/logo.png";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NaijaRugged",
  description: "Home of music",
  twitter: {
    card: "summary_large_image",
    title: "NaijaRugged",
    description: "Home of music",
    siteId: "",
    creator: "@timothy_akanbii",
    creatorId: "",
    images: [NaijaRugged.src]
  },
  openGraph: {
    title: "NaijaRugged",
    description: "Home of music",
    url: "https://naija-rugged-next-js-blog-six.vercel.app/",
    siteName: "NaijaRugged",
    images: [
      {
        url: NaijaRugged.src,
        width: 800,
        height: 800
      },
    ],
  },
  locale: "en_US",
  type: "website"
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyLayout>
          {children}
        </MyLayout>
      </body>
    </html>
  );
}
