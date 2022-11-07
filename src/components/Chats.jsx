import React, { useState, useEffect, useContext } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([])

  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)


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

  const handleSelect = (u) => {
    dispatch({type: "CHANGE_USER", payload:u})
  }

  return (
    <div>
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
          <div className="flex py-4 px-2 justify-start items-center hover:bg-sky-600 border-b-2 duration-200 cursor-pointer" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
              <img
                src={chat[1].userInfo.photoURL}
                className="object-cover h-10 w-10 rounded-full"
                alt=""
              />
            <div className="mx-4">
              <div className="text-m font-semibold text-white">{chat[1].userInfo.displayName}</div>
              <p className="text-white">{chat[1].lastMessage?.text.substring(0, 40)}</p>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Chats