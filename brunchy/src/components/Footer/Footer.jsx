import React, {useState} from 'react'
import ReviewList from '../ReviewList/ReviewList';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import styles from './Footer.module.scss'

const Footer = () => {

  const [isOpened, setIsOpened] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

  const handleCloseReviewList = () => {
    setIsOpened(false)
  }

  const handleClosePlaceOrderModal = () => {
    setOrderCreated(false)
  }

  return (
    <div className={styles.container} >
        <img src='/shopping-basket.png' alt='' className={styles.image} onClick={() => setIsOpened(true)}></img>
        <span className={styles.price}>0.00$</span>
        <button className={styles.button} onClick={() => setOrderCreated(true)}>Order Now</button>
        {isOpened ? <ReviewList onClose={handleCloseReviewList}/> : null}
        {orderCreated ? <PlaceOrder onClose={handleClosePlaceOrderModal}/> : null}
    </div>
  )
}

export default Footer