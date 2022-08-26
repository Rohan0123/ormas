import "../styles/navbar.css";
import "../styles/globals.css";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer"
import { useState, useEffect } from "react";
import Router from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log("Hi");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      toast('This item already exists in your cart!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const addToWishList = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      toast('This item already exists in your wishlist!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    
    let newCart = {itemCode:{qty: 1, price, name, size, variant}};
    setCart(newCart);
    saveCart(newCart);
    Router.push("/checkout");
  };
  
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <Navbar
        cart={cart}
        addToCart={addToCart}
        buyNow={buyNow}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        buyNow={buyNow}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer/>

    </>
  );
}

export default MyApp;
