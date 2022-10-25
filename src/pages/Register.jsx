import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import add from '../assets/add.svg'
import { auth, db, storage } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";



const Register = () => {
  const [err, setErr] = useState(false)
  // const [displayName, setDisplayName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [file, setFile] = useState(null)
  // const navigate = useNavigate ()

  // User registration
  const handleSubmit = async (e) => {
    e.preventDefault()
    // find the data from the form
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]


    try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    
    const user = res.user
    const uid = res.user.uid

    // Upload image to firebase storage for registration
    const storageRef = ref(storage, displayName)

    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on(
      (error) => {
        setErr(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await updateProfile(user, {
            name: displayName,
            photoURL: downloadURL,
          });
          // Add a users in collection in firestore
          await setDoc(doc(db, "users", uid), {
            uid: uid,
            name: displayName,
            email: email,
            photoURL: downloadURL,
          });
          // Add a userchats in database (firestore)
          // await setDoc(doc(db, "userchats", res.user.uid), {});
          //   navigate("/dashboard")
          
        });
      }
    );
    } catch(err) {
      setErr(true)
      console.log(err)
    }
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
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      <div>
                          <label htmlFor="text" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Display name</label>
                          <input 
                          type="text" 
                          name="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="display name" 
                          />
                      </div>
                      <div>
                          <label htmlFor="email" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input 
                          type="email"
                          name="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="name@company.com" 
                          />
                      </div>
                      <div>
                          <label htmlFor="password" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input 
                          type="password"
                          name="password"
                          placeholder="password" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          />
                      </div>
                      <div className="flex items-center">
                          <label htmlFor="file" className="flex cursor-pointer text-sky-600 text-sm font-medium dark:text-white">
                            <img  src={add} alt="add avatar"/>
                            <span className="mx-2">
                              Add your avatar
                            </span>
                          </label>
                          <input 
                          type="file" 
                          id="file"
                          name="file"
                          style={{display: 'none'}}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          />
                      </div>
                      <button 
                      type="submit"
                      className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Create an account
                      </button>
                      {err && <p className="text-red-500 text-xs italic">Something went wrong</p>}
                    </form>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to='/login' className="text-sky-600 font-medium text-primary-600 hover:text-sky-700 hover:underline dark:text-primary-500">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Register