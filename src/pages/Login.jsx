import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import chatchatgologo from '../assets/chatchatgologo.svg'


const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  // User registration
  const handleSubmit = async (e) => {
    e.preventDefault()
    // User connect to the login page
    const email = e.target[0].value
    const password = e.target[1].value


    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/dashboard')
    } catch(err) {
      setErr(true)
      console.log(err)
    }
}

  return (
    <div>
      <section className="bg-[#0369a1] dark:bg-gray-900 login">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                  <div className='flex justify-center'>
                    <img 
                    src={chatchatgologo}
                    alt="chatchatgologo"
                    className="w-32 h-32">
                    </img>
                  </div>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      <div>
                          <label htmlFor="email" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="name@company.com" 
                          required/>
                      </div>
                      <div>
                          <label htmlFor="password" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input 
                          type="password" 
                          name="password" 
                          id="password" 
                          placeholder="••••••••" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          required/>
                      </div>
                      <button 
                      type="submit" 
                      className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Sign in
                      </button>
                      {err && <p className="text-red-500 text-xs italic">Something went wrong</p>}
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don't have an account? <Link to='/register' className="text-sky-600 font-medium text-primary-600 hover:text-sky-700 hover:underline dark:text-primary-500">Create an account</Link>
                      </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Login