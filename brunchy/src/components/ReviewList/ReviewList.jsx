import React from 'react'
import styles from './ReviewList.module.scss'
import { useState, useEffect } from 'react';

const ReviewList = ({onClose, orderNow, orderList = []}) => {
    const [totalSum, setTotalSum] = useState(0)
   
    useEffect(() => {
        const allPrices = orderList.map((order) =>  order.finalPrice);
    
        const total = allPrices.reduce((acc, curr) => Number(acc) + Number(curr), 0)
        setTotalSum(total)
      }, [orderList])


    

  return (
    <>
        <div className={styles.container} onClick={onClose}></div>
        <div className={styles.modal}>
            <div className={styles.products}>
                
                    {orderList.map((order,idx) => {
                        return (
                            <div className={styles['content-wrapper']} key={idx}>
                                <h3 className={styles.title}>{order.name}</h3>
                                <div className={styles['price-wrapper']}>
                                    <span className={styles['dollar-sign']}>$</span>
                                    <span className={styles.price}>{order.finalPrice}</span>
                                </div>
                            </div>
                        )
                    })}
                    
                <div className={styles.total}>
                    <h3 className={styles.title}>Total</h3>
                    <div className={styles['price-wrapper']}>
                        <span className={styles['dollar-sign']}>$</span>
                        <span className={styles.price}>{totalSum}</span>
                    </div>
                </div>
            </div>
            <div className={styles.basket} >
                <img src='/shopping-basket.png' alt='' className={styles.image}></img>
                <span className={styles['basket-price']}>{totalSum}$</span>
                <button className={styles.button} onClick={orderNow}>Order Now</button>
            </div>
        </div>
    </>
  )
}

export default ReviewList;