import React from 'react'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from 'next/image'
import { AiFillCloseCircle, AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import {BsFillBagCheckFill} from "react-icons/Bs"
import {MdDeleteForever, MdAccountCircle} from "react-icons/Md"
import { useRef } from 'react';

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
  const toggleCart= ()=>{
    if (ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
    else if (!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  };
  const ref = useRef(); 

  const remove = () =>{
    ref.current.classList.remove('translate-x-0');
    ref.current.classList.add('translate-x-full');
  }
  return (
    <div >
      <nav id={styles.mainLogo} >
        <ul>
          <div class={styles.odisha_logo}>
            <Image src="/odisha_logo.png" width="185px" height="140px" />
          </div>

          <div class={styles.ormas_logo}>
            <a href="www.ormas.org">ORMAS</a>
          </div>

          <div class={styles.shakti_logo}>
            <Image src="/shakti.png" width="110px" height="100px" />
          </div>


        </ul>

      </nav>

      <nav id={styles.maiNave} class={styles.mainNave} >
        <nav class={styles.home} ></nav>
        <ul>
          <Link href={"/"} >
            <a ><li id='home'>Home</li></a>
          </Link>

          <li class="drp">
            <a href="javascript:void(0)" class="dropbtn">About Us</a>
            <div class="dropdown-content">
              <Link href={"/history"} >
                <a href="#">History</a>
              </Link>
              <Link href={"/map"} >
                <a href="#">Map</a>
              </Link>
              <Link href={"/demography"} >
                <a href="#">Demography</a>
              </Link>
              <Link href={"/departments"} >
                <a href="#">Departments</a>
              </Link>
            </div>
          </li>


          <Link href={"/products"} class={styles.li}>
            <a><li>Products</li></a>
          </Link>
          <Link href={"/exhibition"} class={styles.li}>
            <a><li>Exhibition</li></a>
          </Link>

          <li class="drp cursor-pointer">
            <a href="javascript:void(0)" class="dropbtn ">Notice</a>
            <div class="dropdown-content">
              <Link href={"/advertisement"} >
                <a href="#">Advertisement</a>
              </Link>
              <Link href={"/recruitment"} >
                <a href="#">Recruitment</a>
              </Link>
              <Link href={"/tender"} >
                <a href="#">Tender</a>
              </Link>
              <Link href={"/announcement"} >
                <a href="#">Announcement</a>
              </Link>
            </div>
          </li>
          <Link href={"/estore"} class={styles.li}>
            <a><li>E-Store</li></a>
          </Link>
        </ul>
          

          <div onClick={toggleCart} class='hover:cursor-pointer'><AiOutlineShoppingCart id={styles.cart}/></div>
          
          <Link href={"./login"}>
          <div onClick={0} class='hover:cursor-pointer'><MdAccountCircle id={styles.account}/></div>
          </Link>

        <div ref={ref} class="sideCart top-48 right-0  font-black text-orange-100 bg-black py-10 px-5  transition-transform duration-1000 translate-x-full w-80 " id={styles.sidebar}>
        <h2 class='text-center font-serif text-lg'>Shopping cart</h2>
        <div>
        <span  class='absolute top-0 right-3 cursor-pointer '>
          <a><AiFillCloseCircle onClick={remove} class='text-2xl'/></a>
        </span>
        </div>
        <div class='my-5'>
        <ol class='list-decimal px-8'>
          {Object.keys(cart).length ===0 && 
          <div class='text-center font-semibold'>Cart is empty!</div> }
          {Object.keys(cart).map((k)=>{return <li key={k}>
            <div class='item flex'>
              <div class='w-3/5 font-semibold '>
              {cart[k].name}
              </div>
              <div class='flex items-center justify-center w-2/5 font-semibold'>
              <AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} class='cart_buttons text-2xl'/>{cart[k].qty}<AiFillPlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}class='cart_buttons text-2xl'/>
              </div>
            </div>
          </li>})}
        </ol>
        
        <h2 class="absolute bottom-32 ml-20 font-bold">SubTotal: ₹{subTotal}</h2>
        <Link href={"./checkout"}>
        <button class="flex mx-14 my-3 mt-16 text-orange-200 bg-black border-0 py-2 px-8 focus:outline-none hover:bg-orange-100 rounded-lg font-semibold absolute bottom-0 mb-16" id={styles.checkout_button}><BsFillBagCheckFill class='my-1 mx-2 '/> Checkout</button>
        </Link>

        <button onClick={clearCart} class="flex mx-14 my-3 mt-16 text-orange-200 bg-black border-0 py-2 px-8 focus:outline-none hover:bg-orange-100 rounded-lg font-semibold absolute bottom-0" id={styles.checkout_button}><MdDeleteForever class='my-1 mx-2 '/> Clear Cart</button>
        </div>
      </div>
      </nav>
    </div>
  )
}

export default Navbar

