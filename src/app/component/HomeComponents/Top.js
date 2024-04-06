"use client"
import Banner from "./Banner";
import Circle from "./Circle";
import { useContext, useEffect, useState } from "react";
import styles from "./Top.module.css";
import PopularSong from "./Popular";
import { Context } from "../MyLayout";
import Loader from "@/app/loading";

const Top = ()=>{
  const [number, setNumber] = useState(0);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [popularLoading, setPopularLoading] = useState(true);
  const [data, setData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const { value } = useContext(Context);

    console.log(data)
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
      
      useEffect(()=> {
        const fetchData = async () => {
          const response = await fetch(`/api/banner/${value.top}`);
          // console.log(`/api/banner/${value.top}`)
          const res = await response.json();
          console.log(res)
          setBannerLoading(false);
          setData(res);
        }
        fetchData()
      }, [value.top])

      useEffect(()=> {
        const fetchData = async () => {
          const response = await fetch(`/api/popular/${value.top}`);
          const res = await response.json();
          setPopularLoading(false);
          setPopularData(res);
        }
        fetchData()
      }, [value.top])


      const innerHtml = data?.map((data)=>{
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
              {bannerLoading ? <Loader /> : innerHtml[number] }
            </div>
            <div className={styles.circleContainer} >
                {circle}
            </div>
            {
              popularLoading ? <Loader /> :
              popularData.map(datum =>(
                <PopularSong 
                  key={datum.id}
                  category={datum.category}
                  id={datum.id}
                  banner={datum.banner}
                  name={datum.name}
                  title={datum.title}
                  time={datum.time}
                />
              ))
            }
            
        </main>
    )
}

export default Top;
