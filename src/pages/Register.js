import React from 'react'
import { Link } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import Navbar from '../components/Navbar'

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='pic'></div>
        <div className='form'>
          <h1>Register</h1>
          <AuthForm isRegister={true}/>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register