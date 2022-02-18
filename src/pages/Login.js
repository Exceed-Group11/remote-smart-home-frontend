import React from 'react'
import { Link } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='pic'></div>
        <div className='form'>
          <h1>Login</h1>
          <AuthForm isRegister={false}/>
          <Link to='/register'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login