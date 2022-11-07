import React, { useState, useContext } from 'react'
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const SearchBar = () => {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext)

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

  // Select a user search result
  const handleSelect = async(u) => {
    //  Check the group chat in firestore exists, if not create it
    const combinedId = currentUser.uid > user.uid 
    ? currentUser.uid + user.uid 
    : user.uid + currentUser.uid;
    
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // Create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), {messages: []})

        // Create a user chats
        await updateDoc(doc(db, "userchats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
        },
        [combinedId + ".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, "userchats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
        },
        [combinedId + ".date"]: serverTimestamp()
        })
      }
    } 
    catch(err) {
      setErr(true)
      console.log(err)
    }
    
    setUser (null)
    setUserName("")

    dispatch ({type: "CHANGE_USER", payload: u})
  }
    
    

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center'>
          <input
          className="bg-lightGrey my-4 mx-3 h-10 lg:w-full md:w-full sm:w-2/3 pl-5 text-m focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 duration-300"
          name="search"
          type="search"
          placeholder="Find an user"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          />
      </div>
      {err && <p className='text-red-500 text-center'>User not found</p>}
      { user && <div className="flex py-4 px-2 justify-start items-center hover:bg-sky-600 border-b-2 cursor-pointer" onClick={handleSelect}>
          <img
            src={user.photoURL}
            className="object-cover h-10 w-10 rounded-full"
            alt="user avatar"
          />
          <div className="mx-4 text-m font-semibold text-white">
            {user.displayName}
          </div>
      </div>}
    </div>
  )
}

export default SearchBar