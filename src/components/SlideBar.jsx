import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import Chats from './Chats'

const SlideBar = () => {
  return (
    <div className='w-1/3 bg-sky-700 rounded-lg'>
        <NavBar />
        <SearchBar />
        <Chats />
    </div>
  )
}

export default SlideBar