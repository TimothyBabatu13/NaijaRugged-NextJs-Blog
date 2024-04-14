import Link from "next/link";

const Test = ({id}) => {
  return (
    <div>
        This is to test
        <Link href={`/test/${id}`}>Link{id}</Link>
        
    </div>
  )
}

export default Test