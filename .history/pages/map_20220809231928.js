import React from 'react'
import styles from "../styles/Home.module.css"

const map = () => {
  return (
    <div class={styles.page_title}>map
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483668.9518776355!2d82.46917644283504!3d18.72386921337443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3af08d96204b59%3A0x17d07ee05092011c!2sKoraput%2C%20Odisha!5e0!3m2!1sen!2sin!4v1660067306842!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default map