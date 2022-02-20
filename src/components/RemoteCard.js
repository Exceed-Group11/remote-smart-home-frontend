import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

const RemoteCard = ({ remote, onToggle, onDelete, state }) => {
  return (
    <div>
        <div className='remote-card'>
            <button className='btn-remote-remove' onClick={() => onDelete(remote.remoteId)} >
                Remove Remote
            </button>
            <h2>{remote.remoteName}</h2>
            {state && 
              <button 
                className='btn-power' 
                onClick={() => onToggle(remote.remoteId)}
                style={{
                  backgroundColor: 'green'
                }}
              >
                <FaPowerOff className='power'/>
              </button>
            }
            {!state && 
              <button 
                className='btn-power' 
                onClick={() => onToggle(remote.remoteId)}
                style={{
                  backgroundColor: 'red'
                }}
              >
                <FaPowerOff className='power'/>
              </button>
            }
            {/* <button className='btn-power' onClick={() => onToggle(remote.remoteId)}>
                <FaPowerOff className='power'/>
            </button> */}
        </div>
    </div>
  )
}

export default RemoteCard