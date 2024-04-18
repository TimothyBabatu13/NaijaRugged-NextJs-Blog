
import Link from "next/link";
import Image from "next/image";
import ClientLink from "../ClientLink";
import styles from "./Popular.module.css";

const PopularSong = (props)=>{
    
    return(
        <div className={styles.songListContainer}>
            <ClientLink props={props}>
                <Image className={styles.image} height={90} width={90} src={props.banner} alt="song banner" />
            </ClientLink>
            <div>
               
               <ClientLink props={props} className={styles.songListSecondA}>
                    {props.name} - {props.title}
                </ClientLink>
               <div className={styles.detailsContainer} >
                <div className={styles.timePosted} >
                    <p>&#128345;</p>
                    {props.time}
                </div>
                <div className={styles.noOfVotes}>
                    {props.showIcon ? <p id={props.id} onClick={props.upvote}>&#128077;</p> : <p id={props.id} onClick={props.upvote}>&#128078;</p>}
                    {props.voteCount}
                </div>
               </div>
            </div>
        </div>
    )
}

export default PopularSong;