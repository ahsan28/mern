import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = (props) => {
console.log("🚀 ~ file: Header.js ~ line 6 ~ Header ~ props", props)
    const logout = () => {
        props.setCurrentUser(false)
        localStorage.clear()
    }

    return (
        <Navbar className="shadow-sm bg-white">
            <Container>
                <Navbar.Brand>
                    <img
                    alt=""
                    src="/propic.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top rounded-circle"
                    />{' '}
                {props.currentUser?.name||"FirstName"}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text onClick={logout} >
                    Logout
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
