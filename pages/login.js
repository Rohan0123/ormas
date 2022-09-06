import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import { useEffect } from "react";

const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    if(localStorage.getItem('token')){
      Router.push('/')
    }
  }, [])
  
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
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/logIn`, {
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
        localStorage.setItem('token', response.token)
        toast("You're successfully logged in !", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
            Router.push(process.env.NEXT_PUBLIC_HOST);
          }, "2000")
        
      } 
      else {
        toast.error(response.error, {
          position: "top-right",
          autoClose: 3000,
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
      <section className="h-full gradient-form bg-black mx-auto md:h-screen w-2/3">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap g-6 text-gray-800 ">
            <div className="xl:w-6/12 " id={styles.login}>
              <div className="block border-1 border-gray-100 bg-black shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-5/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <div className="mx-24" id={styles.login_ormas_logo}>
                          <a href="www.ormas.org" className="font-serif ">
                            ORMAS
                          </a>
                        </div>
                        <h4 className="text-lg font-semibold mt-1 mb-12 pb-1 text-orange-200">
                          We are The ORMAS Team
                        </h4>
                      </div>
                      <form onSubmit={handleSubmit} method="POST">
                        <p className="mb-4 text-gray-300">
                          Please login to your account
                        </p>
                        <div className="mb-4">
                          <h3 className="text-orange-200">Email:</h3>
                          <input
                            value={email}
                            onChange={handleChange}
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="E-mail"
                            name='email'
                          />
                        </div>
                        <div className="mb-4">
                          <h3 className="text-orange-200">Password:</h3>
                          <input
                            value={password}
                            onChange={handleChange}
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                            placeholder="Password"
                            name='password'
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-orange-200 border-2 border-orange-200 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-200 hover:text-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-1000 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>
                          <Link href="/forget">
                            <p className="text-gray-300 hover:cursor-pointer hover:text-orange-200">
                              Forgot password?
                            </p>
                          </Link>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2 text-orange-200">
                            Don't have an account?
                          </p>
                          <Link href="./signup">
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 border-orange-100 text-orange-200 hover:bg-orange-100 hover:text-black font-medium text-xs leading-tight uppercase rounded  focus:outline-none focus:ring-0 transition duration-1000 ease-in-out"
                            >
                              Create One
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gray-900">
                    <div className="text-orange-200 px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
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
