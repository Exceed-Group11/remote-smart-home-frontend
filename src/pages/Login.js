import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import { getObjForm } from '../utils/form';
import { login } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
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
        setError(resError.response.data)
      })
  }

  return (
    <div className='login-page'>
      <Navbar />
      <div className='login-container'>
        <h1>Login</h1>
        {error && <Alert isLogin={true} />}
        <form className='login-form' onSubmit={handleSubmit}>
          <h4 className='login-usr'>Username :</h4>
          <input type="text" placeholder='username' name='username' className='login-box' onChange={(e) => setUsername(e.target.value)}/>
          <h4 className='login-pass'>Password :</h4>
          <input type="password" placeholder='password' name='password' className='login-box' onChange={(e) => setPassword(e.target.value)}/>
          <button className='btn-login' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login