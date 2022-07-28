import '../styles/navbar.css'
import '../styles/globals.css'
import Image from "next/image";
import Navbar from './navbar';

function MyApp({ Component, pageProps }) {
  return<>
  <Navbar/>
  <Component {...pageProps} />
  </> 
}

export default MyApp
