import React from 'react';
import styles from './PlaceOrder.module.scss';

const PlaceOrder = ({onClose}) => {
  return (
    <>
        <div className={styles.container} onClick={onClose}></div>
        <div className={styles.modal}>
            <h2 className={styles.title}>Congratulations!</h2>
            <p className={styles.description}>Your order is on its way.</p>
            <button className={styles.button} onClick={onClose}>OK</button>
        </div>
    </>
    
    
  )
}

export default PlaceOrder;