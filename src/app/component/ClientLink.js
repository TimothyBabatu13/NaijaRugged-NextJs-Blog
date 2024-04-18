"use client";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "./MyLayout";

const ClientLink = ({props, children, className}) => {
    const { value } = useContext(Context);
    return (
        <Link className={className} href={`/${value.top}/${props.id}`}>
           {children}
        </Link>
  )
}

export default ClientLink