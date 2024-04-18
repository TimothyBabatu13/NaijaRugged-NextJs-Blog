"use client"
import React, { useContext } from "react";
import styles from "./Top.module.css";
import RenderCircle from "./RenderCircle"
import { Context } from "../MyLayout";

const RenderTopComponent = ({children}) => {
    const { value: { topValue }} = useContext(Context);
    const { value: { top } } = useContext(Context);

  return (
    <div>
        <div>
            {React.cloneElement(children, {
              number:topValue ? topValue : 0,
              type: top,
              })}  
              {/* {bannerLoading ? <Loader /> : innerHtml[number] } */}
            </div>
            <div className={styles.circleContainer} >
                <RenderCircle />
            </div>
        {/* {children} */}
    </div>
  )
}

export default RenderTopComponent