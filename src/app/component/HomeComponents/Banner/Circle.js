import styles from "./Circle.module.css"
const Circle = (props) => {

  return (
    <div
    className={`${styles.circle}`}
    id={props.id}
    style={{background: props.color}}
    onClick={props.changeNumber} 
    >
</div>
  )
}

export default Circle