import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

import {
  AiFillCloseCircle,
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/Bs";
import {
  MdDeleteForever,
  MdAccountCircle,
  MdOutlineAccountCircle,
} from "react-icons/Md";
import { SiHackthebox } from "react-icons/Si";
import { useRef } from "react";
import { useState } from "react";

const Navbar = ({
  
  logout,
  user,
  cart,
  plusToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  console.log(user);

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("-translate-x-2");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("-translate-x-2");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();

  const remove = () => {
    ref.current.classList.remove("-translate-x-2");
    ref.current.classList.add("translate-x-full");
  };

  const [dropdown, setDropdown] = useState(false);
  
  console.log({ cart, user });
  return (
    <div>
      <ToastContainer />
      <nav id={styles.mainLogo}>
        <ul>
          <div className={styles.odisha_logo}>
            <Image
              src="/odisha_logo.png"
              width="100px"
              height="90px"
              id={styles.mainLogo_image}
              alt="OdishaLogo"
            /> {/* Image */}
          </div>

          <div className={styles.kolab_logo}>
            <Image
              src="/Kolab_logo.png"
              width="75px"
              height="90px"
              id={styles.mainLogo_image}
              alt="KolabLogo"
            />
          </div>

          <div className={styles.ormas_logo}>
            <a href="//www.ormas.org">ORMAS</a>
          </div>
        </ul>
      </nav>

      <nav id={styles.maiNave} className={styles.mainNave}>
        <ul id={styles.nav_ul}>
          <Link href={"/"}>
            <a>
              <li>Home</li>
            </a>
          </Link>

          <Link href={"/products"}>
            <a>
              <li>Products</li>
            </a>
          </Link>
          <Link href={"/exhibition"}>
            <a>
              <li>Exhibition</li>
            </a>
          </Link>

          <li className="drp cursor-pointer">
            <a href="javascript:void(0)" className="dropbtn text-black">
              Notice
            </a>
            <div className="dropdown-content">
              <Link href={"/advertisement"}>
                <a href="#">Advertisement</a>
              </Link>
              <Link href={"/recruitment"}>
                <a href="#">Recruitment</a>
              </Link>
              <Link href={"/tender"}>
                <a href="#">Tender</a>
              </Link>
              <Link href={"/announcement"}>
                <a href="#">Announcement</a>
              </Link>
            </div>
          </li>

          <li className="drp ">
            <a href="javascript:void(0)" className="dropbtn text-black">
              About Us
            </a>
            <div className="dropdown-content">
              <Link href={"/history"}>
                <a href="#">History</a>
              </Link>
              <Link href={"/map"}>
                <a href="#">Map</a>
              </Link>
              <Link href={"/demography"}>
                <a href="#">Demography</a>
              </Link>
              <Link href={"/departments"}>
                <a href="#">Departments</a>
              </Link>
            </div>
          </li>
        </ul>

        <div
          className="absolute top-28 right-10 flex flex-row text-black mx-2 text-2xl d-none"
          id={styles.nav_buttons}
        >
          <a
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
          >
            {user.value && dropdown && (
              <div onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
              className="absolute top-6 right-20 bg-orange-100 text-sm h-36 w-36 rounded-md px-5 border border-black z-10">
                <ol>
                  <Link href={"./myaccount"}>
                    <li className="py-2 hover:font-bold hover cursor-pointer mt-1.5">
                    <div className="flex flex-row">
                      <MdOutlineAccountCircle className="text-lg mr-1" />
                      My Account
                    </div>
                  </li>
                  </Link>
                  <Link href={"/order"}><li className="py-2 hover:font-bold hover cursor-pointer mt-1.5">
                    <div className="flex flex-row">
                      <SiHackthebox className="text-lg mr-1" />
                      Orders
                    </div>
                  </li></Link>
                  <li onClick={logout} className="py-2 hover:font-bold hover cursor-pointer mt-1.5">
                    <div className="flex flex-row">
                      <AiOutlineLogout className="text-lg mr-1" />
                      Logout
                    </div>
                  </li>
                </ol>
              </div>
            )}
          {user.value &&<div><MdAccountCircle /></div> }
          
          </a>

          {!user.value && (
            <Link href={"/login"}>
              <button
                className="mx-2 text-black font-semibold  text-sm p-1 px-2 rounded-lg "
                id={styles.login_button}
              >
                LogIn
              </button>
            </Link>
          )}
          <div onClick={toggleCart} className="hover:cursor-pointer ml-5 ">
            <AiOutlineShoppingCart />
          </div>
          <h2 className=" text-black mx-2 text-lg ">{Object.keys(cart).length}</h2>
        </div>

        <div
          ref={ref}
          className="sideCart top-48 right-0  font-black text-orange-100 bg-black py-10 px-5  transition-transform duration-1000 translate-x-full w-80 "
          id={styles.sidebar}
        >
          <h2 className="text-center font-serif text-lg ">Shopping cart</h2>
          <div>
            <span className="absolute top-3 right-3 cursor-pointer ">
              <a>
                <AiFillCloseCircle onClick={remove} className="text-2xl" />
              </a>
            </span>
          </div>
          <div className="my-5">
            <ol className="list-decimal px-8">
              {Object.keys(cart).length === 0 && (
                <div className="text-center font-semibold">Cart is empty!</div>
              )}
              {Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="item flex">
                      <div className="w-3/5 font-semibold ">
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
                              cart[k].variant,
                              cart[k].availableQty
                            );
                          }}
                          className="cart_buttons text-2xl hover:cursor-pointer"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <h2 className="absolute bottom-32 ml-24 font-bold">
              SubTotal: ₹{subTotal}
            </h2>
            <Link href={"/checkout"}>
              <button
                className="flex mx-14 my-3 mt-16 text-orange-200 bg-black border-0 py-2 px-8 focus:outline-none hover:bg-orange-100 rounded-lg font-semibold absolute bottom-0 mb-16"
                id={styles.checkout_button}
              >
                <BsFillBagCheckFill className="my-1 mx-2 " /> Checkout
              </button>
            </Link>

            <button
              onClick={clearCart}
              className="flex mx-14 my-3 mt-16 text-orange-200 bg-black border-0 py-2 px-8 focus:outline-none hover:bg-orange-100 rounded-lg font-semibold absolute bottom-0"
              id={styles.checkout_button}
            >
              <MdDeleteForever className="my-1 mx-2 " /> Clear Cart
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
