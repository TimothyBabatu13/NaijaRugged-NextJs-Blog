import { NextResponse } from "next/server";
const data = [
    {
        "id": "E8QyH2ZibAIkXHCpgTcL",
        "name": "Bella Smurhda",
        "title": "My Brother (Tribute To Mohbad)",
        "banner": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Bella-Shmurda-%E2%80%93-My-Brother-Tribute-To-Mohbad-Lyrics.webp?alt=media&token=09bbc456-25b5-4da4-a6eb-e4168bf20d96",
        "artistName": "Bella Shmurda",
        "time": 3,
        "category": "songs"
      }, {
        "id": "HEMBsoZwbAWq4d0KuYQs",
        "name": "Bella Smurhda",
        "title": "Kizz Daniel – Twe Twe",
        "banner": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Kizz-Daniel-%E2%80%93-Twe-Twe.webp?alt=media&token=04731bda-d9b8-4297-a604-b1cb736c294a",
        "artistName": "Kizz Daniel",
        "time": 3,
        "category": "songs"
    },{
      "id": "IzECy5FNaOWsL7jostt3",
      "name": "Bella Smurhda",
      "title": "Fireboy DML – Obaa Sima",
      "banner": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Fireboy-DML-%E2%80%93-Outside-And-Obaa-Sima.webp?alt=media&token=a324b439-87c0-43db-8ce9-e6ad28edbc8e",
      "artistName": "Fireboy",
      "time": 3,
      "category": "songs"
  },{
    "id": "JHZfhgeGuS3Fm99Q9uVJ",
    "name": "Bella Smurhda",
    "title": "One day",
    "banner": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Teni-%E2%80%93-One-Day.webp?alt=media&token=24deefbe-4030-487b-9938-ff65ec3acca4",
    "artistName": "Teni",
    "time": 3,
    "category": "songs"
}
]
export const GET = (response) => {
    const {searchParams} = new URL(response.url);
   
    console.log(searchParams)
    return NextResponse.json(data);
}