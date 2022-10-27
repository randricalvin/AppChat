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
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div>
        <img src={message.senderId === currentUser.uid 
                ? currentUser.photoURL 
                : data.user.photoURL} 
                alt="" 
                className="object-cover h-8 w-8 rounded-full"
                />

        <span>just now</span>
      </div>
      <div>
        <p>{message.text}</p>
        {message.image && <img 
        src={message.image} 
        alt=""
        className='w-1/2 object-cover' />}
      </div>
      
      
      
      
      
      
      
      {/* <div className="px-5 flex flex-col">
        <div className="flex flex-col mt-5">
          <div className="flex justify-end mb-4">
            <img
              src={message.senderId === currentUser.uid 
                ? currentUser.photoURL 
                : data.user.photoURL}
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <p
              className="mr-2 py-3 px-4 bg-sky-600 rounded-bl-3xl rounded-tl-3xl rounded-br-xl text-white"
            >
              {message.text}
            </p>
          </div>
            {message.image && <img
              src={message.image}
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />}
        </div>
      </div> */}
    </div>
  )
}

export default Message