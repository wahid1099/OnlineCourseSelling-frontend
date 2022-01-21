import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Container>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="#"> <img
                        src="https://i.ibb.co/17TLrjX/express-logo.png"
                        width="120"
                        height="90"
                        className="img-fluid"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Course Summary</Nav.Link>
                            <Nav.Link href="#action2"> Free Class</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
        </div>
    );
};

export default Header;