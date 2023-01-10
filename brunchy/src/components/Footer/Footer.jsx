import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
        <img src='/shopping-basket.png' alt='' className={styles.image}></img>
        <span className={styles.price}>0.00$</span>
        <button className={styles.button}>Order Now</button>
    </div>
  )
}

export default Footer