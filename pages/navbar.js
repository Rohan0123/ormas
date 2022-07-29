import React from 'react'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from 'next/image'


const Navbar = () => {
  return (
    <>
      <nav className={styles.mainLogo}>
        <ul>
          <div className={styles.odisha_logo}>
            <Image src="/odisha_logo.png" width="185px" height="140px" />
          </div>

          <div className={styles.ormas_logo}>
            <a href="https://nextjs.org">ORMAS</a>
          </div>

          <div className={styles.shakti_logo}>
            <Image src="/shakti.png" width="110px" height="100px" />
          </div>


        </ul>

      </nav>

      <nav className={styles.mainNave}>
      <nav  className={styles.home}></nav>
        <ul>
          <div className={styles.kolab_logo}>
            <Image src="/Kolab_Logo.jpg" width="65px" height="70px" />
          </div>
          <Link href={"/"} >
            <a ><li id='home'>Home</li></a>
          </Link>

          <li class="drp">
                    <a href="javascript:void(0)"  class="dropbtn">About Us</a>
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
          
            <li class="drp">
                    <a href="javascript:void(0)"  class="dropbtn">Notice</a>
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
        </ul>

      </nav>
    </>
  )
}

export default Navbar

