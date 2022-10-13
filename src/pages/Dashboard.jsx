import React from 'react'
import Chat from '../components/Chat'
import SlideBar from '../components/SlideBar'

const Dashboard = () => {
  return (
    <div className="dashboard bg-[#a7bcff]">
      <div className='flex w-5/6 container mx-auto shadow-lg rounded-lg bg-white'> 
        <div className='w-1/3 bg-sky-700 rounded-lg'>
          <SlideBar />
        </div>
        <div className="w-2/3 flex items-end">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Dashboard