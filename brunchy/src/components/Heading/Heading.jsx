import React from 'react'
import styles from './Heading.module.scss'

const Heading = () => {
  return (
    <div className={styles.container}>
      <div className={styles['title-wrapper']}>
        <h1 className={styles.title}>The fastest brunch delivery in <span className={styles['secondary_title']}>Your city</span></h1>
      </div>
      <p className={styles.description}>This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How about you ?</p>
    </div>
  )
}

export default Heading