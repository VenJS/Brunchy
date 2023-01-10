import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>Brunchy</h1>
        <div className={styles.wrapper}>
            <a href='https://www.dreamshot.bg/' target="__blank"
                rel="noopener noreferrer" className={styles.link}>About</a>
            <a href='https://www.dreamshot.bg/' target="__blank"
                rel="noopener noreferrer" className={styles.link}>Call us</a>
            
            <div className={styles['free_delivery_logo']}>
                <span className={styles['free_delivery']}>Free Delivery</span>
                <img src='/delivery.png' alt='' className={styles.icon}></img>
            </div>
        </div>
    </div>
  )
}

export default Header