import React from 'react'
import Chat from '../components/Chat'
import SlideBar from '../components/SlideBar'

const Dashboard = () => {
  return (
    <div className='flex dashboard font-sans'>
      <SlideBar />
      <Chat />
    </div>
     
  )
}

export default Dashboard