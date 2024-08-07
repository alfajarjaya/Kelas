import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import '../style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import feather from 'feather-icons';
import { RocketLaunch ,MusicNote, Telegram } from "@mui/icons-material";

const HeroComp = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        feather.replace();
    }, []);


    return (
        <div className="hero-png" id="home">
            <div className="hero">
                <div className="d-flex justify-content-between align-items-center mx-5 p-5 ">
                    <a href="/">
                        <i data-feather="globe" color="#fff"></i>
                    </a>
                    <a href="https://www.instagram.com/xitkj2skanesa">
                        <i data-feather="instagram" color="#fff"></i>
                    </a>
                </div>
                <div className="min-vh-100 d-flex justify-content-center align-items-center p-0 m-0">
                    <Container>
                        <Row className="text-center">
                            <Col>
                                <h1 className="display-3 text-white text-bold mb-3" data-aos="fade-left">
                                    <u>Hi Visitors !</u></h1>
                                <h2 className="text-bold fw-bold fs-2 mb-2 text-warning" data-aos="fade-right" data-aos-delay="100">
                                    Welcome to <br />
                                    TKJ 2
                                </h2>
                                <div className="d-flex align-items-center justify-content-center my-4">
                                    <Button
                                        variant="warning"
                                        size="lg"
                                        className="me-2 my-5 mx-1 px-5 py-3 fs-4 d-flex align-items-center"
                                        onClick={() => scrollToSection('send-message')}
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        Send a Message
                                        <Telegram fontSize="40px"/>
                                    </Button>
                                    <Button
                                        variant="light"
                                        size="lg"
                                        className="me-2 my-5 mx-1 px-5 py-3 fs-4 d-flex align-items-center"
                                        onClick={() => scrollToSection('gallery')}
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >   
                                        <RocketLaunch />
                                        Let's Explore
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="only-mobile">
                            <Col className="d-flex w-100">
                                <div className="hero-1 px-2">
                                    <a href="https://www.instagram.com/xitkj2skanesa" className="text-decoration-none">
                                        <div className="hero-section-1 w-100" data-aos="fade-up" data-aos-delay="300">
                                            <div className="icons d-flex justify-content-between align-items-center">
                                                <i data-feather="instagram"></i>
                                                <i data-feather="chevron-right"></i>
                                            </div>
                                            <div className="d-flex flex-column mt-5 fst-italic">
                                                <p className="text-white-50">Follow us on</p>
                                                <h3>Class Instagram</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="hero-2 px-2">
                                    <a href="https://www.tiktok.com/@xitkjskanesa" className="text-decoration-none">
                                        <div className="hero-section-2 w-100" data-aos="fade-up" data-aos-delay="400">
                                            <div className="icons d-flex justify-content-between align-items-center">
                                                <MusicNote style={{ fontSize: 30 }} />
                                                <i data-feather="chevron-right"></i>
                                            </div>
                                            <div className="d-flex flex-column mt-5 fst-italic">
                                                <h3>Tiktok</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#send-message" className="text-decoration-none">
                                        <div className="hero-section-2 w-100 mt-3" data-aos="fade-up" data-aos-delay="500">
                                            <div className="icons d-flex justify-content-between align-items-center">
                                                <i data-feather="send"></i>
                                                <i data-feather="chevron-right"></i>
                                            </div>
                                            <div className="d-flex flex-column mt-5 fst-italic">
                                                <h3>Message</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default HeroComp;
