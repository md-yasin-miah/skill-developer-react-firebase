import React from 'react';
import './Header.css';
// import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/cources">Cources</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <Navbar bg="light" variant="light">
                <Container>
                    <Nav>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/cources">Cources</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;