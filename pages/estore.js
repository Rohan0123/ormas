import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/dist/client/image'
import Link from "next/link";

//import Image from 'next/image'
const ecommerce = () => {
  return (
    <div >
      <div className='absolute top-0 md:relative' >
      </div>
      <section class="text-gray-400 bg-black body-font">
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-wrap -m-4 w-55 md:ml-52" id={styles.estore_content} >
      <div class="lg:w-1/5 md:w-1/2 p-4  m-auto  w-650" id={styles.estore_border}>
        <Link href="/product_details">
        <a class="block relative h-55 overflow-hidden rounded-lg" >
          <img alt="ecommerce" class="m-auto block" src="/Lemon_Grass_Oil.jpeg"/>
        
        <div class="mt-5 text-center md:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white title-font text-lg font-medium">Lemon Grass Oil</h2>
          <p class="mt-1">₹120.00</p>
        </div>
        </a>
        </Link>
      </div>
      <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
      <Link href="/product_details">
        <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
          <img alt="ecommerce" class="object-cover object-center w-full block" src="Turmeric.jpeg"/>
        <div class="mt-4 text-center md:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white title-font text-lg font-medium">Turmeric Powder</h2>
          <p class="mt-1">₹21.15</p>
        </div>
        </a>
        </Link>
      </div>
      <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
      <Link href="/product_details">
        <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/Kala Jeera Rice.jpeg"/>
        <div class="mt-4 text-center md:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white title-font text-lg font-medium">Kala Jeera Rice</h2>
          <p class="mt-1">₹12.00</p>
        </div>
        </a>
        </Link>
      </div>
      <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
      <Link href="/product_details">
        <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/Suan.jpeg"/>
        <div class="mt-4 text-center md:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white title-font text-lg font-medium">Suan</h2>
          <p class="mt-1">₹18.40</p>
        </div>
        </a>
        </Link>
      </div>
      <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
      <Link href="/product_details">
        <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/Jaggery.jpeg"/>
        <div class="mt-4 text-center md:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white title-font text-lg font-medium">Jaggery</h2>
          <p class="mt-1">₹16.00</p>
        </div>
        </a>
        </Link>
      </div>
      <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
      <Link href="/product_details">
        <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/Tamarind.jpeg"/>
        <div class="mt-4 text-center md:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white title-font text-lg font-medium">Tamarind</h2>
          <p class="mt-1">₹21.15</p>
        </div>
        </a>
        </Link>
      </div>
      <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
      <Link href="/product_details">
        <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"/>
        <div class="mt-4 text-center md:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">₹12.00</p>
        </div>
        </a>
        </Link>
      </div>
      <div class="lg:w-1/5 md:w-1/2 p-4 m-auto" id={styles.estore_border}>
      <Link href="/product_details">
        <a class="block relative h-55 rounded-lg overflow-hidden" href='/product_details'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"/>
        <div class="mt-4 text-center md:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">₹18.40</p>
        </div>
        </a>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ecommerce