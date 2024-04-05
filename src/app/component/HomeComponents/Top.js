"use client"
import Banner from "./Banner";
import Circle from "./Circle";
import { useContext, useEffect, useState } from "react";
import styles from "./Top.module.css";
import PopularSong from "./Popular";
import { Context } from "../../page";

const data = [
    {
        "id": "E8QyH2ZibAIkXHCpgTcL",
        "cover": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Bella-Shmurda-%E2%80%93-My-Brother-Tribute-To-Mohbad-Lyrics.webp?alt=media&token=09bbc456-25b5-4da4-a6eb-e4168bf20d96",
        "title": "My Brother (Tribute To Mohbad)",
        "artistImage": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Bella-Shmurda-%E2%80%93-My-Brother-Tribute-To-Mohbad-Lyrics.webp?alt=media&token=09bbc456-25b5-4da4-a6eb-e4168bf20d96",
        "artistName": "Bella Shmurda",
        "timePosted": 3,
        "category": "songs"
      }, {
        "id": "HEMBsoZwbAWq4d0KuYQs",
        "cover": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Kizz-Daniel-%E2%80%93-Twe-Twe.webp?alt=media&token=04731bda-d9b8-4297-a604-b1cb736c294a",
        "title": "Kizz Daniel – Twe Twe",
        "artistImage": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Kizz-Daniel-%E2%80%93-Twe-Twe.webp?alt=media&token=04731bda-d9b8-4297-a604-b1cb736c294a",
        "artistName": "Kizz Daniel",
        "timePosted": 3,
        "category": "songs"
    },{
      "id": "IzECy5FNaOWsL7jostt3",
      "cover": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Fireboy-DML-%E2%80%93-Outside-And-Obaa-Sima.webp?alt=media&token=a324b439-87c0-43db-8ce9-e6ad28edbc8e",
      "title": "Fireboy DML – Obaa Sima",
      "artistImage": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Fireboy-DML-%E2%80%93-Outside-And-Obaa-Sima.webp?alt=media&token=a324b439-87c0-43db-8ce9-e6ad28edbc8e",
      "artistName": "Fireboy",
      "timePosted": 3,
      "category": "songs"
  },{
    "id": "JHZfhgeGuS3Fm99Q9uVJ",
    "cover": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Teni-%E2%80%93-One-Day.webp?alt=media&token=24deefbe-4030-487b-9938-ff65ec3acca4",
    "title": "One day",
    "artistImage": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Teni-%E2%80%93-One-Day.webp?alt=media&token=24deefbe-4030-487b-9938-ff65ec3acca4",
    "artistName": "Teni",
    "timePosted": 3,
    "category": "songs"
}
]

const Top = ()=>{
  const [number, setNumber] = useState(0);

  // const context = useContext(Context);
  // console.log(context)
//   const context = App.createContextHook;
//   const Context = useContext(context);
//   const category = Context.category;
 
//   const Data = Context.realData;
  
//   const DataToDisplay = ()=>{
//     const arr = [];
//     for(let i = 0; i < 6; i++){
//       arr.push(Data[i])
//     }
//     return arr;
//   }
  
    useEffect(()=>{
        const timeId = setTimeout(()=>{
          setNumber(prev =>{
            if(prev === data.length - 1) return 0
            return prev + 1;
          })
          
        }, 5000)
        return ()=>{
          clearTimeout(timeId)
        }
        
      },[number])
      
      const innerHtml = data.map((data)=>{
        // console.log(data)
        return <Banner 
          key={data?.id} 
          id={data?.id} 
          cover={data?.cover} 
          title={data?.title}
          artistImage={data?.artistImage}
          artistName={data?.artistName}
          timePosted={data?.timePosted}
        //   category={category} 
        />
})

      const changeNumber = (e)=>{
        setNumber(parseInt(e.target.id))
      }
      const circle = data.map((item, id)=>(
        <Circle
          key={id}
          id={id}
          changeNumber={changeNumber}
          color={id === number ? 
            "rgba(255, 0, 0, 0.651)" 
            : 
            "rgba(0, 0, 255, 0.555)"} 
        />
      ))

      
    return(
        <main className={styles.container} >
            <div>
              {innerHtml[number]}
            </div>
            <div className={styles.circleContainer} >
                {circle}
            </div>
            <PopularSong 
              category="songs"
              id="r0wlUTJXP0yZHCZyEayj"
              banner="https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Burna-Boy-20-10-20-1.webp?alt=media&token=e7cd8d05-64c8-482d-8b55-bcf66af46c78"
              name="Burna Boy"
              title="20 10 20"
              time="5"
            />
             <PopularSong 
              category="songs"
              id="r0wlUTJXP0yZHCZyEayj"
              banner="https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Burna-Boy-20-10-20-1.webp?alt=media&token=e7cd8d05-64c8-482d-8b55-bcf66af46c78"
              name="Burna Boy"
              title="20 10 20"
              time="5"
            />
             <PopularSong 
              category="songs"
              id="r0wlUTJXP0yZHCZyEayj"
              banner="https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Burna-Boy-20-10-20-1.webp?alt=media&token=e7cd8d05-64c8-482d-8b55-bcf66af46c78"
              name="Burna Boy"
              title="20 10 20"
              time="5"
            />
             <PopularSong 
              category="songs"
              id="r0wlUTJXP0yZHCZyEayj"
              banner="https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Burna-Boy-20-10-20-1.webp?alt=media&token=e7cd8d05-64c8-482d-8b55-bcf66af46c78"
              name="Burna Boy"
              title="20 10 20"
              time="5"
            />
             <PopularSong 
              category="songs"
              id="r0wlUTJXP0yZHCZyEayj"
              banner="https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Burna-Boy-20-10-20-1.webp?alt=media&token=e7cd8d05-64c8-482d-8b55-bcf66af46c78"
              name="Burna Boy"
              title="20 10 20"
              time="5"
            />
             <PopularSong 
              category="songs"
              id="r0wlUTJXP0yZHCZyEayj"
              banner="https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Burna-Boy-20-10-20-1.webp?alt=media&token=e7cd8d05-64c8-482d-8b55-bcf66af46c78"
              name="Burna Boy"
              title="20 10 20"
              time="5"
            />
        </main>
    )
}

export default Top;

// {
//   "category": "songs",
//   "id": "r0wlUTJXP0yZHCZyEayj",
//   "banner": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Burna-Boy-20-10-20-1.webp?alt=media&token=e7cd8d05-64c8-482d-8b55-bcf66af46c78",
//   "name": "Burna Boy",
//   "title": "20 10 20",
//   "time": 5,
//   "darkMode": "dark"
// }