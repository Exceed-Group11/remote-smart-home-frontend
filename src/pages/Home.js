import React, { useState, useEffect } from 'react'
import AddCard from '../components/AddCard'
import Navbar from '../components/NavBar'
import RemoteCard from '../components/RemoteCard'
import { deleteRemote } from '../services/remotes'
import axios from 'axios'
import { getSessionId } from '../utils/cookie_util'

const Home = () => {
  const [remotes, setRemotes] = useState([])
  const [remoteState, setRemoteState] = useState(false)
  let a = false;

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

async function getRemoteStatusById(id) {
  let sessionId = getSessionId()
  const response = await axios({
      method: 'GET',
      url: `https://ecourse.cpe.ku.ac.th/exceed11/api/remote/${id}/`,
      headers: {
          "Authorization": `Bearer ${sessionId}`
      }
  })
 await  setRemoteState(response.data.structure["0"].state)
 a = response.data.structure["0"].state;
}

  const onDeleteRemote = (id) => {
    deleteRemote(id).then(() => {
      setRemotes(remotes => remotes.filter((remote) => remote.remoteId !== id))
    })
  }


  async function sendRemoteAction(id, state) {
    let sessionId = getSessionId()
   return  axios({
        method: 'POST',
        url: `https://ecourse.cpe.ku.ac.th/exceed11/api/remote/${id}/button/0/`,
        headers: {
            "Authorization": `Bearer ${sessionId}`
        },
        data: {
          "state": state
        }
  })
}

  const onToggleRemote = async  (id) => {
    await getRemoteStatusById(id)
    let status = a === remoteState ? !remoteState : remoteState;
    return sendRemoteAction(id, status).then(() => {
      setRemotes(remotes => remotes.filter((remote) => remote.remoteId === id))
      console.log('Send Success.')
      setRemoteState(status)
      a = !a;
      window.location.reload()
    }).catch((e) => {
        console.error(e)
        switch (e.response.status) {
          case 504:
            alert('Hardware not responding.')
            break;
          case 401:
            alert("Unauthorized access")
            break;
          default: 
          // alert('Unknown error.')
            break;
        }
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
              state={remote.structure[0].state}
            />
        ))}
      </div>
    </div>
  )
}

export default Home