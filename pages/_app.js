import "../styles/navbar.css";
import "../styles/globals.css";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer"
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const  [user, setUser] = useState({value: null});
  const [key, setKey] = useState()
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    const token = localStorage.getItem("token")
    if(token){
      setUser({value: token})
      setKey(Math.random())
    }
   }, [router.query]);



   const logout =()=>{
    localStorage.removeItem("token")
    setUser({value: null})
    setKey(Math.random())
    toast("Successfully Logout", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    router.push("/")
  }

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  const addToCart = (itemCode, qty, price, name, size, variant, availableQty) => {
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
      newCart[itemCode] = { qty: 1, price, name, size, variant, availableQty };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const plusToCart = (itemCode, qty, price, name, size, variant, availableQty) => {
    let newCart = cart;
    if (itemCode in cart) {
      if(newCart[itemCode].qty<cart[itemCode].availableQty){
      newCart[itemCode].qty = cart[itemCode].qty + qty;
      }
    } else {
      toast('Plus not working!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
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
    <LoadingBar
        color='#ff0000'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar
        logout={logout}
        user={user}
        key={cart}
        cart={cart}
        addToCart={addToCart}
        plusToCart={plusToCart}
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
