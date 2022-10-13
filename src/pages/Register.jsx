import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import add from '../assets/add.svg'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'


const Register = () => {

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setlastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const firstName = e.target[0].value
    const lastName = e.target[1].value
    const email = e.target[2].value
    const password = e.target[3].value
    const file = e.target[4].files[0]

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  return (
    <div>
      <section className="bg-[#a7bcff] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        My AppChat
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                      <div>
                          <label for="text" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                          <input 
                          type="text" 
                          id="text" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="John" 
                          />
                      </div>
                      <div>
                          <label for="text" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                          <input 
                          type="text" 
                          id="text" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="Doe" 
                          />
                      </div>
                      <div>
                          <label for="email" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input 
                          type="email" 
                          id="email" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="name@company.com" 
                          />
                      </div>
                      <div>
                          <label for="password" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input 
                          type="password" 
                          id="password" 
                          placeholder="••••••••" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          />
                      </div>
                      <div className="flex items-center">
                          <label for="file" className="flex cursor-pointer text-sky-600 text-sm font-medium dark:text-white">
                            <img  src={add} alt="add avatar"/>
                            <span className="mx-2">
                              Add your avatar
                            </span>
                          </label>
                          <input 
                          type="file" 
                          id="file" 
                          style={{display: 'none'}}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          />
                      </div>
                      <button 
                      type="submit" 
                      className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Create an account
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Already have an account? <Link to='/login' className="text-sky-600 font-medium text-primary-600 hover:text-sky-700 hover:underline dark:text-primary-500">Login here</Link>
                      </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Register