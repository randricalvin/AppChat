import React, { useContext } from 'react'
import logout from '../assets/logout.svg'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const navigate = useNavigate()

  const { currentUser } = useContext(AuthContext);

  // User logout
  const handleLogout =  () => {
    signOut(auth)
    navigate('/login')
  }
  return (
    <div className="flex items-center justify-around h-14 bg-sky-800 rounded-t-lg">
        <h1 className="text-lg font-bold text-white">My AppChat</h1>
        
        <div className="flex justify-center">
          <div>
              <img
                src={currentUser.photoURL}
                className="object-cover h-6 w-6 rounded-full"
                alt=""
              />
            </div>
            <div className="mx-2">
              <div className="text-m font-semibold text-white">
                {currentUser.displayName}
              </div>
            </div>
        </div>
        {/* button sign out to send in the login page */}
        <button onClick={handleLogout}>
          <img src={logout} alt="logout" className="h-6 w-6"/>
        </button>
      </div>
  )
}

export default NavBar