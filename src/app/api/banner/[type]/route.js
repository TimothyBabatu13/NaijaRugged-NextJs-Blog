
import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/app/firebaseConfig";
const db = database;


export const GET = async (response) => {

    const { pathname } = new URL(response.url);
    const lastName = pathname.split("/");
    const neededWord = lastName[lastName.length - 1];
    const newData = [];
    const dataToReturn = [];
    const querySnapshot = await getDocs(collection(db, neededWord));

    querySnapshot.forEach((doc, id) => {
        // if(id < 6){
            newData.push({
            cover: doc.data().img,
            title: doc.data().title,
            artistImage: doc.data().img,
            artistName: doc.data().author,
            id: doc.id
        })
        // }
    });

    for(let i = 0; i < newData.length; i++){
        if(i > 5) break;
        dataToReturn.push(newData[i]);
    }
    

    return NextResponse.json(dataToReturn);
}

