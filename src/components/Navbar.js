import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import {  logout } from '../services/auth'
import axios from 'axios'
import { getSessionId } from '../utils/cookie_util'


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
    return true;
  } else {
    return false;
  }      
}


const NavBar = () => async {


  if ((await getUserInfo())) {
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