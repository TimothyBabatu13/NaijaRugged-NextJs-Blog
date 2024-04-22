import { database } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server"
const db = database;

export const GET = async (response)=> {
    
    const { pathname, search } = new URL(response.url);
    
    const urlArr = pathname.split("/");
    const newData = [];
    
    const searchArr = search.split("=");
    
    const searchText = searchArr[1];
    
    
    const [ , , , type, id] = urlArr;

    const querySnapshot = await getDocs(collection(db, type));
    querySnapshot.forEach((doc) => {
        // console.log(doc.data())
        if(doc.data().author.toLowerCase().includes(searchText.toLowerCase()) && doc.id !== id){
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
    return NextResponse.json(newData)
}