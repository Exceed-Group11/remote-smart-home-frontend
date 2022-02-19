import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AddCard = () => {
  return (
    <div className='remote-card'>
      <h1>Add Remote</h1>
      <Link to="/addform">
        <button className='btn-remote-add'>
          <FaPlus className='plus' />
        </button>
      </Link>
    </div>
  )
}

export default AddCard