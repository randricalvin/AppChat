import React, { useState, useEffect, useContext } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Chats = () => {
  const [chats, setChats] = useState([])

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
      const getChats = () => {
      const unsub = onSnapshot(doc(db, "userchats", currentUser.uid ), (doc) => {
        setChats(doc.data())
    });

    return () => {
      unsub()
    }
  }
    currentUser.uid && getChats()
  }, [currentUser.uid]);

  console.log (Object.entries(chats))

  return (
    <div>
      {Object.entries(chats).map((chat) => (
          <div className="flex py-4 px-2 justify-start items-center hover:bg-sky-600 border-b-2 cursor-pointer" key={chat[0]}>
              <img
                src={chat[1].userInfo.photoURL}
                className="object-cover h-10 w-10 rounded-full"
                alt=""
              />
            <div className="mx-4">
              <div className="text-m font-semibold text-white">{chat[1].userInfo.displayName}</div>
              <p className="text-white">{chat[1].userInfo.lastMessage?.text}</p>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Chats