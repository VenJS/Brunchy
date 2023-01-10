import React from 'react'
import styles from './Card.module.scss'

const Card = ({name, description, price, image}) => {
  return (
    <div className={styles.container}>
        <img src={image} alt='' className={styles['food-image']}></img>
        <div className={styles.wrapper}>
            <h3 className={styles['food-title']}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles['price-wrapper']}>
                <span className={styles['dollar-sign']}>$</span>
                <span className={styles.price}>{price}</span>
            </div>
        </div>
        <img src='/basket.png' alt='' className={styles.basket}></img>
    </div>
  )
}

export default Card