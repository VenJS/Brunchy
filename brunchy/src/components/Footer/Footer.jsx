import React, {useState} from 'react'
import ReviewList from '../ReviewList/ReviewList';
import styles from './Footer.module.scss'

const Footer = () => {

  const [isOpened, setIsOpened] = useState(false);
  console.log(isOpened)

  return (
    <div className={styles.container} >
        <img src='/shopping-basket.png' alt='' className={styles.image}></img>
        <span className={styles.price}>0.00$</span>
        <button className={styles.button} onClick={() => setIsOpened(true)}>Order Now</button>
        {isOpened ? <div onClick={() => setIsOpened(false)}><ReviewList/></div> : null}
    </div>
  )
}

export default Footer