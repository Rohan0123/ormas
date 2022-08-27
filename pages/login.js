import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";

const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    {
        email = email.toLowerCase();
      const data = { email, password };
      let res = await fetch("http://localhost:3000/api/logIn", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      console.log(response);
      console.log(email);
      console.log(password);
      setEmail("");
      setPassword("");
      if (response.success) {
        toast("You're successfully logged in !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
            Router.push("/");
          }, "2000")
        
      } 
      else {
        toast.error(response.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <section class="h-full gradient-form bg-black mx-auto md:h-screen w-2/3">
        <div class="container py-12 px-6 h-full">
          <div class="flex justify-center items-center flex-wrap g-6 text-gray-800 ">
            <div class="xl:w-6/12 " id={styles.login}>
              <div class="block border-1 border-gray-100 bg-black shadow-lg rounded-lg">
                <div class="lg:flex lg:flex-wrap g-0">
                  <div class="lg:w-5/12 px-4 md:px-0">
                    <div class="md:p-12 md:mx-6">
                      <div class="text-center">
                        <div class="mx-24" id={styles.login_ormas_logo}>
                          <a href="www.ormas.org" class="font-serif ">
                            ORMAS
                          </a>
                        </div>
                        <h4 class="text-lg font-semibold mt-1 mb-12 pb-1 text-orange-200">
                          We are The ORMAS Team
                        </h4>
                      </div>
                      <form onSubmit={handleSubmit} method="POST">
                        <p class="mb-4 text-gray-300">
                          Please login to your account
                        </p>
                        <div class="mb-4">
                          <h3 class="text-orange-200">Email:</h3>
                          <input
                            value={email}
                            onChange={handleChange}
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="E-mail"
                            name='email'
                          />
                        </div>
                        <div class="mb-4">
                          <h3 class="text-orange-200">Password:</h3>
                          <input
                            value={password}
                            onChange={handleChange}
                            type="password"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                            placeholder="Password"
                            name='password'
                          />
                        </div>
                        <div class="text-center pt-1 mb-12 pb-1">
                          <button
                            class="inline-block px-6 py-2.5 text-orange-200 border-2 border-orange-200 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-200 hover:text-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-1000 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>
                          <Link href="/forget">
                            <p class="text-gray-300 hover:cursor-pointer hover:text-orange-200">
                              Forgot password?
                            </p>
                          </Link>
                        </div>
                        <div class="flex items-center justify-between pb-6">
                          <p class="mb-0 mr-2 text-orange-200">
                            Don't have an account?
                          </p>
                          <Link href="./signup">
                            <button
                              type="button"
                              class="inline-block px-6 py-2 border-2 border-orange-100 text-orange-200 hover:bg-orange-100 hover:text-black font-medium text-xs leading-tight uppercase rounded  focus:outline-none focus:ring-0 transition duration-1000 ease-in-out"
                            >
                              Create One
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gray-900">
                    <div class="text-orange-200 px-4 py-6 md:p-12 md:mx-6">
                      <h4 class="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p class="text-sm">
                        Thanks for choosing ORMAS. We provide the organic and
                        genuinely chemical free foods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;

/*

style="
                        background: linear-gradient(
                          to right,
                          #ee7724,
                          #d8363a,
                          #dd3675,
                          #b44593
                        );
                      " 

style="
                background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
              "

*/
