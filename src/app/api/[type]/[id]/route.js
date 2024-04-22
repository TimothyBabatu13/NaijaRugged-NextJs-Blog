import { database } from "@/app/firebaseConfig";
import { collection, getDocs, where } from "firebase/firestore";
const db = database
import { NextResponse } from "next/server";
export const GET = async ( response ) => {
    console.log(response)
    const { pathname } = new URL(response.url);
    const urlArr = pathname.split("/");
    console.log(urlArr)
    const newData = []
    const [str, ap , type, id ] = urlArr;

    console.log(type, id)
    const querySnapshot = await getDocs(collection(db, type));
    querySnapshot.forEach((doc) => {
        console.log(doc.data())
        if(doc.id === id){
            newData.push({
                    img: doc.data().img,
                    title: doc.data().title,
                    desc: doc.data().desc,
                    link: doc.data().link,
                    author: doc.data().author,
                    id: doc.id
                })
                // return;
        }
    });

    console.log(newData)
    return NextResponse.json(newData);
}

/* 

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
*/