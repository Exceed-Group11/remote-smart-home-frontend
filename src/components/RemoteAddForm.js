import React, { useEffect, useState } from 'react'
import { getSessionId } from '../utils/cookie_util'
import axios from 'axios'

const RemoteAddForm = () => {
  const [remoteStructure, setRemoteStructure] = useState([])
  const [selectedId, setSelectedId] = useState('')
  


  async function generateRemote(id, remoteName) {
    let sessionId = getSessionId()
    axios({
        method: 'POST',
        url: `https://ecourse.cpe.ku.ac.th/exceed11/api/remote/${id}/generate/`,
        headers: {
            "Authorization": `Bearer ${sessionId}`
        },
        data: {
          "remoteName": {remoteName}
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
    console.log(e)
    setSelectedId(e.value)
  }

  return (
    <div className='add-form-card'>
        <h2>Add Remote</h2>
        <select value="1" onChange={handleChange}>
            {remoteStructure.map((option) => (
              <option value={option.remoteId} key={option.remoteId}>{option.remoteId}</option>
            ))}
          </select>
        <h4>Remote Name :</h4>
        <input name='remoteName' placeholder='Ex. Air Conditioner' className='input-name' />
        <button className='btn-add' type='submit'>
          Add
        </button>
    </div>
  )
}

export default RemoteAddForm