import styles from '../components/Item.module.css'
const Items = (props) => {

  return (
    <div>
      <li key={props.foodItem} className={`${styles["vk-item"]} `}>
        <span className={styles['vk-span']}>{props.foodItem}</span>
      </li>
    </div>
  )
}

export default Items