import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">VTS Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to='/' className='nav-link' >Home</Link>
                <Link to='/profile' className='nav-link' >My Profile</Link>                
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href='#' className='btn btn-info' style={{ color: 'white'}} >Logout</Nav.Link>             
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
