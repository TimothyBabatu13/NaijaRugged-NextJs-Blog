import PopularSong from "./HomeComponents/Popular";

const getData = async (url) => {
    // "use server"
    const data = await fetch(url, {cache: "no-cache"});
    const result = await data.json();
    console.log(result)
    return result;
  } 
  
const RelatedSongsComponent = async ({ name, id, slug }) => {
  
  const isDev = true;
  const baseURL = isDev  ? "http://localhost:3000" : "https://naija-rugged-next-js-blog-six.vercel.app";
  const data = await getData(`${baseURL}/api/related/${slug}/${id}?query=${name.split(" ")[0]}`);



  return (
    <div>{data?.map((datum, id)=>(
      <PopularSong 
          key={datum.id}
          category={datum.category}
          id={datum.id}
          banner={datum.img}
          name={datum.author}
          title={datum.title}
          time={datum.time}
        />
    ))}</div>
  )
}

export default RelatedSongsComponent