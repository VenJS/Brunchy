import React from 'react'
import styles from './Card.module.scss'

const Card = () => {
  return (
    <div className={styles.container}>
        <img src='/1.png' alt='' className={styles['food-image']}></img>
        <div className={styles.wrapper}>
            <h3 className={styles['food-title']}>Butter Pancakes</h3>
            <p className={styles.description}>With honey</p>
            <div className={styles['price-wrapper']}>
                <span className={styles['dollar-sign']}>$</span>
                <span className={styles.price}>14.50</span>
            </div>
        </div>
        <img src='/basket.png' alt='' className={styles.basket}></img>
    </div>
  )
}

export default Card