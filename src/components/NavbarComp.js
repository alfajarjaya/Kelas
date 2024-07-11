import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo/logo.png';

const NavbarComp = () => {

    const [changeColor, setChangeColor] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY > 750) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    }

    const scollY = (id) => {
        const sec = document.getElementById(id);

        if (sec) {
            sec.scrollIntoView({ behavior: "smooth" });
        }

    }

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);
    });

    return (
        <div className="sticky-top w-body">
            <Navbar variant="dark" expand="lg" className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="/" className="fw-bold fs-5">
                        <img src={logo} alt="logo" width="35px" className="mx-2"/>
                        TKJ 2 SKANESA
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Button variant="outline-light" onClick={() => scollY("home")} className="mx-2 py-2 px-4 border-0">
                                <h4 className="m-0 p-0">Home</h4>
                            </Button>
                            <Button variant="outline-light" onClick={() => scollY("gallery")} className="mx-2 py-2 px-4 border-0">
                                <h4 className="m-0 p-0">Gallery</h4>
                            </Button>
                            <Button variant="outline-light" onClick={() => scollY("blog")} className="mx-2 py-2 px-4 border-0">
                                <h4 className="m-0 p-0">Stucture</h4>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
