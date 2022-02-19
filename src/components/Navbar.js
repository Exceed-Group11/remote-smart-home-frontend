import React from 'react'
import { logout } from '../services/auth'
// import { getRemote } from '../services/remotes'

const Navbar = () => {
  return (
    <nav>
        <h1>Remote กระติ๊บมหัศจรรย์</h1>
        <button onClick={logout} className='btn-add-remote'>
        logout
        </button>
    </nav>
  )
}

export default Navbar