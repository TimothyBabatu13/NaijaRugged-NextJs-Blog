import { NextResponse } from "next/server";

// export async function GET(){
//   return NextResponse.json("Hello, world");
// }

export const GET = async ()=> {
  //The logic needed will be sent here.
  //This should handle getting lists of music at backend.
  //Creating one that will handle filtering too will make sense.
  return NextResponse.json({
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
})
}