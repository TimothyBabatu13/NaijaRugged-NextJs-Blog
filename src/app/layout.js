
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MyLayout from "./component/MyLayout";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NaijaRugged",
  description: "Home of music",
};

// export const Context = createContext();

export default function RootLayout({ children }) {
  // const [value, setValue] = useState({
  //   top: ""
  // });
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
