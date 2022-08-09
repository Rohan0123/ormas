import React from 'react'
import styles from "../styles/Home.module.css"

const map = () => {
  return (
    <div className=""><h2 className='justify-center font-serif font-bold text-2xl mt-5'>Map</h2>
    <iframe className='mt-20' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d585064.6243005837!2d82.74936385!3d18.7234271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3af08d96204b59%3A0x17d07ee05092011c!2sKoraput%2C%20Odisha!5e1!3m2!1sen!2sin!4v1660067816604!5m2!1sen!2sin" width="1400" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default map