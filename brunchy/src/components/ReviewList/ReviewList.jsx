import React from 'react'
import styles from './ReviewList.module.scss'

const ReviewList = () => {

  return (
    <div className={styles.container}>
        <div className={styles.modal}>
            <div className={styles.products}>
                <div className={styles['content-wrapper']}>
                    <h3 className={styles.title}>Butter Panckake</h3>
                    <div className={styles['price-wrapper']}>
                        <span className={styles['dollar-sign']}>$</span>
                        <span className={styles.price}>14.50</span>
                    </div>
                </div>
                <div className={styles['content-wrapper']}>
                    <h3 className={styles.title}>Butter Panckake</h3>
                    <div className={styles['price-wrapper']}>
                        <span className={styles['dollar-sign']}>$</span>
                        <span className={styles.price}>14.50</span>
                    </div>
                </div>
                <div className={styles['content-wrapper']}>
                    <h3 className={styles.title}>Butter Panckake</h3>
                    <div className={styles['price-wrapper']}>
                        <span className={styles['dollar-sign']}>$</span>
                        <span className={styles.price}>14.50</span>
                    </div>
                </div>
            
                <div className={styles.total}>
                    <h3 className={styles.title}>Total</h3>
                    <div className={styles['price-wrapper']}>
                        <span className={styles['dollar-sign']}>$</span>
                        <span className={styles.price}>14.50</span>
                    </div>
                </div>
            </div>
            <div className={styles.basket} >
        <img src='/shopping-basket.png' alt='' className={styles.image}></img>
        <span className={styles['basket-price']}>0.00$</span>
        <button className={styles.button} >Order Now</button>
    </div>
        </div>
    </div>
  )
}

export default ReviewList;