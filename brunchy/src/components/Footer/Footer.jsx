import React, {useState, useEffect} from 'react'
import ReviewList from '../ReviewList/ReviewList';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import styles from './Footer.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { clearOrder } from '../../store';

const Footer = () => {

  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const [totalSum, setTotalSum] = useState(0)

  const handleCloseReviewList = () => {
    setIsOpened(false)
  }

  const handleClosePlaceOrderModal = () => {
    setOrderCreated(false)
    dispatch(clearOrder())
  }

  const handleAddToBasket = () => {
    setIsOpened(true)
  }

  const handleOrderNow = () => {
    setIsOpened(false)
    setOrderCreated(true)
  };

  const orderList = useSelector((state) => {
    return state.orders
})


  useEffect(() => {
    const allPrices = orderList.map((order) =>  order.finalPrice);

    const total = allPrices.reduce((acc, curr) => Number(acc) + Number(curr), 0)
    setTotalSum(total)
  }, [orderList])




  return (
    <div className={styles.container} >
        <img src='/shopping-basket.png' alt='' className={styles.image} onClick={handleAddToBasket}></img>
        <span className={styles.price}>{totalSum}$</span>
        <button className={styles.button} onClick={() => setOrderCreated(true)}>Order Now</button>
        {isOpened ? 
            <ReviewList onClose={handleCloseReviewList} orderNow={handleOrderNow} orderList={orderList} />
          : null}
        {orderCreated ? <PlaceOrder onClose={handleClosePlaceOrderModal} sum={totalSum}/> : null}
    </div>
  )
}

export default Footer