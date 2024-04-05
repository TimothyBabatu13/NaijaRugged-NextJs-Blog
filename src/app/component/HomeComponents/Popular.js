import Link from "next/link";
import Image from "next/image";
import styles from "./Popular.module.css";
const PopularSong = (props)=>{
    // console.log(props)
    // console.log(props)
    return(
        <div className={styles.songListContainer}>
            <Link onClick={props.handleNavigate} href={`/song/${props.id}`}><Image className={styles.image} height={90} width={90} src={props.banner} alt="song banner" /></Link>
            <div>
               
               <Link className={styles.songListSecondA} href={`/song/${props.id}`}>{props.name} - {props.title}</Link>
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