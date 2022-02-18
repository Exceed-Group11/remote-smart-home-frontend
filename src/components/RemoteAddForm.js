import React from 'react'

const RemoteAddForm = () => {
  return (
    <div className='add-form-card'>
        <h2>Add Remote</h2>
        <h4>Remote Name :</h4>
        <input name='remote-name' placeholder='Ex. Air Conditioner' className='input-name' />
        <button className='btn-add'>
          Add
        </button>
    </div>
  )
}

export default RemoteAddForm