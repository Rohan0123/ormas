import React from 'react'
import styles from "../styles/Home.module.css";
import Link from "next/link"
import Image from 'next/image';

const products = () => {
  return (
    <div className={styles.menu}><h2>Our Products</h2>
      <div className={styles.product}>
      <div id='Kala Jeera Rice'>
        <section id="Kala Jeera" className="text-gray-600 bg-white body-font">
          <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <Image className="object-cover object-center rounded" alt="hero" src="/Kala Jeera Rice.jpeg" width="350px" height="500px" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Kala Jeera Rice
              </h1>
              <p className="mb-8 leading-relaxed">Kala Jeera Rice also known as Baby Basmati Rice is a miniature version of the famous Basmati Rice. Althoughit is mostly grown in the Sub Himalayan Rigion, the Koraput climate and conditions provide a  similar environment for this crop to grow. It is ideal for preparing desserts, as a daily staple or as a substitute for sticky rice used un SE Asian cooking.</p>
              <div className="flex justify-center">
                <Link href="/Rice">
                <button className="inline-flex text-black bg-orange-200 border-0 py-2 px-6 focus:outline-none hover:bg-orange-100 rounded text-lg">More Details</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
          </div>
        
          <div id='Turmeric'>
        <section className="text-gray-600 bg-white body-font my-0.5">
          <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Turmeric
              </h1>
              <p className="mb-8 leading-relaxed">Turmeric is the base of every India dish for ots rich colour and flavour. It also has known antiseptic and antibacterial properties. Koraput's fistinct soil and topography suport high-end turmeric rhizomes richin curcumin that gives it a vibrant hue. The best cultivars of turmeric have been preserved and passed down through tribal lore for centuries in this corner of Odisha. Farmer's Collective supported by ORMAS brings home this authentic and organic produce of the Eastern Ghats to your homes.</p>
              <div className="flex justify-center">
                <Link href="Turmeric">
                <button className="inline-flex text-black  bg-orange-200 border-0 py-2 px-6 focus:outline-none hover:bg-orange-100 rounded text-lg">More Details</button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" alt="hero" src="/Turmeric.jpg" height="500px" width="350px"/>
            </div>
          </div> 
        </section>
          </div> 
        

      </div>
    </div>
  )
}

export default products