import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import RemoteAddForm from '../components/RemoteAddForm'

const AddForm = () => {
  return (
    <div>
      <Navbar />
      <div className='return-po'>
        <Link to='/home'>
          <button className='btn-return'>
            Return
          </button>
        </Link>
      </div>
      <RemoteAddForm />
    </div>
  )
}

export default AddForm