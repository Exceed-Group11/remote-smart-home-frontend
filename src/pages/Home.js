import React, { useState, useEffect } from 'react'
import AddCard from '../components/AddCard'
import Navbar from '../components/NavBar'
import RemoteCard from '../components/RemoteCard'
import { deleteRemote } from '../services/remotes'
import axios from 'axios'
import { getSessionId } from '../utils/cookie_util'

const Home = () => {
  const [remotes, setRemotes] = useState([])
  const [remoteState, setRemoteState] = useState(0)

  useEffect(() => {
    getRemoteStatus()
  }, [])

  async function getRemoteStatus() {
    let sessionId = getSessionId()
    const response = await axios({
        method: 'GET',
        url: 'https://ecourse.cpe.ku.ac.th/exceed11/api/remote/',
        headers: {
            "Authorization": `Bearer ${sessionId}`
        }
    })
    setRemotes(response.data)
}

  const onDeleteRemote = (id) => {
    deleteRemote(id).then(() => {
      setRemotes(remotes => remotes.filter((remote) => remote.remoteId !== id))
    })
  }


  async function sendRemoteAction(id) {
    let sessionId = getSessionId()
    axios({
        method: 'POST',
        url: `https://ecourse.cpe.ku.ac.th/exceed11/api/remote/${id}/button/0`,
        headers: {
            "Authorization": `Bearer ${sessionId}`
        }
  })
}

  const onToggleRemote = (id) => {
    sendRemoteAction(id).then(() => {

    })
  }

  return (
    <div>
      <Navbar />
      <div className='card-list'>
        <AddCard />
        {remotes.map((remote) => (
            <RemoteCard
              key={remote.remoteId}
              remote={remote}
              onToggle={onToggleRemote}
              onDelete={onDeleteRemote}
            />
        ))}
      </div>
    </div>
  )
}

export default Home