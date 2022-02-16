import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddCard = () => {
  return (
    <div className='card'>
        <h1>Add Remote</h1>
        <button className='btn-remote-add'>
            <FaPlus className='plus' />
        </button>
    </div>
  )
}

export default AddCard