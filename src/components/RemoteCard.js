import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

const RemoteCard = () => {
  return (
    <div>
        <div className='card'>
            <button className='btn-remote-remove'>
                Remove Remote
            </button>
            <h2>Remote Name</h2>
            <button className='btn-power'>
                <FaPowerOff className='power'/>
            </button>
        </div>
    </div>
  )
}

export default RemoteCard