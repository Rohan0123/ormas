import React from 'react'
import styles from "../styles/Home.module.css"
import {AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import Link from 'next/link'


const checkout = () => {
  return (<>
    <div className='text-center font-bold text-2xl ' id={styles.checkout_head}>Checkout</div>
    <div className='lg:w-1/2 md:w-2/3 mx-auto ' id={styles.checkout}>
    <div className='ml-2' id={styles.delivery_details}>
        <h2 className='font-bold text-xl mb-5 ml-56' id={styles.checkout_title}>1. Delivery Details</h2>
    <div className='flex'>
        <div class="relative justify-center"id={styles.checkout_details}>
        <label for="email" class="leading-7 text-sm text-orange-100">Name:</label>
        <input type="email" id="email" name="email" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

        <div class="relative mt-28 ml-44" id={styles.checkout_details}>
        <label for="email" class="leading-7 text-sm text-orange-100">E-mail:</label>
        <input type="email" id="email" name="email" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    </div>
    <div className='flex mt-4'>
    
      <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-orange-100">Address</label>
            <textarea id="message" name="message" class="w-full bg-orange-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
      </div>

    </div>
    <div className='flex ml-2'>
        <div class="relative justify-center"id={styles.checkout_details}>
        <label for="email" class="leading-7 text-sm text-orange-100">Phone no.:</label>
        <input type="email" id="email" name="email" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

        <div class="relative mt-28 ml-44" id={styles.checkout_details}>
        <label for="email" class="leading-7 text-sm text-orange-100">Pincode:</label>
        <input type="email" id="email" name="email" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    <div className='flex ml-2'>
        <div class="relative justify-center"id={styles.checkout_details}>
        <label for="email" class="leading-7 text-sm text-orange-100">District:</label>
        <input type="email" id="email" name="email" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

        <div class="relative mt-28 ml-44" id={styles.checkout_details}>
        <label for="email" class="leading-7 text-sm text-orange-100">State:</label>
        <input type="email" id="email" name="email" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
    </div>
      <h1 className='mt-5 mb-5 font-bold text-xl'>2. Review Cart Items & Pay</h1>
      <div  className="sideCart  font-black text-black bg-orange-200 py-10 px-5 w-full mb-10 rounded">        
        <div className='my-5'>
        <ol className='list-decimal px-8'>
          <li>
            <div className='item flex'>
              <div className='w-2/3 font-semibold'>
              Lemon Grass Oil
              </div>
              <div className='flex items-center justify-center w-1/3 font-semibold '>
              <AiFillMinusCircle className='cart_buttons text-xl'/>1<AiFillPlusCircle className='cart_buttons text-xl'/>
              </div>
            </div>
          </li>
        </ol>
        </div>
      </div>
    </div>
    </>
  )
}

export default checkout