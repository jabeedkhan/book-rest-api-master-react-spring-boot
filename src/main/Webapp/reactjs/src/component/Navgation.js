import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class Navgation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand p-1">
                <img src="logo512.png" style={{width:'25px',height:'25px'}}/>
                  Navbar
                </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className="navbar-brand">Adding Book</Link>
                    <Link to={"list"} className="navbar-brand">Book List </Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navgation;
