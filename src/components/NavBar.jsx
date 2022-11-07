import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import chatchatgopicto from '../assets/chatchatgopicto.svg'

const NavBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex py-2 items-center justify-between px-5 bg-sky-800">
        <img 
            src={chatchatgopicto}
            alt="chatchatgologo"
            className="w-8 h-8 objective-cover">
            </img>
        <div className="flex justify-center items-center">
          <div className="object-cover h-8 w-8 rounded-full">
              <img
                src={currentUser.photoURL}
                className="rounded-full"
                alt=""
              />
            </div>
            <div className="mx-2">
              <div className="text-m font-semibold text-white">
                {currentUser.displayName}
              </div>
            </div>
        </div>     
      </div>
  )
}

export default NavBar