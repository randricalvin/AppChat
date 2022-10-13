import React from 'react'
import camera from '../assets/camera.svg'
import adduser from '../assets/adduser.svg'
import option from '../assets/option.svg'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='w-2/3 chat'>
      <div className='flex justify-between px-2 items-center text-m text-white font-bold bg-sky-800 rounded-tr-lg h-14'>
        <span className='mx-auto'>Luis1994</span>
        <div className='flex gap-6'>
          <img src={camera} alt="camera" className='w-6 h-6'/>
          <img src={adduser} alt="add user" className='w-6 h-6'/>
          <img src={option} alt="option" className='w-6 h-6'/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat