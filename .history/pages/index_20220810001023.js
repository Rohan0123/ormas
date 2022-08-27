import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <div class={styles.container}>
      <Head>
        <title>ORMAS, Koraput</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Kolab_Logo.jpg" />
        <link rel='stylesheet' href="./styles/main.css"/>
      </Head>

        <div class={styles.banner}>

        <h3 class={styles.title}>
          Welcome to <a href=" " target="_blank">ORMAS</a> Koraput
        <p class={styles.description}>
          Odisha Rural Developement and Marketing Society
        </p>
        </h3>
        
        <div class={styles.slider}>
              <Carousel >
                  <div >
                      <img src="/Tamarind.jpeg" alt="image1"/>
                      <p class="legend">ORMAS Product</p>
  
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
        
      <div class='flex flex-row justify-center' id="second">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15108.555810503763!2d82.7193501!3d18.7919599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe41a46200b702ecf!2sKoraput%20Junction!5e0!3m2!1sen!2sin!4v1660069891134!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
      
      <div class={styles.grid} >
          <a href="https://en.wikipedia.org/wiki/Naveen_Patnaik" class={styles.card}  target="blank" id={styles.cm}>
            <div class='text'>
            <h2 class='font-semibold'>Shri Abdaal M. Akhtar, IAS &rarr;</h2>
            <p>Collector & District Magistrate</p>
            </div>
            <div class={styles.profile}>
            <Image src="/collector.jpg" width="100px" height="100px" class={styles.pic}/>
            </div>
            </a>

          <a href="https://en.wikipedia.org/wiki/Pradip_Kumar_Amat" class={styles.card} target="blank">
            <div class='text'>
            <h2>Shri Pradip Kumar Amat, &rarr;</h2>
            <p>Honorable Minister, PR & DW Dept.</p>
            </div>
            <div class={styles.profile}>
            <Image src="/Pradip.jpg" width="100px" height="100px" class={styles.pic}/>
            </div>
          </a>

          <a
            href="https://twitter.com/ormas_odisha/status/1438188931120447495?s=20&t=WAui2ikCFugBBO9h-WFz6Q"
            class={styles.card} target="blank"
          >
            <div class='text'>
            <h2>Shri Ashok K.K. Meena,IAS &rarr;</h2>
            <p>Principal Secretary, PR & DW Dept.</p>
            </div>
            <div class={styles.profile}>
            <Image src="/Ashok.jpg" width="100px" height="100px" class={styles.pic}/>
            </div>
          </a>

          </div>
        </div>

        <main class={styles.main}>
            
        </main>

      <footer class={styles.footer}>
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
