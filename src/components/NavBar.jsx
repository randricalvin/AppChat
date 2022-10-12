import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="flex justify-center gap-10">
            <Link to='/'>
                Home
            </Link>
            <Link to='/login'>
                Login
            </Link>
            <Link to='/register'>
                Register
            </Link>
        </nav>
    </div>
  )
}

export default NavBar