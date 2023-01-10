import React from 'react';
import styles from './PlaceOrder.module.scss';

const PlaceOrder = ({onClose, sum}) => {
  return (
    <>
        <div className={styles.container} onClick={onClose}></div>
        <div className={styles.modal}>
            <h2 className={styles.title}>{sum > 0 ? 'Congratulations!' : "Cart is empty"}</h2>
            <p className={styles.description}>{sum > 0 ? "Your order is on its way." : "Please select your favourite brunch"}</p>
            <button className={styles.button} onClick={onClose}>OK</button>
        </div>
    </>
    
    
  )
}

export default PlaceOrder;