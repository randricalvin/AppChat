import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase'

const SearchBar = () => {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async() => {
  // Search for a user in the database
  const q = query(collection(db, "users"), where("displayName", "==", userName));

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUser(doc.data())
    });
  }
  catch(err) {
    setErr(true)
    console.log(err)
  }}

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }


  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center'>
          <input
          className="bg-lightGrey my-4 h-10 lg:w-5/6 md:w-4/6 sm:w-2/3 pl-5 text-m focus:outline-none rounded-lg"
          name="search"
          type="search"
          placeholder="Find an user"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
          />
      </div>
      {err && <p className='text-red-500 text-center'>User not found</p>}
      { user && <div className="flex py-4 px-2 justify-start items-center hover:bg-sky-600 border-b-2">
        <div>
          <img
            src={user.photoURL}
            className="object-cover h-10 w-10 rounded-full"
            alt=""
          />
        </div>
        <div className="mx-4">
          <div className="text-m font-semibold text-white">
            {user.displayName}
          </div>
          <p className="text-white">Pick me at 9:00 Am</p>
        </div>
      </div>}
    </div>
  )
}

export default SearchBar