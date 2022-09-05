import React from 'react'
import styles from "../styles/Home.module.css"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import GooglePayButton from "@google-pay/button-react";
import { useState } from 'react';
import { useEffect } from 'react'
const checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
  const intiatePayment = async() => {
    
    let oid = Math.floor(Math.random() * Date.now());
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`)
    const data = { cart, subTotal, oid, email: "email" };

    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let txnToken = await a.json()
    console.log(txnToken)

    var config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
        "orderId": oid, /* update order id */
        "token": txnToken, /* update token value */
        "tokenType": "TXN_TOKEN",
        "amount": subTotal /* update amount */
      },
      "handler": {
        "notifyMerchant": function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        }
      }
    };


    window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
      // after successfully updating configuration, invoke JS Checkout
      window.Paytm.CheckoutJS.invoke();
    }).catch(function onError(error) {
      console.log("error => ", error);
    });

  }

  const paymentRequest ={
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"]
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId:'exampleGatewayMerchantId',
                  }
                }
              }
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant"
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "100.00",
              currencyCode: "INR",
              countryCode: "IN",
            }
          }

  const [buttonColor, setButtonColor] = useState("default");
  const [buttonType, setButtonType] = useState("plain");
  const [buttonSizeMode, setButtonSizeMode] = useState("static");
  const [buttonWidth, setButtonWidth] = useState(140);
  const [buttonHeight, setButtonHeight] = useState(40);

  const isTop = "window" === "window.top";

  return (<>
    <Head></Head>
    <script type="application/javascript" crossorigin="anonymous" src="https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/{MID}.js" />


    <div className='text-center font-bold text-2xl text-black' id={styles.checkout_head}>Checkout</div>
    <div className='lg:w-1/2 md:w-2/3 mx-auto ' id={styles.checkout}>
      <div className='ml-2' id={styles.delivery_details}>
        <h2 className='font-bold text-xl mb-5 ml-56 text-black' id={styles.checkout_title}>1. Delivery Details</h2>
        <div className='flex'>
          <div className="relative justify-center" id={styles.checkout_details}>
            <label for="name" className="leading-7 text-sm text-black font-semibold">Name:</label>
            <input type="text" id="name" name="name" className="w-96 bg-orange-200 border-1 border-black  rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div className="relative mt-28 ml-44" id={styles.checkout_details}>
            <label for="email" className="leading-7 text-sm text-black font-semibold">E-mail:</label>
            <input type="email" id="email" name="email" className="w-96 bg-orange-200 border-1 border-black  rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className='flex mt-4'>

        <div className="p-2 w-full">
          <div className="relative">
            <label for="address" className="leading-7 text-sm text-black font-semibold">Address</label>
            <textarea id="message" name="message" className="w-full bg-orange-200 border-1 border-black  bg-opacity-50 rounded border border-gray-300 focus:border-orange-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>

        </div>

      </div>
      <div className='flex ml-2'>
        <div className="relative justify-center" id={styles.checkout_details}>
          <label for="phone" className="leading-7 text-sm text-black font-semibold">Phone no.:</label>
          <input type="text" maxLength={10} id="phone" name="phone" className="w-96 bg-orange-200 border-1 border-black  rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>

        <div className="relative mt-28 ml-44" id={styles.checkout_details}>
          <label for="pin" className="leading-7 text-sm text-black font-semibold">Pincode:</label>
          <input type="text" id="pin" name="pin" className="w-96 bg-orange-200 border-1 border-black  rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className='flex ml-2'>
        <div className="relative justify-center" id={styles.checkout_details}>
          <label for="district" className="leading-7 text-sm text-black font-semibold">District:</label>
          <input type="text" id="district" name="city" className="w-96 bg-orange-200 border-1 border-black  rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>

        <div className="relative mt-28 ml-44" id={styles.checkout_details}>
          <label for="state" className="leading-7 text-sm text-black font-semibold">State:</label>
          <input type="text" id="state" name="state" className="w-96 bg-orange-200 border-1 border-black  rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <h1 className='mt-5 mb-5 font-bold text-xl text-black'>2. Review Cart Items & Pay</h1>
      <div className="sideCart  font-black text-black bg-orange-200 py-10 px-5 w-full mb-5 rounded">
        <div className='my-5'>
          <ol className='list-decimal px-8'>
            {Object.keys(cart).length === 0 &&
              <div className='text-center font-semibold'>Cart is empty!</div>}
            {Object.keys(cart).map((k) => {
              return <li key={k}>
                <div className='item flex'>
                  <div className='w-1/5 font-semibold '>
                    {cart[k].name} ( {cart[k].size} )
                  </div>
                  <div className='flex items-center justify-center w-2/5 font-semibold'>
                    <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cart_buttons text-2xl hover:cursor-pointer' />{cart[k].qty}<AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cart_buttons text-2xl hover:cursor-pointer' />
                  </div>
                </div>
              </li>
            })}
            <h2 className="mt-3 font-bold">SubTotal: ₹{subTotal}</h2>
          </ol>
        </div>
      </div>

      <Link href={"/online_payment"}>
      <button className="flex my-5 text-orange-200 bg-black border-0 py-2 px-8 focus:outline-none  rounded-lg font-semibold " id={styles.checkout_button}>Pay ₹{subTotal}</button>
      </Link>

      <div className="w-40 flex my-5 text-orange-200 bg-black border-0 py-2 px-8 focus:outline-none  rounded-lg font-semibold ">
      <GooglePayButton
          environment="TEST"
          buttonColor={buttonColor}
          buttonType={buttonType}
          buttonSizeMode="fill"
          paymentRequest={paymentRequest}
          style={{ width: buttonWidth, height: buttonHeight }}
          className="bg-black"
        />
        </div>
    </div>
    
  </>
  )
}

export default checkout