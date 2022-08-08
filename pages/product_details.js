import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from "/styles/home.module.css"
import Link from "next/link"
import { AiOutlineShoppingCart } from "react-icons/ai"

const Post = ({addToCart}) => {
  
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const checkService = async() =>{
    let pins = await fetch("http://localhost:3000/api/pincode")
    let pinJason = await pins.json()
    if(pinJason.includes(parseInt(pin)))
    {
      setService(true);
    }
    else setService(false);
  }
  const onChangePin = (e) =>{
    setPin(e.target.value)
  }


  return <>
    <div id={styles.product_details} className="bg-white">
      <div className="details">
        <section class="text-gray-400 bg-black body-font overflow-hidden" id={styles.details}>
          <div class="container px-5 py-16 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl" src="/Lemon_Grass_Oil.jpeg" />
              <div class="lg:w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0 " >
                <h2 class="text-sm title-font text-gray-500 tracking-widest">ORMAS</h2>
                <h1 class="text-white text-3xl title-font font-medium mb-1">Lemon Grass Oil</h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span class="ml-3">4 Reviews</span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                    <a>
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                  <div class="flex">
                    <span class="mr-3">Color</span>
                    <button class="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-800 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div class="flex ml-6 items-center">
                    <span class="mr-3">Size</span>
                    <div class="relative">
                      <select class="rounded border border-gray-700 focus:ring-2 focus:ring-yellow-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-yellow-500 text-orange-200 pl-3 pr-10">
                        <option className='bg-black hover:bg-orange-200 hover:text-black'>50ml</option>
                        <option className='bg-black hover:bg-orange-200 hover:text-black'>100ml</option>
                        <option className='bg-black hover:bg-orange-200 hover:text-black'>250ml</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-white">₹120.00</span>
                  <Link href={"./checkout"}>
                  <button onClick={()=>{addToCart(12, 1, 120, "Lemon Grass Oil", "250ml","Oil")}}  class="flex ml-auto text-black bg-orange-200 border-0 py-2 px-6 focus:outline-none hover:bg-orange-100 rounded">Buy Now</button>
                  </Link>
                  <button onClick={()=>{addToCart(12, 1, 120, "Lemon Grass Oil", "250ml","Oil")}} className='hover:cursor-pointer text-3xl mx-5'><AiOutlineShoppingCart /></button>
                  <button class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <div id={styles.pin} className="flex flex-row space-x-2 text-sm" >
                  <input onChange={onChangePin} type="text" name="" id="" placeholder='Enter Your Pin' className='rounded-md text-orange-200 bg-black border px-1' />
                  <button onClick={checkService} class="flex ml-auto text-black bg-orange-200 border-0 py-2 px-6 focus:outline-none hover:bg-orange-100 rounded">Check</button>
                </div>
                { !service && service!=null && <div className='text-red-500 text-sm none'>
                  Sorry! Your location isn't servicable.
                </div>}

                { service && service!=null && <div className='text-orange-200 text-sm block'>
                  Thanks! Your location is servicable.
                </div>}
              </div>
            </div>
          </div>
        </section>
      </div>




      <div className="product_features">
        <section class="text-gray-400 bg-black body-font my-5">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Product Features</h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">100% Pure</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                  <a class="mt-3 text-yellow-400 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">Chemical Free</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                  <a class="mt-3 text-yellow-400 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">Made in Koraput</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                  <a class="mt-3 text-yellow-400 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <Link href="">
              <button class="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg" >
                Top
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  </>
}

export default Post