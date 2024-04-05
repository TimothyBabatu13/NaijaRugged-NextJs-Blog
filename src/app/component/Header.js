"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import styles from "./Header.module.css";
import { useState, useRef, useEffect, useContext } from "react";
import { Context } from "./MyLayout";


const tabs = [
    "Albums", "Songs", "Mixtapes", "Videos"
]


const Header = () => {
    
    const context = useContext(Context);
    const { func, value } = context;
    console.log(value)
    
    const [text, setText] = useState("");
    const [tab, setTab] = useState(tabs[0]);
    const [mode, setMode] = useState();
    const ref = useRef(null);
    
    
    const handleChangeTab = (value) => {
        setTab(value);
        func(prev =>({
            ...prev,
            top: value.toLowerCase()
        }))
    }
    // console.log(mode)
    const handleChange = (e)=>{
        setText(e.target.value)
    }    
    const handleSubmit = ()=>{
        if(!text) return
        props.sendTextUp(text);
        setText("");
    }

    const navigateAndHandleProps = (e)=>{
        Context.handleChangeType(e)
        if(window.location.href.match("/dashboard")?.index) return;
        // navigate("/")
    }

    //handle onFocus for the input box whenever users click on floating search Icon
    const handleFocus = () =>{
        const input = ref.current;
        input?.focus()
    }
    handleFocus();

   
    const handleChangeMode = () => {
        setMode(prev => !prev)
    }

    useEffect(()=>{
        return window.localStorage.setItem("darkMode", JSON.stringify(mode))
      }, [mode])

      //JSON.parse(window.localStorage.getItem("darkMode")) || ((window.matchMedia("(prefers-color-scheme: dark)").matches

  return (
    <>
        <header className={styles.header} >
                <Link href="/"><Image className="header--logo" priority src={logo} alt="logo"/></Link>
                <div onClick={handleChangeMode}  style={{"cursor":"pointer", "display":"flex", "alignItems":"center"}}>
                     <p style={{"fontSize":"23px"}}>&#9788;</p>
                    <p style={{"fontSize":"23px", "transform":"rotate(90deg)", "color":"white"}}>&#127769;</p>  
                </div>
            
            </header>
            <div className={styles.input}>
                {/* <div style={{"display":props.display ? "block" : "none", "position":"relative", "marginBottom":"10px"}}> */}
                <input 
                    type="search" 
                    name="" 
                    id="iii" 
                    onChange={handleChange}
                    value={text}
                    ref={ref}
                />
                <img 
                    // onClick={handleSubmit} 
                    // style={{position:"absolute", "right":"10px", "top":"5px", "cursor":"pointer"}} 
                    // src={searchIcon} 
                    // alt="searchIcon" 
                />
            </div>
            <div className={styles.headerBtn} >
            {/* className="header--btn--container" */}
            {
                tabs.map((item, id)=> (
                <button 
                    key={id}
                    className={item == tab ? styles.activeButton : null}
                    onClick={()=>handleChangeTab(item)}
                >
                    {item}
                </button>
                ))
            }
            </div>
    </>
  )
}

export default Header