import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import feather from 'feather-icons';
import logo from '../assets/img/logo/logo.png';

const FaqComp = () => {
    useEffect(() => {
        feather.replace()
    }, []);

    const scrollY = (id) => {
        const sect = document.getElementById(id);

        if (sect) {
            sect.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <footer className="footer text-white">
            <Container>
                <Row className="justify-content-evenly pt-5">
                    <Col md={1}>
                        <div>
                            <a href="javascript:void(0)" onClick={() => window.location.reload()} >
                                <img src={logo} alt="Logo Kelas" width={50} style={{ borderRadius: 100 }} />
                            </a>
                        </div>
                    </Col>
                    <Col md={2}>
                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Button variant="outline-light" onClick={() => scrollY("home")} className="border-0 bg-transparent p-0 m-0">
                                    <h4 className="m-0 p-0">Home</h4>
                                </Button>
                            </li>
                            <li>
                                <Button variant="outline-light" onClick={() => scrollY("gallery")} className="border-0 bg-transparent p-0 m-0">
                                    <h4 className="m-0 p-0">Gallery</h4>
                                </Button>
                            </li>
                            <li>
                                <Button variant="outline-light" onClick={() => scrollY("blog")} className="border-0 bg-transparent p-0 m-0">
                                    <h4 className="m-0 p-0">Blog</h4>
                                </Button>
                            </li>
                            <li>
                                <Button variant="outline-light" onClick={() => scrollY("send-message")} className="border-0 bg-transparent p-0 m-0">
                                    <h4 className="m-0 p-0">Send Message</h4>
                                </Button>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Follow us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.tiktok.com/@xitkjskanesa" className="text-white-50 text-decoration-none">
                                    TikTok
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/xitkj2skanesa" className="text-white-50 text-decoration-none">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Create by</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://fajarsite.my.id" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none">
                                    jarrz
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p className="text-white-50">&copy; 2024 TKJ 2. Dikelola oleh TKJ 2 SMKN 1 Mojokerto</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FaqComp;
