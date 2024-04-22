import { Context } from "../../MyLayout";
import Banner from "./Banner";
import Circle from "./Circle";
import { useState, useEffect, useContext } from "react";
import Loader from "@/app/loading";
import styles from "./BannerPage.module.css"


const BannerPage = () => {
     const [number, setNumber] = useState(0);
  const [bannerLoading, setBannerLoading] = useState(true);
   const [data, setData] = useState([]);

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
      console.log("Data coming")
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

      console.log(bannerLoading)
  return (
    <>
    <div>
              {bannerLoading ? <Loader /> : innerHtml[number] }
            </div>
            <div className={styles.circleContainer} >
              Huh
                {circle}
            </div>
    </>
  )
}

export default BannerPage