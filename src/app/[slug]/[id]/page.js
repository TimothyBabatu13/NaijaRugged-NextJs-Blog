// "use client"

// import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";
import RelatedSongsComponent from "@/app/component/RelatedSongsComponent";

const getData = async (url) => {
  "use server"
  const data = await fetch(url);
  const result = await data.json();
  return result[0];
} 

export async function generateMetadata({params}, parent) {
  const {slug, id} = params;
  const isDev = true;
  const baseURL = isDev  ? "http://localhost:3000" : "https://naija-rugged-next-js-blog-six.vercel.app"
  const data = await getData(`${baseURL}/api/${slug}/${id}`);

  
  return {
    title: `${data?.author}-${data?.title}`,
    description: data?.desc,
    category: "music",
    twitter: {
      card: "summary_large_image",
      title: `${data?.author}-${data?.title} NaijaRugged`,
      description: data?.desc,
      siteId: "",
      creator: "@timothy_akanbii",
      creatorId: "",
      images: [data?.img]
    },
    openGraph: {
      title: `${data?.author}-${data?.title} NaijaRugged`,
      description: data?.desc,
      url: "https://naija-rugged-next-js-blog-six.vercel.app/",
      siteName: "NaijaRugged",
      images: [
        {
          url: data?.img,
          width: 800,
          height: 800
        },
      ],
    },
    locale: "en_US",
    type: "website"
  }
}

const page =  async ({params}) => {

  const {slug, id} = params;

  const isDev = true;
  const baseURL = isDev  ? "http://localhost:3000" : "https://naija-rugged-next-js-blog-six.vercel.app"
  const data = await getData(`${baseURL}/api/${slug}/${id}`);

  // console.log(data)

return (
  <>
    <Suspense fallback={<h1>Hih</h1>}>
        <section className={styles.container}>
          <div>
            <p>{data?.author} - {data?.title}</p>
            <Image style={{"marginTop":"10px", "marginBottom":"10px", width: '100%',height: 'auto', "borderRadius":"10px", "minHeight":"250px !important", width: "100%"}} sizes='100vw' quality={100} height={100} src={data?.img} width={`${100}`} alt={data?.title} priority />
            <h5 style={{"alignContent":"center", "marginBottom":"10px"}}>{data?.desc}</h5>
            <div style={{"display":"flex", "justifyContent":"center"}}>
            <audio controls src={data?.link[0]}></audio>
          </div>
          <Link style={{"display":"flex","justifyContent":"center", "marginTop":"15px"}} download href={data?.link[0]}>Download</Link>
          {/* {RelatedSongs()} */}
          </div>
        </section>
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <RelatedSongsComponent name={data.author} id={id} slug={slug} />
      </Suspense>
    </>  
  )
  
}

export default page