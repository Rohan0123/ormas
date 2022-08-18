import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'

const history = () => {
  return (
    <div id="history">

      <div className={styles.banner}>

        <div className='mt-4'>
          <div id={styles.welcome}>
            <h3 className={styles.title}>
              Welcome to <a href=" " target="_blank">ORMAS</a> <p className='ml-2 mt-0'>Koraput</p>
              <p className='mt-0 text-2xl text-white italic' >
                Odisha Rural Developement and Marketing Society
              </p>
            </h3>
          </div>

          <div className={styles.grid} >
            <a href="https://twitter.com/abdaal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className={styles.card} target="blank" id={styles.cm}>
              <div className='text'>
                <h2 className='font-semibold'>Shri Abdaal M. Akhtar, IAS &rarr;</h2>
                <p>Collector & District Magistrate</p>
              </div>
              <div className={styles.profile}>
                <Image src="/collector.jpg" width="100px" height="100px" className={styles.pic} />
              </div>
            </a>

            <a href="" className={styles.card} target="blank">
              <div>
                <h2 className='font-semibold'>Shri Rajendra Majhi, OAS&rarr;</h2>
                <p>CDO-CUM-E.O, Zilla Parisad Koraput.</p>
              </div>
              <div className={styles.profile}>
                <Image src="/" width="100px" height="100px" className={styles.pic} />
              </div>
            </a>

            <a href="" className={styles.card} target="blank">
              <div >
                <h2 className='font-semibold'>Shri Roshan Kumar Karthik, &rarr;</h2>
                <p>Deputy CEO, ORMAS Koraput.</p>
              </div>
              <div className={styles.profile}>
                <Image src="/Roshan.jpg" width="100px" height="100px" className={styles.pic} />
              </div>
            </a>



          </div>



        </div>


        <div className={styles.slider}>
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

      <div className={styles.menu}>
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