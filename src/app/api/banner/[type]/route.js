
import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/app/firebaseConfig";
const db = database;


export const GET = async (response) => {

    const { pathname } = new URL(response.url);
    const lastName = pathname.split("/");
    const neededWord = lastName[lastName.length - 1];
    const newData = [];

    const querySnapshot = await getDocs(collection(db, neededWord));

    querySnapshot.forEach((doc) => {
        newData.push({
            cover: doc.data().img,
            title: doc.data().title,
            artistImage: doc.data().img,
            artistName: doc.data().author,
            id: doc.id
        })
    });
    

    console.log(newData)


    return NextResponse.json(newData);
}

