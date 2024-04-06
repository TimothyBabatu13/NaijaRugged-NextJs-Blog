
import { Inter } from "next/font/google";
import "./globals.css";
import MyLayout from "./component/MyLayout";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NaijaRugged",
  description: "Home of music",
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
