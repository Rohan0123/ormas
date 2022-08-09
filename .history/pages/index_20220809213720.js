import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ORMAS, Koraput</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Kolab_Logo.jpg" />
        <link rel='stylesheet' href="./styles/main.css"/>
      </Head>

        <div className={styles.banner}>

        <h3 className={styles.title}>
          Welcome to <a href=" " target="_blank">ORMAS</a> Koraput
        <p className={styles.description}>
          Odisha Rural Developement and Marketing Society
        </p>
        </h3>
        
        <div className={styles.slider}>
              <Carousel >
                  <div >
                      <img src="/Tamarind.jpeg" alt="image1"/>
                      <p className="legend">ORMAS Product</p>
  
                  </div>
                  <div>
                      <img src="/Workers.jpeg" alt="image2" />
                      
  
                  </div>
                  <div>
                      <img src="/Worker.JPEG" alt="image3"/>
                      
  
                  </div>
                  <div>
                      <img src="/Kala Jeera Rice.jpeg" alt="image4"/>
                      
  
                  </div>
                  
              </Carousel>
        </div>
      </div>     
        
        <div className={styles.grid} >
          <a href="https://en.wikipedia.org/wiki/Naveen_Patnaik" className={styles.card}  target="blank" id={styles.cm}>
            <div className='text'>
            <h2>Shri Abdaal M. Akhtar, IAS &rarr;</h2>
            <p>Honorable Chief Minister</p>
            </div>
            <div className={styles.profile}>
            <Image src="/CM.jpg" width="100px" height="100px" className={styles.pic}/>
            </div>
            </a>

          <a href="https://en.wikipedia.org/wiki/Pradip_Kumar_Amat" className={styles.card} target="blank">
            <div className='text'>
            <h2>Shri Pradip Kumar Amat, &rarr;</h2>
            <p>Honorable Minister, PR & DW Dept.</p>
            </div>
            <div className={styles.profile}>
            <Image src="/Pradip.jpg" width="100px" height="100px" className={styles.pic}/>
            </div>
          </a>

          <a
            href="https://twitter.com/ormas_odisha/status/1438188931120447495?s=20&t=WAui2ikCFugBBO9h-WFz6Q"
            className={styles.card} target="blank"
          >
            <div className='text'>
            <h2>Shri Ashok K.K. Meena,IAS &rarr;</h2>
            <p>Principal Secretary, PR & DW Dept.</p>
            </div>
            <div className={styles.profile}>
            <Image src="/Ashok.jpg" width="100px" height="100px" className={styles.pic}/>
            </div>
          </a>

          
        </div>

        <main className={styles.main}>
            
        </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="Rohan"
        >
          Powered by {''} 
          <h3>
             Rohan
          </h3>
        </a>
      </footer>
    </div>
  )
}
