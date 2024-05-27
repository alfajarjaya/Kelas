import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import feather from 'feather-icons';
import logo from '../assets/img/logo/logo.jpg';

const FaqComp = () => {
    useEffect(() => {
        feather.replace()
    }, []);

    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row className="justify-content-evenly pt-5">
                    <Col md={1}>
                        <div>
                            <a href="#home">
                                <img src={logo} alt="Logo Kelas" width={50} style={{ borderRadius: 100 }} />
                            </a>
                        </div>
                    </Col>
                    <Col md={2}>
                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#home" className="text-white-50 text-decoration-none">Home</a>
                            </li>
                            <li>
                                <a href="#gallery" className="text-white-50 text-decoration-none" >Gallery</a>
                            </li>
                            <li>
                                <a href="#blog" className="text-white-50 text-decoration-none">Blog</a>
                            </li>
                            <li>
                                <a href="#send-message" className="text-white-50 text-decoration-none">Send Message</a>
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
                                <a href="https://alfajjar.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none">
                                    bang_jarrrz
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
