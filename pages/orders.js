import React from "react";
import mongoose from "mongoose";
import Order from "../models/Order";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const orders = (user) => {
  const router = useRouter();
  useEffect(() => {
    if(!localStorage.getItem("token")){
        router.push('/');
    }
  }, []);

  return (
    <div className="mx-40">
      <div className="container bg-orange-50 h-auto mx-auto my-2 text-black text-xl text-center font-bold shadow-xl py-2">
        My Orders
      </div>
      <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-orange-100 rounded-lg border-b ">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Larry
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Wild
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(
      (process.env.MONGO_URI = "mongodb://localhost:27017/ormasKoraput")
    );
  }

  let orders = await Order.find({  });
  return {
    props: {orders: orders}, // will be passed to the page component as props
  };
}
export default orders;
