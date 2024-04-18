"use client"
import styles from "./Top.module.css";
import RenderBanner from "./Banner/RenderBanner";
import RenderPopular from "./RenderPopular";
import RenderTopComponent from "./RenderTopComponent";


const Top = ()=>{

    return(
        <main className={styles.container} >
            <div>
              <RenderTopComponent>
                <RenderBanner />
              </RenderTopComponent>
            </div>
            <RenderPopular />
        </main>
    )
}

export default Top;
