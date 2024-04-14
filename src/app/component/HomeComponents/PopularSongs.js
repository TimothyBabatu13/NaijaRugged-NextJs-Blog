import PopularSong from "./Popular";

const fetchData = async () => {

    // const response = await fetch(`/api/popular/${value.top}`);
    const response = await fetch(`/api/popular/songs`)
    if(!response.ok){
        throw new Error("Failed to fetch data");
    }
    const res = await response.json();
    return res
} 

const PopularSongs = async () => {
    const res = await fetchData();
    console.log(res)
  return (
    res?.map(datum =>(
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
  )
}

export default PopularSongs