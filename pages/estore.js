import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/dist/client/image'
import Link from "next/link";
import Product from '../models/Product';
import mongoose from "mongoose"

//import Image from 'next/image'
const ecommerce = ({ products }) => {
  return (
    <div >

      <section class="text-gray-400 bg-black body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap -m-4 w-55 md:ml-52" id={styles.estore_content} >
            {Object.keys(products).map((item) => {
              return <div class="lg:w-1/5 md:w-1/2 p-4  m-auto  w-650" id={styles.estore_border}>
                <Link key={products[item]._id} href={"/product/"+products[item].slug}>
                  <a class="block relative h-55 overflow-hidden rounded-lg" >
                    <img alt="ecommerce" class="m-auto block" src={products[item].img} />

                    <div class="mt-5 text-center md:text-left">
                      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">ORGANIC</h3>
                      <h2 class="text-white title-font text-lg font-medium">{products[item].title}</h2>
                      <p class=" text-orange-200 mt-1">₹{products[item].price}</p>
                      <div class="absolute right-0 bottom-0 mt-1 mr-2 text-white rounded">
                        {products[item].size.includes('50ml') && <span class='border px-1  border-gray-500 mx-1 rounded'> 50ml </span>}
                        {products[item].size.includes('100ml') && <span class='border px-1  border-gray-500  mx-1 rounded'> 100ml </span>}
                        {products[item].size.includes('50gm') && <span class='border px-1  border-gray-500  mx-1 rounded'>50gm</span>}
                        {products[item].size.includes('100gm') && <span class='border px-1  border-gray-500  mx-1 rounded'>100ml</span>}
                        {products[item].size.includes('250gm') && <span class='border px-1  border-gray-500  mx-1 rounded'>250ml</span>}
                        </div>
                    </div>
                  </a>
                </Link>
              </div>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI = "mongodb://localhost:27017/ormasKoraput")
  }

  let products = await Product.find()
  let estore = {}
  for (let item of products) {
    if (item.title in estore) {
      if (!estore[item.title].size.includes(item.size) && item.availableQty > 0) {
        estore[item.title].size.push(item.size)

      }

    }
    else {
      estore[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        estore[item.title].size = [item.size]
      }
    }
  }


  return {
    props: { products: JSON.parse(JSON.stringify(estore)) }, // will be passed to the page component as props
  }
}

export default ecommerce