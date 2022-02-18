import React from 'react'
import { useAuth } from './AuthProvider'


const Navbar = (props) => {
  const { logout } = useAuth()
  return (
    <nav>
        <h1>Remote Smart Home</h1>
        {props.isHome && <button onClick={logout} className='btn-add-remote'>
            logout
        </button>}
    </nav>
  )
}

export default Navbar