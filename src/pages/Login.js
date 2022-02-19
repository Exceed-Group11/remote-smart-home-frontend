import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getObjForm } from '../utils/form';
import { login } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const navigate = useNavigate()

  // const { setUserInfo } = useAuth()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = getObjForm(e.target)
    login(data.username, data.password)
      .then((data) => {
        console.log(data);
        console.log("Login Success.");
        // setUserInfo(data.user)
        navigate('/home')
      })
      .catch((resError) => {
        console.log("Login Error.")
        // setError(resError.response.data)
      })
  }

  return (
    <div>
      <Navbar />
      <div className='container' onSubmit={handleSubmit}>
        <div className='form'>
          <h1>Login</h1>
          <form className='login-form'>
            <h4 className='login-box'>Username :</h4>
            <input type="text" placeholder='username' name='username' onChange={(e) => setUsername(e.target.value)}/>
            <h4 className='login-box'>Password :</h4>
            <input type="password" placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
            <button className='btn-login' type='submit'>Login</button>     
          </form>
        </div>
          <Link to='/register'>Register</Link>
      </div>
    </div>
  )
}

export default Login