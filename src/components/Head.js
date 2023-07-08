
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Head() {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Head


