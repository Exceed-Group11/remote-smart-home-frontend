import React, { useEffect } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import {  logout } from '../services/auth'
import axios from 'axios'
import { getSessionId } from '../utils/cookie_util'
import { useState } from 'react'


const NavBar = () => {
  const [userStatus, setUserStatus] = useState(null)

  async function getUserInfo() {
    let sessionId = getSessionId()
    const response = await axios({
        method: 'GET',
        url: 'https://ecourse.cpe.ku.ac.th/exceed11/api/user/',
        headers: {
            "Authorization": `Bearer ${sessionId}`
        }
    })
  
    if (response.status === 200) {
      setUserStatus(true)
    } else {
      setUserStatus(false)
    }      
  }

  useEffect(() => {
    getUserInfo()
  })

  if (userStatus) {
      return (
      <Navbar className='navbar-orange'>
        <Container>
          <Navbar.Brand>
            Remote กระติ๊บมหัศจรรย์
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <button onClick={logout} className='btn-add-remote'>Logout</button>
          </Nav>
        </Container>
      </Navbar>
      )
  } else {
    return (
      <Navbar className='navbar-orange'>
        <Container>
          <Navbar.Brand>
            Remote กระติ๊บมหัศจรรย์
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }

}

    // <Navbar bg="orange">
    //   <Container>
    //     <Navbar.Brand href="#home">Remote กระติ๊บมหัศจรรย์</Navbar.Brand>
    //   </Container>
    // </Navbar>


export default NavBar