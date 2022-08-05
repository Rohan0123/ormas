import React from 'react'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from 'next/image'
import { AiFillCloseCircle, AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import {BsFillBagCheckFill} from "react-icons/Bs"
import { useRef } from 'react';

const Navbar = () => {
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
    <div>
      <nav className={styles.mainLogo}>
        <ul>
          <div className={styles.odisha_logo}>
            <Image src="/odisha_logo.png" width="185px" height="140px" />
          </div>

          <div className={styles.ormas_logo}>
            <a href="www.ormas.org">ORMAS</a>
          </div>

          <div className={styles.shakti_logo}>
            <Image src="/shakti.png" width="110px" height="100px" />
          </div>


        </ul>

      </nav>

      <nav className={styles.mainNave}>
        <nav className={styles.home}></nav>
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


          <Link href={"/products"} className={styles.li}>
            <a><li>Products</li></a>
          </Link>
          <Link href={"/exhibition"} className={styles.li}>
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
          <Link href={"/estore"} className={styles.li}>
            <a><li>E-Store</li></a>
          </Link>
        </ul>
          <div onClick={toggleCart} className='hover:cursor-pointer'><AiOutlineShoppingCart id={styles.cart}/></div>

        <div ref={ref} className="sideCart top-48 right-0  font-black text-orange-100 bg-black py-10 px-5  transition-transform duration-1000 translate-x-full w-72 " id={styles.sidebar}>
        <h2 className='text-center font-serif text-lg'>Shopping cart</h2>
        <div>
        <span  className='absolute top-0 right-3 cursor-pointer '>
          <a><AiFillCloseCircle onClick={remove} className='text-xl'/></a>
        </span>
        </div>
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
        
        <button class="flex mx-10 my-3 mt-16 text-orange-200 bg-black border-0 py-2 px-8 focus:outline-none hover:bg-orange-100 rounded-lg font-semibold absolute bottom-0" id={styles.checkout_button}><BsFillBagCheckFill className='my-1 mx-2 '/> Checkout</button>
        </div>
      </div>
      </nav>
    </div>
  )
}

export default Navbar

