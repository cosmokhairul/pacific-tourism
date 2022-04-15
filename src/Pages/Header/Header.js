import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="navBar" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} className="fw-bold fs-4" to="/home">
                        <img
                            alt=""
                            src="https://library.kissclipart.com/20181126/lgq/kissclipart-aeroplane-logo-png-clipart-airplane-aircraft-fligh-ff46e405c0832c54.jpg "
                            width="30"
                            height="30"
                            radius="10px"
                            className="d-inline-block align-center rounded-circle"
                        />{' '}
                        Pacific Tourism</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="single-nav" to="/home">Home</Nav.Link>
                        {user.email ?
                            <>
                                <Nav.Link as={Link} className="single-nav" to="/myBookings">My Bookings</Nav.Link>
                                <Nav.Link as={Link} className="single-nav" to="/manageAllBookings">Manage All Bookings</Nav.Link>
                                <Nav.Link as={Link} className="single-nav" to="/addNewBooking">Add a New Booking</Nav.Link>
                                <Nav.Link as={Link} onClick={logOut} className="single-nav" to="/login">Logout</Nav.Link>
                            </>
                            :
                            <Nav.Link as={Link} className="single-nav" to="/login">Login</Nav.Link>}
                        {user.email && <span className="user-style" >Hello, {user.displayName}</span>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;