import React, { useEffect, useState } from 'react'
import { getSessionId } from '../utils/cookie_util'
import axios from 'axios'
import { FaOptinMonster } from 'react-icons/fa'

const RemoteAddForm = () => {
  const [remoteStructure, setRemoteStructure] = useState([])
  const [selectedId, setSelectedId] = useState(0)
  const [remoteName, setRemoteName] = useState('')  


  async function generateRemote(id, remoteName) {
    let sessionId = getSessionId()
    axios({
        method: 'POST',
        url: `https://ecourse.cpe.ku.ac.th/exceed11/api/remote/${id}/generate/`,
        headers: {
            "Authorization": `Bearer ${sessionId}`
        },
        data: {
          "remoteName": remoteName
        }
    })
  }

  async function getRemote() {
    const response = await axios.get('https://ecourse.cpe.ku.ac.th/exceed11/api/remote/all/structure/')
    setRemoteStructure(response.data)
  }

  useEffect(() => {
    getRemote()
  }, [])

  const handleChange = (e) => {
    setSelectedId(e.target.options.selectedIndex)
  }

  const formHandler = (e) => {
    e.preventDefault()
    generateRemote(remoteStructure[selectedId]["remoteId"], remoteName)
  }

  return (
    <div className='add-form-card'>
        <h2>Add Remote</h2>
        <h4>Select your remote:</h4>
        <form onSubmit={formHandler}>
          <select value={selectedId} onChange={handleChange} className='select-remote'>
              {
              remoteStructure.map((option, index) => (
                <option value={index} key={option.remoteId}>({option.remoteId}) {option.remoteName}</option>
              ))
              }
            </select>
          <h4>Remote Name :</h4>
          <input name='remoteName' placeholder='Ex. Air Conditioner' className='input-name' onChange={(e) => setRemoteName(e.target.value)}/>
          <button className='btn-add' type='submit'>
            Add
          </button>
        </form>
    </div>
  )
}

export default RemoteAddForm