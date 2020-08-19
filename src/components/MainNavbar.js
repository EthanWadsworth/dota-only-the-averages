import React from 'react'
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function MainNavbar() {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home">D-o-t-A</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    <Link to="/match">Match</Link>
                    <Link to="/heroes">Heroes</Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MainNavbar