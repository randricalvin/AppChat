import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [message])


console.log(message)
  return (
    <div ref={ref} className={`flex flex-col w-full px-5 my-5 ${message.senderId === currentUser.uid ? 'items-end' : 'items-start'}`}>
        <div className={`flex ${message.senderId === currentUser.uid ? "flex-row-reverse" : "flex"}`}>
          <div>
            <img src={message.senderId === currentUser.uid 
                    ? currentUser.photoURL 
                    : data.user.photoURL} 
                    alt="" 
                    className="object-cover h-8 w-8 rounded-full" />
          </div>
          <div className='w-5/6'>
            <p className={`flex text-white px-4 py-2 ${message.text ? 'bg-sky-600' : 'bg-transparent'} ${message.senderId === currentUser.uid ? 'mr-2 py-3 px-4 bg-sky-600 rounded-bl-3xl rounded-tl-3xl rounded-br-xl text-white ' : 'ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-bl-xl text-white'}`}>{message.text}</p>
            {message.image && <img src={message.image} alt="" className="w-60 h-60 rounded-lg object-cover" />}
          </div>
        </div>
      </div>
  )
}

export default Message