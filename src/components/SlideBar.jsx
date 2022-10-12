import React from 'react'
import NavBar from './NavBar'

const SlideBar = () => {
  return (
    <div>
        <NavBar />
        <div
          className="flex py-4 px-2 justify-start items-center hover:bg-sky-600 border-b-2"
        >
          <div className="">
            <img
              src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
              className="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div className="mx-4">
            <div className="text-lg font-semibold text-white">Luis1994</div>
            <span className="text-white">Pick me at 9:00 Am</span>
          </div>
        </div>
    </div>
  )
}

export default SlideBar