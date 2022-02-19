import React from 'react'
import { Link} from 'react-router-dom'
import Navbar from '../components/NavBar'
import { useState } from 'react'
import { getObjForm } from '../utils/form';
import { register } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';


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
      .catch((resError) => {
        console.log("Register Error.")
        setError(resError.response.data)
      })
  }

  return (
    <div className='register-page'>
      <Navbar />
      <div className='register-container' onSubmit={handleSubmit}>
        <h1>Register</h1>
        {error && <Alert isLogin={false} />}
        <form className='register-form'>
          <h4 className='register-usr'>Username :</h4>
          <input type="text" placeholder='username' name='username' className='register-box' onChange={(e) => setUsername(e.target.value)}/>
          <h4 className='register-pass'>Password :</h4>
          <input type="password" placeholder='password' name='password' className='register-box' onChange={(e) => setPassword(e.target.value)}/>
          <h4 className='register-conpass'>Confirm Password :</h4>
          <input type="password" placeholder='confirm password' name='confirmPassword' className='register-box' onChange={(e) => setConfirmPassword(e.target.value)}/>
          <h4 className='register-hid'>Hardware ID :</h4>
          <input type="text" placeholder='hardware ID' name='hardwareId' className='register-box' onChange={(e) => setHardwareId(e.target.value)}/>
        </form>          
        <button className='btn-register' type='submit'>Register</button>     
      </div>
    </div>
  )
}

export default Register