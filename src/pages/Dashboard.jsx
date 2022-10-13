import React from 'react'
import Chat from '../components/Chat'
import SlideBar from '../components/SlideBar'

const Dashboard = () => {
  return (
    <div className="dashboard bg-[#a7bcff]">
      <div className='flex container w-5/6 mx-auto shadow-lg rounded-lg bg-white'> 
          <SlideBar />
          <Chat />
      </div>
    </div>
  )
}

export default Dashboard