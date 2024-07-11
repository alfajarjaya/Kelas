import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../../style/global.css';
import LineIcons from "../../assets/img/line/LineIcons";
import Aos from "aos";
import { Circle } from "@mui/icons-material";

function MediaDekstop() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    })

    return (
        <>
            <Container className="d-flex justify-content-center">
                <Row className="d-flex flex-column justify-content-center">
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <p className="text-white text-center m-0 p-0 fw-bold" data-aos="fade-up" data-aos-duration="400">Wali Kelas</p>
                        <p className="light rounded-4 py-2 m-0 fw-bold text-dark text-center" style={{ width: "60%" }} data-aos="fade-up" data-aos-duration="450">Bambang Sugianto S.Pd</p>
                        <img src={LineIcons.verticalLine} alt="" data-aos="fade-up" data-aos-duration="500"/>
                        <Circle sx={{ color: "#fff" }} fontSize="large" data-aos="fade-up" data-aos-duration="500"/>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <p className="text-white text-center m-0 p-0 fw-bold" data-aos="fade-up" data-aos-duration="550">Ketua Kelas</p>
                        <p className="light rounded-4 text-center py-2 m-0 fw-bold text-dark" style={{ width: "60%" }} data-aos="fade-up" data-aos-duration="550">Aji</p>
                        <img src={LineIcons.verticalLine} alt="" data-aos="fade-up" data-aos-duration="500"/>
                        <Circle sx={{ color: "#fff" }} fontSize="large" data-aos="fade-up" data-aos-duration="500"/>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <p className="text-white text-center m-0 p-0 fw-bold" data-aos="fade-up" data-aos-duration="550">Wakil Ketua Kelas</p>
                        <p className="light rounded-4 py-2 text-center m-0 fw-bold text-dark" style={{ width: "60%" }} data-aos="fade-up" data-aos-duration="550">Lawra</p>
                        <img src={LineIcons.verticalLine} className="m-0 p-0" alt="" data-aos="fade-up" data-aos-duration="500"/>
                        <div>
                            <img src={LineIcons.horizontalLineW400} className="p-0" style={{ marginTop: "-15px" }} alt=""  data-aos="fade-up" data-aos-duration="500"/>
                            <div className="d-flex justify-content-between align-items-center p-0" >
                                <div className="d-flex flex-column align-items-center justify-content-center" style={{ marginTop: -20, marginInlineStart: -50 }}>
                                    <img src={LineIcons.verticalLine} alt="" data-aos="fade-up" data-aos-duration="500"/>
                                    <Circle sx={{ color: "#fff" }} fontSize="large"  data-aos="fade-up" data-aos-duration="500"/>
                                    <Col className="d-flex flex-column justify-content-center align-items-center">
                                        <p className="text-white text-center m-0 p-0 fw-bold" data-aos="fade-up" data-aos-duration="600">Sekretaris I</p>
                                        <p className="light rounded-4 py-2 text-center m-0 fw-bold text-dark w-100" data-aos="fade-up" data-aos-duration="600">Kimi</p>
                                    </Col>
                                    <Col className="d-flex flex-column justify-content-center align-items-center mt-4">
                                        <p className="text-white text-center m-0 p-0 fw-bold" data-aos="fade-up" data-aos-duration="600">Sekretaris II</p>
                                        <p className="light rounded-4 py-2 text-center m-0 fw-bold text-dark w-100" data-aos="fade-up" data-aos-duration="600">Ican</p>
                                    </Col>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center" style={{ marginTop: -20, marginInlineEnd: -50 }}>
                                    <img src={LineIcons.verticalLine} alt=""  data-aos="fade-up" data-aos-duration="500"/>
                                    <Circle sx={{ color: "#fff" }} fontSize="large"  data-aos="fade-up" data-aos-duration="500"/>
                                    <Col className="d-flex flex-column justify-content-center align-items-center">
                                        <p className="text-white text-center m-0 p-0 fw-bold" data-aos="fade-up" data-aos-duration="600">Bendahara I</p>
                                        <p className="light rounded-4 py-2 text-center m-0 fw-bold text-dark w-100" data-aos="fade-up" data-aos-duration="600">Syaip</p>
                                    </Col>
                                    <Col className="d-flex flex-column justify-content-center align-items-center mt-4">
                                        <p className="text-white text-center m-0 p-0 fw-bold" data-aos="fade-up" data-aos-duration="600">Bendahara II</p>
                                        <p className="light rounded-4 py-2 text-center m-0 fw-bold text-dark w-100" data-aos="fade-up" data-aos-duration="600">Kensa</p>
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default MediaDekstop;