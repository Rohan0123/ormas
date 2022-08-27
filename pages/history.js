import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const history = () => {
  return (
    <div id="history">
      <div class={styles.container}>
      <Head>
        <title>ORMAS, Koraput</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Kolab_Logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        
      </Head>

      <div class={styles.banner}>

        <div class='mt-4'>
          <div id={styles.welcome}>
            <h3 class={styles.title}>
              Welcome to <a href=" " target="_blank">ORMAS</a> <p class='ml-2 mt-0'>Koraput</p>
              <p class='mt-0 text-2xl text-white italic' >
                Odisha Rural Developement and Marketing Society
              </p>
            </h3>
          </div>

          <div class={styles.grid} >
            <a href="https://twitter.com/abdaal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class={styles.card} target="blank" id={styles.cm}>
              <div class='text'>
                <h2 class='font-semibold'>Shri Abdaal M. Akhtar, IAS &rarr;</h2>
                <p>Collector & District Magistrate</p>
              </div>
              <div class={styles.profile}>
                <Image src="/collector.jpg" width="100px" height="100px" class={styles.pic} />
              </div>
            </a>

            <a href="" class={styles.card} target="blank">
              <div>
                <h2 class='font-semibold'>Shri Rajendra Majhi, OAS&rarr;</h2>
                <p>CDO-CUM-E.O, Zilla Parisad Koraput.</p>
              </div>
              <div class={styles.profile}>
                <Image src="/" width="100px" height="100px" class={styles.pic} />
              </div>
            </a>

            <a href="" class={styles.card} target="blank">
              <div >
                <h2 class='font-semibold'>Shri Roshan Kumar Karthik, &rarr;</h2>
                <p>Deputy CEO, ORMAS Koraput.</p>
              </div>
              <div class={styles.profile}>
                <Image src="/Roshan.jpg" width="100px" height="100px" class={styles.pic} />
              </div>
            </a>



          </div>



        </div>
        

        <div class={styles.slider}>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img id={styles.slider_image} class="d-block w-100" src="Workers1.jpeg" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img id={styles.slider_image} class="d-block w-100" src="Workers2.jpeg" alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img id={styles.slider_image} class="d-block w-100" src="Workers3.jpeg" alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img id={styles.slider_image} class="d-block w-100" src="Workers4.jpeg" alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img id={styles.slider_image} class="d-block w-100" src="Workers5.jpeg" alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img id={styles.slider_image} class="d-block w-100" src="Workers6.jpeg" alt="Third slide" />
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

      <div id={styles.product_carousel}>
        <Carousel class='rounded-lg my-10' >
          <div class='flex mt-12 rounded-lg'>
            <div class="lg:w-1/5 md:w-1/2 p-4  m-auto w-650 hover:text-black" id={styles.estore_border}>
              <Link href="/product_details_Lemon">
                <a class="block relative h-55 overflow-hidden rounded-lg" >
                  <img alt="ecommerce" class="m-auto block" src="/Lemon_Grass_Oil.jpeg" />

                  <div class="mt-5 text-center md:text-left">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-white title-font text-lg font-medium ">Lemon Grass Oil</h2>
                    <p class="mt-1">₹100.00</p>
                  </div>
                </a>
              </Link>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
              <Link href="/Turmeric">
                <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
                  <img alt="ecommerce" class="object-cover object-center w-full block" src="Turmeric.jpeg" />
                  <div class="mt-4 text-center md:text-left">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-white title-font text-lg font-medium">Turmeric Powder</h2>
                    <p class="mt-1">₹150</p>
                  </div>
                </a>
              </Link>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
              <Link href="/Rice">
                <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/Kala Jeera Rice.jpeg" />
                  <div class="mt-4 text-center md:text-left">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-white title-font text-lg font-medium">Kala Jeera Rice</h2>
                    <p class="mt-1">₹110.00</p>
                  </div>
                </a>
              </Link>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
              <Link href="/Suan">
                <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/Suan.jpeg" />
                  <div class="mt-4 text-center md:text-left">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-white title-font text-lg font-medium">Suan</h2>
                    <p class="mt-1">₹80</p>
                  </div>
                </a>
              </Link>
            </div>
            </div>
            <div class='flex mt-24 rounded-lg'>
            <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
              <Link href="/Jaggery">
                <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/Jaggery.jpeg" />
                  <div class="mt-4 text-center md:text-left">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-white title-font text-lg font-medium">Jaggery</h2>
                    <p class="mt-1">₹100.00</p>
                  </div>
                </a>
              </Link>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
              <Link href="/Tamarind">
                <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/Tamarind.jpeg" />
                  <div class="mt-4 text-center md:text-left">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-white title-font text-lg font-medium">Tamarind</h2>
                    <p class="mt-1">₹100.00</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>

      <h2 class='flex flex-row justify-center mt-24 font-serif text-2xl font-semibold text-black '>Our Store Location</h2>
      <div class='flex flex-row justify-center mt-10 ' id="second">
        <iframe class='rounded-lg' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15108.555810503763!2d82.7193501!3d18.7919599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe41a46200b702ecf!2sKoraput%20Junction!5e0!3m2!1sen!2sin!4v1660069891134!5m2!1sen!2sin" width="1500" height="450" id={styles.Home_map} />


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
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </div>
    <div class={styles.menu}>
      <h2>Our Journey</h2>
    </div>

    <div id='Our Journey'>
    <section class="text-white bg-black body-font my-10" >
    <div class="container px-5 py-24 mx-auto flex flex-wrap ">
      <h2 class="sm:text-3xl text-2xl text-orange-200 font-medium title-font mb-2 md:w-2/5">Background</h2>
      <div class="md:w-3/5 md:pl-6">
        <p class="leading-relaxed text-base">To create different marketing channels for the micro enterprises, rural producers to develop sustainable livelihood through adopting appropriate rural technology, product development & diversification with accepted designs, packaging, certification, branding activities etc, Government in Panchayati Raj & Drinking Water Department has created “Odisha Rural Development and Marketing Society (ORMAS)” on 14th January 1991and registered under Societies Registration Act-1860, it has been rendering yeomen services in livelihood promotion and rural product marketing in Odisha.  ORMAS and DSMSs have been successfully operating since last 25 years for establishment of a strong marketing network for rural produces.</p>
        <div class="flex md:mt-4 mt-6">
          <a class="text-orange-200 inline-flex items-center hover:cursor-pointer ">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  
    <section class="text-white bg-black body-font my-10" >
    <div class="container px-5 py-24 mx-auto flex flex-wrap ">
      <h2 class="sm:text-3xl text-2xl text-orange-200 font-medium title-font mb-2 md:w-2/5">The Road Ahead</h2>
      <div class="md:w-3/5 md:pl-6">
        <p class="leading-relaxed text-base">With changing scenario on Government’s strategies for development program implementation which is based on sustainability of these program and as a process capacitating /involving the grass root institutions/civil societies and having equity and transparency at all levels, ORMAS is being positioned to be working in partnership and as an apex body for knowledge creation, flow and adaptation for creating economic opportunities.

ORMAS has already imbibed a role of facilitator rather than implementer and work in partnerships with other institutions/agencies for sustainability of the initiatives which it started long back. While there has been change in ORMAS’s role, at the same time the role of all partners are being evolved.  ORMAS keep on working more at a systemic level.</p>
        <div class="flex md:mt-4 mt-6">
          <a class="text-orange-200 inline-flex items-center hover:cursor-pointer">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  </div>
  </div>

  )
}

export default history