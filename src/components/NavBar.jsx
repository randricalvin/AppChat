import React from 'react'
import logout from '../assets/logout.svg'

const NavBar = () => {
  return (
    <div className="flex items-center justify-around h-14 bg-sky-800 rounded-t-lg">
        <h1 className="text-lg font-bold text-white">My AppChat</h1>
        
        <div className="flex justify-center">
          <div>
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-6 w-6 rounded-full"
                alt=""
              />
            </div>
            <div className="mx-2">
              <div className="text-m font-semibold text-white">John Doe</div>
            </div>
        </div>

        <button>
          <img src={logout} alt="logout" className="w-6 h-6" />
        </button>
      </div>
  )
}

export default NavBar