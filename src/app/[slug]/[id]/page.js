"use client"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const getData = async (url) => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
} 

const data = 
  {
    "img": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Bella-Shmurda-%E2%80%93-My-Brother-Tribute-To-Mohbad-Lyrics.webp?alt=media&token=09bbc456-25b5-4da4-a6eb-e4168bf20d96",
    "title": "My Brother (Tribute To Mohbad)",
    "voteNum": 1000,
    "timePosted": 3,
    "typeof": "songs",
    "desc": "Bella Shmurda, a multidimensional and diverse <h1 style='background: red'>\this is to test hello</h1> Nigerian recording artist and composer, debuts a brand-new, remarkable, hit tribute song named “My Brother (Tribute To Mohbad Imole).”\nHowever, this musical work serves as a follow-up to his previously released extended play, which included six tracks and was dubbed “DND EP.”\n\nIn the end, this unique composition is a blockbuster that you should add to your playlist if you enjoy decent music.\<p>Ths</a>",
    "link": [
        "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Bella%20Shmurda%20-%20My%20Brother.mp3?alt=media&token=227791f0-da45-4e3b-8ca1-04ee597ba895"
    ],
    "author": "Bella Shmurda"
}


const page =  () => {
  const {slug, id} = useParams();
  const ref = useRef(null);
  // const [data, setData] = useState(null);
  
  useEffect(()=> {
    ref.current.innerHTML = data?.desc;
    return;
  },[])

  useEffect(()=>{

    fetch("/api/banner/d?query=song")
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
  },[])
  
  return (
    <section>
      <div>
        <p>{data?.author} - {data?.title}</p>
        <Image style={{"marginTop":"10px", "marginBottom":"10px", width: '100%',height: 'auto', "borderRadius":"10px", "minHeight":"250px !important", width: "100%"}} sizes='100vw' quality={100} height={100} src={data?.img} width={`${100}`} alt={data?.title} priority />
        <h5 ref={ref} style={{"alignContent":"center", "marginBottom":"10px"}}>{data?.desc}</h5>
        <div style={{"display":"flex", "justifyContent":"center"}}>
        <audio controls src={data?.link[0]}></audio>
      </div>
      <Link style={{"display":"flex","justifyContent":"center", "marginTop":"15px"}} download href={data?.link[0]}>Download</Link>
      {/* {RelatedSongs()} */}
      </div>
    </section>
  )
}

export default page