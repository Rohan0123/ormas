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
        <link rel='stylesheet' href="./styles/main.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      </Head>

      <div className={styles.banner}>


        <h3 className={styles.title}>
          Welcome to <a href=" " target="_blank">ORMAS</a> Koraput
          <p className={styles.description}>
            Odisha Rural Developement and Marketing Society
          </p>
        </h3>

        <div className={styles.slider}>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-500 h" src="Workers.jpeg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-500" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-500" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
      </div>

      <div className='flex flex-row justify-center mt-28 ' id="second">
        <iframe className='rounded-lg' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15108.555810503763!2d82.7193501!3d18.7919599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe41a46200b702ecf!2sKoraput%20Junction!5e0!3m2!1sen!2sin!4v1660069891134!5m2!1sen!2sin" width="1000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />

        <div className={styles.grid} >
          <a href="https://en.wikipedia.org/wiki/Naveen_Patnaik" className={styles.card} target="blank" id={styles.cm}>
            <div className='text'>
              <h2 className='font-semibold'>Shri Abdaal M. Akhtar, IAS &rarr;</h2>
              <p>Collector & District Magistrate</p>
            </div>
            <div className={styles.profile}>
              <Image src="/collector.jpg" width="100px" height="100px" className={styles.pic} />
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/Pradip_Kumar_Amat" className={styles.card} target="blank">
            <div className='text'>
              <h2>Shri Pradip Kumar Amat, &rarr;</h2>
              <p>Honorable Minister, PR & DW Dept.</p>
            </div>
            <div className={styles.profile}>
              <Image src="/Pradip.jpg" width="100px" height="100px" className={styles.pic} />
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
              <Image src="/Ashok.jpg" width="100px" height="100px" className={styles.pic} />
            </div>
          </a>

        </div>
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
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </div>
  )
}
