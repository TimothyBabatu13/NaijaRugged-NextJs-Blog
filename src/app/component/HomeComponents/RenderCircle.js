"use client"
import { useContext, useEffect, useState } from "react";
import { Context } from "../MyLayout";
import Circle from "./Banner/Circle";

const RenderCircle = () => {
    const [number, setNumber] = useState(0);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [data, setData] = useState([]);

  const { value, func } = useContext(Context);
  
  // console.log(data)
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

      useEffect(()=>{
        func(prev =>({
          ...prev,
          topValue: number
        }))
      }, [number])
      // func(prev =>({
      //   ...prev,
      //   topNum: number
      // }))
      
      // doThis(number)
      useEffect(()=> {
        const fetchData = async () => {
          const response = await fetch(`/api/banner/${value.top}`);
          // console.log(`/api/banner/${value.top}`)
          const res = await response.json();
          // console.log(res)
          setBannerLoading(false);
          setData(res);
        }
        fetchData()
      }, [value.top])

    

    

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

      
  return (
    <>{circle}</>
  )
}

export default RenderCircle