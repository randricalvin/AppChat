import React, { useContext } from 'react'
import logout from '../assets/logout.svg'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'
import { useNavigate } from "react-router-dom";


const Chat = () => {
  const { data } = useContext(ChatContext)

  const navigate = useNavigate()

  // User logout
  const handleLogout =  () => {
    signOut(auth)
    navigate('/login')
  }

  return (
    <div className='w-2/3 chat'>
      <div className='flex py-2 items-center text-white font-bold bg-sky-800'>
          <div className='flex items-center chat-bar w-full'>
            <div className='flex w-full items-center justify-center'>
              <div className='mx-3'>
                <img src={data.user?.photoURL} alt={data.user.displayName} className="object-cover h-8 w-8 rounded-full" />
              </div>
              <div>
                <span>{data.user?.displayName}</span>
              </div>
            </div>
            <div className='flex justify-end mr-5'>
              <button onClick={handleLogout}>
                <img src={logout} alt="logout" className="h-8 w-8"/>
              </button>
            </div>
          </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat