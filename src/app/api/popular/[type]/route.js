import { database } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
const db = database;

export const GET = async (response) => {
    const { pathname } = new URL(response.url);
    const strArr = pathname.split("/");
    
    const neededWord = strArr[strArr.length - 1];
    
    const newData = [];

    const querySnapshot = await getDocs(collection(db, neededWord));

    querySnapshot.forEach((doc) => {
        newData.push({
            banner: doc.data().img,
            title: doc.data().title,
            artistImage: doc.data().img,
            name: doc.data().author,
            id: doc.id,
            category: neededWord,
            time: 3          
        })
    });
    
    return NextResponse.json(newData);
}

/*
{
    "category": "songs",
    "id": "HEMBsoZwbAWq4d0KuYQs",
    "banner": "https://firebasestorage.googleapis.com/v0/b/fir-basics-9aa01.appspot.com/o/Kizz-Daniel-%E2%80%93-Twe-Twe.webp?alt=media&token=04731bda-d9b8-4297-a604-b1cb736c294a",
    "name": "Bella Smurhda",
    "title": "Kizz Daniel – Twe Twe",
    "time": 3
}
*/