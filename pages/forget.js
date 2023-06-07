import React from 'react'
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import { useEffect } from 'react';
import Router from 'next/router';

const Forget = () => {
  useEffect(() => {
    if(localStorage.getItem('token')){
      Router.push('/')
    }
  }, [])
  return (
    <div>
        <section className="h-full gradient-form bg-black mx-auto md:h-screen w-2/3">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap g-6 text-gray-800 ">
            <div className="xl:w-full " id={styles.signup}>
              <div className="block border-1 border-gray-100 bg-black shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-full px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <div className='mx-28' id={styles.login_ormas_logo}>
                          <a href="www.ormas.org" className='font-serif '>ORMAS</a>
                        </div>
                        <h4 className="text-lg font-semibold mt-1 mb-12 pb-1 text-orange-200">We are The ORMAS Team</h4>
                      </div>
                      <form>
                        <p className="mb-4 text-gray-300">Please reset your password</p>
                        <div className="mb-4">
                        <h3 className='text-orange-200'>Name:</h3>
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="mb-4">
                        <h3 className='text-orange-200'>E-mail:</h3>

                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="e-mail"
                            placeholder="E-mail"
                          />
                        </div>
                        
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-orange-200 border-2 border-orange-200 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-200 hover:text-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-1000 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"

                          >
                            Reset Password
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2 text-orange-200">If you know the password?</p>
                          <Link href="./login">
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 border-orange-100 text-orange-200 hover:bg-orange-200 hover:text-black font-medium text-xs leading-tight uppercase rounded  focus:outline-none focus:ring-0 transition duration-1000 ease-in-out"

                            >
                              Log In
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Forget