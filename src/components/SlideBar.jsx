import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import Chats from './Chats'

const SlideBar = () => {
  return (
    <div className='lg:w-1/3 bg-sky-700 rounded-lg slidebar border-r-2'>
        <NavBar />
        <SearchBar />
        <Chats />
    </div>
  )
}

export default SlideBar