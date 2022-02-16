import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

const RemoteCard = () => {
  return (
    <div>
        <div className='card'>
            <h3>Remote No</h3>
            <button className='btn-remote-remove'>
                Remove Remote
            </button>
            <div className='description-box'>
                <h3>Description</h3>
            </div>
            <button className='btn-power'>
                <FaPowerOff className='power'/>
            </button>
        </div>
    </div>
  )
}

export default RemoteCard