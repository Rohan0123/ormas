import '../styles/navbar.css'
import '../styles/globals.css'
import Image from "next/image";
import Navbar from './navbar';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})

  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    console.log("Hi")
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
    
  }, [])


  

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode]
        .qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
  }


const removeFromCart = (itemCode, qty, price, name, size, variant) => {
  let newCart = cart;
  if (itemCode in cart) {
    newCart[itemCode].qty = cart[itemCode]
      .qty - qty
  }
  if (newCart[itemCode]["qty"] <= 0) {
    delete newCart[itemCode]
  }
  setCart(newCart)
  saveCart(newCart)
}
  


return <>
  <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
</>
}

export default MyApp
