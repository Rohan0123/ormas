import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'


const order = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
    return (
        <div id={styles.order}>
            <section className="text-gray-400 bg-gblack body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-white tracking-widest">ORMAS</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-4">Order Id: #11111</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow border-b-2 border-gray-800  py-2 text-lg ">Product</a>
                                <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg pl-56">Size</a>
                                <a className="flex-grow border-b-2 border-gray-800 py-2 pl-48 text-lg ">Quantity</a>
                            </div>
                            <p className="leading-relaxed mb-4 text-black font-semibold">Your order has been successfully placed. </p>
                            
                            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                                <span className="text-white">Product</span>
                                <span className="ml-auto text-white">50ml</span> 
                                <span className="ml-auto text-white">6</span>
                            </div>
                            
                            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                                <span className="text-white">Product</span>
                                <span className="ml-auto text-white">50ml</span>
                                <span className="ml-auto text-white">6</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="title-font font-medium text-2xl text-black">SubTotal: ₹{subTotal}</div>
                                <div>
                                <button className="flex mt-5 text-black bg-orange-200 border-0 py-2 px-6 focus:outline-none hover:bg-orange-100 rounded font-semibold">Track order</button>
                                </div>
                                
                            </div>
                        </div>
                        <Image alt="order" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/dummy.webp" width="500px" height="500px"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default order