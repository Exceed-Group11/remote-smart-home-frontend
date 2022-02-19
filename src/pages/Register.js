import React from 'react'
import { Link} from 'react-router-dom'
import Navbar from '../components/NavBar'
import { useState } from 'react'
import { getObjForm } from '../utils/form';
import { register } from '../services/auth';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [hardwareId, setHardwareId] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState({})
  const navigate = useNavigate()
  // const { setUserInfo } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = getObjForm(e.target)
    console.log(data);
    register(data.username, data.password, data.hardwareId)
      .then((data) => {
        console.log(data)
        console.log("Register Success.")
        // setUserInfo(data.user)
        navigate('/')
      })
      .catch(() => {
        console.log("Register Error.")
        // setError(resError.response.data)
      })
  }

  return (
    <div>
      <Navbar />
      <div className='container' onSubmit={handleSubmit}>
        <div className='form'>
          <h1>Register</h1>
          <form className='register-form'>
            <h4 className='register-box'>Username :</h4>
            <input type="text" placeholder='username' name='username' onChange={(e) => setUsername(e.target.value)}/>
            <h4 className='register-box'>Password :</h4>
            <input type="password" placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
            <h4 className='register-box'>Confirm Password :</h4>
            <input type="password" placeholder='confirm password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}/>
            <h4 className='register-box'>Hardware ID :</h4>
            <input type="text" placeholder='hardware ID' name='hardwareId' onChange={(e) => setHardwareId(e.target.value)}/>
            <button className='btn-register' type='submit'>Register</button>     
          </form>          
          <Link to='/'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register