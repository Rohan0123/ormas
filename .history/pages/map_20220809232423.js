import React from 'react'
import styles from "../styles/Home.module.css"

const map = () => {
  return (
    <div className={styles.page_title}><h2 className={styles.page_title}>Map</h2>
    <iframe className='mt-20 ' src="https://www.google.com/maps/vt/data=UKQHWuPKm5J3U2AvapYmEjy7k9G8zeDooBcxG-eq-CEiKqROMNRELMmlanQHhNH7CKoOp51fW4ZeehJkw6xyTGU33CT_uiXqsPGtLmtsoc5Litd-NsbGWXADHG73CBRGi-_0A25l06p64XBt-gjuLE0wJpquAXDe3-Tv5sEOXl7GNVcYADQQCsnP1KiAqGL6N1_AjFu5nBnqjjJXjIP1GqbZD3rZb7bpI9XJHQxXf3VIBZCySK2UYGZCSg" width="1200" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default map