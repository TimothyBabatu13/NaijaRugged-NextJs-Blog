"use client"
import React, { useContext } from "react";
import styles from "./Top.module.css";
import RenderCircle from "./RenderCircle"
import { Context } from "../MyLayout";
import { Suspense } from "react";
import BannerSkeleton from "../BannerSkeleton";

const RenderTopComponent = ({children}) => {
    const { value: { topValue }} = useContext(Context);
    const { value: { top } } = useContext(Context);

  return (
    <div>
      <Suspense fallback={<BannerSkeleton />}>

        <div>
            {React.cloneElement(children, {
              number:topValue ? topValue : 0,
              type: top,
              })}  
              {/* {bannerLoading ? <Loader /> : innerHtml[number] } */}
            </div>
      </Suspense>
            <div className={styles.circleContainer} >
                <RenderCircle />
            </div>
        {/* {children} */}
    </div>
  )
}

export default RenderTopComponent