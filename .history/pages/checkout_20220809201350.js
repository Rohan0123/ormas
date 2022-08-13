import React from 'react'
import styles from "../styles/Home.module.css"
import {AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'


const checkout = ({cart, addToCart, removeFromCart, subTotal}) => {
  return (<>
    <Head></Head>
    <script type="application/javascript" crossorigin="anonymous" src={{HOST}/merchantpgpui/checkoutjs/merchants/{MID}.js" onload="onScriptLoad();"/>


    <div className='text-center font-bold text-2xl ' id={styles.checkout_head}>Checkout</div>
    <div className='lg:w-1/2 md:w-2/3 mx-auto ' id={styles.checkout}>
    <div className='ml-2' id={styles.delivery_details}>
        <h2 className='font-bold text-xl mb-5 ml-56' id={styles.checkout_title}>1. Delivery Details</h2>
    <div className='flex'>
        <div class="relative justify-center"id={styles.checkout_details}>
        <label for="name" class="leading-7 text-sm text-orange-100">Name:</label>
        <input type="text" id="name" name="name" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" important/>
        </div>

        <div class="relative mt-28 ml-44" id={styles.checkout_details}>
        <label for="email" class="leading-7 text-sm text-orange-100">E-mail:</label>
        <input type="email" id="email" name="email" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    </div>
    <div className='flex mt-4'>
    
      <div class="p-2 w-full">
          <div class="relative">
            <label for="address" class="leading-7 text-sm text-orange-100">Address</label>
            <textarea id="message" name="message" class="w-full bg-orange-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          
      </div>

    </div>
    <div className='flex ml-2'>
        <div class="relative justify-center"id={styles.checkout_details}>
        <label for="phone" class="leading-7 text-sm text-orange-100">Phone no.:</label>
        <input type="text" maxLength={10} id="phone" name="phone" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

        <div class="relative mt-28 ml-44" id={styles.checkout_details}>
        <label for="pin" class="leading-7 text-sm text-orange-100">Pincode:</label>
        <input type="text" id="pin" name="pin" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    <div className='flex ml-2'>
        <div class="relative justify-center"id={styles.checkout_details}>
        <label for="district" class="leading-7 text-sm text-orange-100">District:</label>
        <input type="text" id="district" name="city" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

        <div class="relative mt-28 ml-44" id={styles.checkout_details}>
        <label for="state" class="leading-7 text-sm text-orange-100">State:</label>
        <input type="text" id="state" name="state" class="w-96 bg-orange-100 rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
    </div>
      <h1 className='mt-5 mb-5 font-bold text-xl'>2. Review Cart Items & Pay</h1>
      <div  className="sideCart  font-black text-black bg-orange-200 py-10 px-5 w-full mb-5 rounded">        
        <div className='my-5'>
        <ol className='list-decimal px-8'>
          {Object.keys(cart).length ===0 && 
          <div className='text-center font-semibold'>Cart is empty!</div> }
          {Object.keys(cart).map((k)=>{return <li key={k}>
            <div className='item flex'>
              <div className='w-1/5 font-semibold '>
              {cart[k].name}
              </div>
              <div className='flex items-center justify-center w-2/5 font-semibold'>
              <AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cart_buttons text-2xl'/>{cart[k].qty}<AiFillPlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}className='cart_buttons text-2xl'/>
              </div>
            </div>
              <h2 className="mt-3 font-bold">SubTotal: ₹{subTotal}</h2>
          </li>})}
        </ol>
        </div>
      </div>
      <Link href={"./Payment"}>
        <button type='submit' className="flex my-5 text-orange-200 bg-black border-0 py-2 px-8 focus:outline-none  rounded-lg font-semibold " id={styles.checkout_button}>Pay ₹{subTotal}</button>
        </Link>
    </div>
    </>
  )
}

export default checkout