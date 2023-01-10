import React from 'react'
import styles from './Heading.module.scss'

const Heading = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The fastest brunch delivery in </h1>
        <h1 className={styles['secondary_title']}>Your city</h1>
        <p className={styles.description}>This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How about you ?</p>
    </div>
  )
}

export default Heading