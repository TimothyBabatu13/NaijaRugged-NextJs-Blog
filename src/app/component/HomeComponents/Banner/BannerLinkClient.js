"use client"
import Link from "next/link"
import styles from "./Banner.module.css";
import { useContext } from "react";
import { Context } from "../../MyLayout";

const BannerLinkClient = ({props, children }) => {
    const { value } = useContext(Context);
  return (
    <Link className={styles.link} href={`/${value.top}/${props?.id}`}>
        {children}
    </Link>
  )
}

export default BannerLinkClient