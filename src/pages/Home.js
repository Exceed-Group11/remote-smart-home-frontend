import React from 'react'
import AddCard from '../components/AddCard'
import RemoteCard from '../components/RemoteCard'

const Home = () => {
  return (
    <div>
        <div className='card-list'>
            <AddCard />
            <RemoteCard />
            <RemoteCard />
            <RemoteCard />
            <RemoteCard />
        </div>
    </div>
  )
}

export default Home