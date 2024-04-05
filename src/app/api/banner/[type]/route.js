
import { NextResponse } from "next/server"

export const GET = (req, res) => {
    const params = req.query
    console.log("Let's see if this is going to work, innit")
    console.log(params)
    return NextResponse.json("this fucking works");
}