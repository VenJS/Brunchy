import React from 'react'
import styles from './Card.module.scss'
import { useDispatch } from "react-redux";
import { addOrder } from '../../store';

const Card = ({name, description, price, image}) => {

  const dispatch = useDispatch();
  const finalPrice = price.toString().replace('.5', '.50');

  const handleOrderAdd = () => {
      dispatch(addOrder({name, finalPrice}));
    };

  return (
    <div className={styles.container}>
        <img src={image} alt='' className={styles['food-image']}></img>
        <div className={styles.wrapper}>
            <h3 className={styles['food-title']}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles['price-wrapper']}>
                <span className={styles['dollar-sign']}>$</span>
                <span className={styles.price}>{finalPrice}</span>
            </div>
        </div>
        <img src='/basket.png' alt='' className={styles.basket} onClick={handleOrderAdd}></img>
    </div>
  )
}

export default Card