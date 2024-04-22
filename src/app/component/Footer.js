import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();

  return (
    <footer className={styles.footer}>
        &copy; {date.getFullYear()}
    </footer>
  )
}

export default Footer