import React from "react";
import styles from "../styles/Home.module.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import GooglePayButton from "@google-pay/button-react";
import { useState } from "react";
import { useEffect } from "react";
const checkout = ({ cart, plusToCart, removeFromCart, subTotal }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [pincode, setPincode] = useState()
  const [address, setAddress] = useState()
  const [first, setfirst] = useState()
  const [disabled, setDisabled] = useState(true)

  const handleChange = (e)=>{
    if(e.target.name == 'name'){
      setName(e.target.value)
    }
    else if(e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name == 'phone'){
      setPhone(e.target.value)
    }
    else if(e.target.name == 'pin'){
      setPincode(e.target.value)
    }
    else if(e.target.name == 'address'){
      setAddress(e.target.value)
    }
    if (name && email && address && phone && pin ){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  }


  const intiatePayment = async () => {
    console.log("working");
    let oid = Math.floor(Math.random() * Date.now());
    const data = { cart, subTotal, oid, email: "email",name, address, pincode, phone };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let txnRes = await a.json();
    console.log(txnRes);
    let txnToken = txnRes.txnToken;

    var config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: oid /* update order id */,
        token: txnToken /* update token value */,
        tokenType: "TXN_TOKEN",
        amount: subTotal /* update amount */,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };

    window.Paytm.CheckoutJS.init(config)
      .then(function onSuccess() {
        // after successfully updating configuration, invoke JS Checkout
        window.Paytm.CheckoutJS.invoke();
      })
      .catch(function onError(error) {
        console.log("error => ", error);
      });
  };

  const [buttonColor, setButtonColor] = useState("default");
  const [buttonType, setButtonType] = useState("plain");
  const [buttonSizeMode, setButtonSizeMode] = useState("static");
  const [buttonWidth, setButtonWidth] = useState(140);
  const [buttonHeight, setButtonHeight] = useState(40);

  const isTop = "window" === "window.top";

  return (
    <div id={styles.checkout}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        crossorigin="anonymous"
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
      />

      <div
        className="text-center font-bold text-2xl text-black"
        id={styles.checkout_head}
      >
        Checkout
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto " id={styles.checkout}>
        <div className="ml-2" id={styles.delivery_details}>
          <h2
            className="font-bold text-xl mb-5 ml-56 text-black"
            id={styles.checkout_title}
          >
            1. Delivery Details
          </h2>
          <div className="flex">
            <div
              className="relative justify-center"
              id={styles.checkout_details}
            >
              
              <label
                htmlFor="name"
                className="leading-7 text-sm text-black font-semibold"
              >
                Name:
              </label>
              <input
                onChange={handleChange}
                value={name}
                type="text"
                id="name"
                name="name"
                className="w-96 bg-orange-200 border-1 border-black  rounded border focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mt-28 ml-44" id={styles.checkout_details}>
              <label
                htmlFor="email"
                className="leading-7 text-sm text-black font-semibold"
              >
                E-mail:
              </label>
              <input
                onChange={handleChange}
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-96 bg-orange-200 border-1 border-black  rounded border focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-black font-semibold"
              >
                Address
              </label>
              <textarea
                onChange={handleChange}
                value={address}
                id="address"
                name="address"
                className="w-full bg-orange-200 border-1 border-black  bg-opacity-50 rounded border focus:border-orange-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex ml-2">
          <div className="relative justify-center" id={styles.checkout_details}>
            <label
              htmlFor="phone"
              className="leading-7 text-sm text-black font-semibold"
            >
              Phone no.:
            </label>
            <input
              onChange={handleChange}
              type="text"
              maxLength={10}
              id="phone"
              name="phone"
              className="w-96 bg-orange-200 border-1 border-black  rounded border focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mt-28 ml-44" id={styles.checkout_details}>
            <label
              htmlFor="pin"
              className="leading-7 text-sm text-black font-semibold"
            >
              Pincode:
            </label>
            <input
              onChange={handleChange}
              value={pincode}
              type="text"
              id="pin"
              name="pin"
              className="w-96 bg-orange-200 border-1 border-black  rounded border focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="flex ml-2">
          <div className="relative justify-center" id={styles.checkout_details}>
            <label
              htmlFor="district"
              className="leading-7 text-sm text-black font-semibold"
            >
              District:
            </label>
            <input
              type="text"
              id="district"
              name="city"
              className="w-96 bg-orange-200 border-1 border-black  rounded border focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mt-28 ml-44" id={styles.checkout_details}>
            <label
              htmlFor="state"
              className="leading-7 text-sm text-black font-semibold"
            >
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-96 bg-orange-200 border-1 border-black  rounded border focus:border-orange-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <h1 className="mt-5 mb-5 font-bold text-xl text-black">
          2. Review Cart Items & Pay
        </h1>
        <div className="sideCart  font-black text-black bg-orange-200 py-10 px-5 w-full mb-5 rounded border border-black">
          <div className="my-5">
            <ol className="list-decimal px-8">
              {Object.keys(cart).length === 0 && (
                <div className="text-center font-semibold">Cart is empty!</div>
              )}
              {Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="item flex ">
                      <div className="w-1/5 font-semibold ">
                        {cart[k].name} ( {cart[k].size} )
                      </div>
                      <div className="flex items-center justify-center w-2/5 font-semibold">
                        <AiFillMinusCircle
                          onClick={() => {
                            removeFromCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                          className="cart_buttons text-2xl hover:cursor-pointer"
                        />
                        {cart[k].qty}
                        <AiFillPlusCircle
                          onClick={() => {
                            plusToCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                          className="cart_buttons text-2xl hover:cursor-pointer"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
              <h2 className="mt-3 font-bold">SubTotal: ₹{subTotal}</h2>
            </ol>
          </div>
        </div>

        <button
          disabled={disabled}
          className="flex my-5 bg-black border-0 py-2 px-8 focus:outline-none  rounded-lg font-semibold "
          id={styles.checkout_button}
          onClick={intiatePayment}
        >
          Pay ₹{subTotal}
        </button>

        <div className="w-40 my-5 bg-black border-0 py-2 px-8 focus:outline-none  rounded-lg font-semibold hidden">
          <GooglePayButton
            environment="TEST"
            buttonColor={buttonColor}
            buttonType={buttonType}
            buttonSizeMode="fill"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: "100.00",
                currencyCode: "INR",
                countryCode: "IN",
              },
              shippingAddressRequired: true,
              callbackIntents: ["SHIPPING_ADDRESS"],
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log(paymentRequest);
            }}
            onPaymentDataChanged={(paymentData) => {
              return {
                newTransactionInfo: newTransactionInfo.getTransactionInfo(
                  paymentData.shippingAddress
                ),
              };
            }}
            style={{ width: buttonWidth, height: buttonHeight }}
            className="bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default checkout;
