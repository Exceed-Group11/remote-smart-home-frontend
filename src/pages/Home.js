import React from 'react'
import AddCard from '../components/AddCard'
import Navbar from '../components/Navbar'
import RemoteCard from '../components/RemoteCard'

const Home = () => {
  return (
    <div>
      <Navbar isHome={true}/>
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