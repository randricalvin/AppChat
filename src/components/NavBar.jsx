import React from 'react'

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold ml-2 text-white">My AppChat</h1>
        <div
          className="flex py-4 px-2 justify-start items-center"
        >
          <div className="">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div className="mx-4">
            <div className="text-lg font-semibold text-white">John Doe</div>
          </div>
        </div>
      </div>
  )
}

export default NavBar