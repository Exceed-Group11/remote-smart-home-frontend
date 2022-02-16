import React from 'react'
import { useAuth } from './AuthProvider'


const Navbar = () => {
  const { logout } = useAuth()
  return (
    <nav>
        <h1>Temporary NavBar</h1>
        <button onClick={logout} className='btn-add-remote'>
            logout
        </button>
    </nav>
  )
}

export default Navbar