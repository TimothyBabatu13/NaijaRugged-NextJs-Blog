"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import styles from "./Banner.module.css";
import { Context } from "../../MyLayout";


const Banner = (props) => {

    const [show, setShow] = useState(false);
    
    const { value } = useContext(Context);
    
    const handleOver = ()=> {
        return props?.title?.length >= 30 ? setShow(prev => !prev) : null;
    }
    const handleOut = ()=> handleOver()
    console.log()
  return (
    <section className={styles.bannerSection} style={{"backgroundImage":`url(${props?.cover})`,"width":"100%", "minHeight":"60vh", "position":"relative"}}>
    <div className={styles.glassEffect}>
       <Link className={styles.link} href={`/${value.top}/${props?.id}`}>
           <h3>
               {props?.title?.length >= 30 ? `${props?.title?.slice(0, 25)}...`: props?.title}
               {show && 
                   <div>
                       {props?.title}
                   </div>
               }
           </h3>
       </Link>
       <div className={styles.info}>
           <div>
           <Image 
               // src={props.artistImage}
               src={props?.artistImage} 
               alt="artist Image"
               height={40}
               width={40}
               style={{"marginRight":"10px"}}
           />
               <p className="artist--name">{props?.artistName?.length >= 10 ? `${props?.artistName?.slice(0, 9)}...`: props?.artistName}</p>
           </div>
           <div className="time--posted" style={{"display":"flex", "alignItems":"center"}}>
               <p style={{"marginRight":"10px"}}>&#128345;</p>
               {/* <img  src={clock} alt="time icon" /> */}
               {props?.timePosted}
           </div>
       </div>
    </div>
</section>
  )
}

export default Banner