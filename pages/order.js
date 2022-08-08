import React from 'react'
import styles from "../styles/Home.module.css"

const order = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
    return (
        <div id={styles.order}>
            <section class="text-gray-400 bg-gblack body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 class="text-sm title-font text-white tracking-widest">ORMAS</h2>
                            <h1 class="text-white text-3xl title-font font-medium mb-4">Order Id: #11111</h1>
                            <div class="flex mb-4">
                                <a class="flex-grow border-b-2 border-gray-800  py-2 text-lg ">Product</a>
                                <a class="flex-grow border-b-2 border-gray-800 py-2 text-lg pl-56">Size</a>
                                <a class="flex-grow border-b-2 border-gray-800 py-2 pl-48 text-lg ">Quantity</a>
                            </div>
                            <p class="leading-relaxed mb-4 text-orange-100 font-semibold">Your order has been successfully placed. </p>
                            
                            <div class="flex border-t border-b mb-6 border-gray-800 py-2">
                                <span class="text-white">Product</span>
                                <span class="ml-auto text-white">50ml</span>
                                <span class="ml-auto text-white">6</span>
                            </div>
                            
                            <div class="flex border-t border-b mb-6 border-gray-800 py-2">
                                <span class="text-white">Product</span>
                                <span class="ml-auto text-white">50ml</span>
                                <span class="ml-auto text-white">6</span>
                            </div>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-orange-200">₹{subTotal}</span>
                                <button class="flex ml-auto text-black bg-orange-200 border-0 py-2 px-6 focus:outline-none hover:bg-orange-100 rounded font-semibold">Track order</button>
                                
                            </div>
                        </div>
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default order