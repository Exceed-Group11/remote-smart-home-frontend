import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

const RemoteCard = ({ remote, onToggle, onDelete }) => {
  return (
    <div>
        <div className='remote-card'>
            <button className='btn-remote-remove' onClick={() => onDelete(remote.remoteId)} >
                Remove Remote
            </button>
            <h2>{remote.remoteName}</h2>
            <button className='btn-power' onClick={() => onToggle(remote.remoteId)}>
                <FaPowerOff className='power'/>
            </button>
        </div>
    </div>
  )
}

export default RemoteCard