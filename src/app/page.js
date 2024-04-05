// "use client"
import Image from "next/image";
import styles from "./page.module.css";
import Top from "./component/HomeComponents/Top";
// import { createContext, useState } from 'react';

const data =
{
  "id": "E8QyH2ZibAIkXHCpgTcL",
  "cover": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Bella-Shmurda-%E2%80%93-My-Brother-Tribute-To-Mohbad-Lyrics.webp?alt=media&token=09bbc456-25b5-4da4-a6eb-e4168bf20d96",
  "title": "My Brother (Tribute To Mohbad)",
  "artistImage": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Bella-Shmurda-%E2%80%93-My-Brother-Tribute-To-Mohbad-Lyrics.webp?alt=media&token=09bbc456-25b5-4da4-a6eb-e4168bf20d96",
  "artistName": "Bella Shmurda",
  "timePosted": 3,
  "category": "songs"
}

// export const Context = createContext();

export default function Home() {
  // const [value, setValue] = useState({
  //   top: ""
  // });
  return (
    // <Context.Provider value={{value, func: setValue}}>
    <main className={styles.main}>
        <div className={styles.description}>
          <Top />
        </div>
    </main>
    // </Context.Provider>
  );
}
