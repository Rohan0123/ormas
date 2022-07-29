import React from 'react'
import styles from "../styles/Home.module.css";

const products = () => {
  return (
    <div className={styles.menu}><h2>Our Products</h2>
    <div className={styles.product}>
    <h3>
      Description &rarr;
    </h3>
    <h3>
      Image
    </h3>
    </div>
    </div>
  )
}

export default products