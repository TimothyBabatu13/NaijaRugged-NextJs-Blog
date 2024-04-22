"use client";
import { useContext, useEffect, useState } from "react";
import { Context } from "../MyLayout";
import PopularSong from "./Popular";
// import Loader from "@/app/loading";
import PopularSkeleton from "../PopularSkeleton";


const RenderPopular = () => {
    const { value } = useContext(Context);
    const [popularData, setPopularData] = useState([]);
    const [popularLoading, setPopularLoading] = useState(true);

    useEffect(()=> {
        const fetchData = async () => {
          const response = await fetch(`/api/popular/${value.top}`);
          const res = await response.json();
          setPopularLoading(false);
          setPopularData(res);
        }
        fetchData()
      }, [value.top])
  return (
    <div>{
        popularLoading ? <PopularSkeleton /> :
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
      </div>
  )
}

export default RenderPopular