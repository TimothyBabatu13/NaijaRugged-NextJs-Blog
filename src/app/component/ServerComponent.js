
async function fetchData() {
    const api = await fetch("https//api.github.com/users/");
        const response = await api.json();
        console.log(response);
        return "hi"
}

const ServerComponent = async () => {
    const re = fetchData()
    console.log(re)
  return (
    <div>
        Data is coming from 
    </div>
  )
}

export default ServerComponent