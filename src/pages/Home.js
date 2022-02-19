import React, { useState, useEffect } from 'react'
import AddCard from '../components/AddCard'
import Navbar from '../components/Navbar'
import RemoteCard from '../components/RemoteCard'
import { getRemote, deleteRemote } from '../services/remotes'

const Home = () => {
  const [remotes, setRemotes] = useState({})

  useEffect(() => {
    getRemote().then((data) => {
      setRemotes(data)
    })
  }, [])

  const onDeleteRemote = (id) => {
    deleteRemote(id).then(() => {
      setRemotes(remotes => remotes.filter((remote) => remote.remoteId !== id))
    })
  }

  return (
    <div>
      <Navbar />
      <div className='card-list'>
        <AddCard />
        <RemoteCard />
        {remotes.map((remote) => (
          <RemoteCard
            key={remote.remoteId}
            remote={remote}
            onDelete={onDeleteRemote}
          />
        ))}
      </div>
    </div>
  )
}

export default Home