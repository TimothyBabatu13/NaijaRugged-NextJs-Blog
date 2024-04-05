"use client"
import { createContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Context = createContext();

const MyLayout = ({children}) => {
    const [value, setValue] = useState({
        top: "songs"
      });
  return (
    <Context.Provider value={{value, func: setValue}}>
        <Header/>
        {children}
        <Footer />
    </Context.Provider>
  )
}

export default MyLayout