import React from 'react'
import styles from "../styles/Home.module.css";
import Link from 'next/link';

const login = () => {
    return (
        <div>
            <section className="h-full gradient-form bg-black mx-auto md:h-screen w-2/3">
                <div className="container py-12 px-6 h-full">
                    <div className="flex justify-center items-center flex-wrap g-6 text-gray-800 ">
                        <div className="xl:w-6/12 " id={styles.login}>
                            <div className="block border-1 border-gray-100 bg-black shadow-lg rounded-lg">
                                <div className="lg:flex lg:flex-wrap g-0">
                                    <div className="lg:w-5/12 px-4 md:px-0">
                                        <div className="md:p-12 md:mx-6">
                                            <div className="text-center">
                                                <div className='mx-24' id={styles.login_ormas_logo}>
                                                <a href="www.ormas.org" className='font-serif '>ORMAS</a>
                                                </div>
                                                <h4 className="text-lg font-semibold mt-1 mb-12 pb-1 text-orange-200">We are The ORMAS Team</h4>
                                            </div>
                                            <form>
                                                <p className="mb-4 text-gray-300">Please login to your account</p>
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Username"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <input
                                                        type="password"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <div className="text-center pt-1 mb-12 pb-1">
                                                    <button
                                                        className="inline-block px-6 py-2.5 text-orange-200 border-2 border-orange-200 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-200 hover:text-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-1000 ease-in-out w-full mb-3"
                                                        type="button"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        
                                                    >
                                                        Log in
                                                    </button>
                                                    <a className="text-gray-400" href="#!">Forgot password?</a>
                                                </div>
                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 mr-2 text-orange-200">Don't have an account?</p>
                                                    <Link href="./signup">
                                                    <button
                                                        type="button"
                                                        className="inline-block px-6 py-2 border-2 border-orange-100 text-orange-200 hover:bg-orange-200 hover:text-black font-medium text-xs leading-tight uppercase rounded  focus:outline-none focus:ring-0 transition duration-1000 ease-in-out"
                                                       
                                                    >
                                                        Create One
                                                    </button>
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gray-900"
                                        
                                    >
                                        <div className="text-orange-200 px-4 py-6 md:p-12 md:mx-6">
                                            <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                                            <p className="text-sm">
                                                Thanks for choosing ORMAS. We provide the organic and genuinely chemicals free foods.
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
    )
}

export default login

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