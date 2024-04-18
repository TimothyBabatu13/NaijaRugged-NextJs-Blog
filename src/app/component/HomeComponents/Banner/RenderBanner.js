"use-client"
import  { useContext, useEffect, useState } from 'react'
import Loader from '@/app/loading';
import { Context } from '../../MyLayout';
import Banner from './Banner';

const RenderBanner = (props) => {
    const { value } = useContext(Context);

  const [bannerLoading, setBannerLoading] = useState(true);
  const [data, setData] = useState([]);

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
  return (
    <>
        {bannerLoading ? <Loader /> : innerHtml[props.number] }
    </>
  )
}

export default RenderBanner