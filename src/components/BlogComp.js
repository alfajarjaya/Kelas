import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/global.css';
import adit from '../assets/img/blog/adit.jpg';

const BlogComp = () => {
    const blog = () => {
        return (
            <>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div className="my-3">
                                <iframe width="350px" height="210" src="https://www.youtube.com/embed/4xe2tHbGogo?si=xUMlUyekDSMGowDP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="w-body pt-5">
            <div className="d-flex-align-items-center min-vh-100 py-5 mt-5" id="blog">
                <Container className="py-5">
                    <Row>
                        <Col>
                            <h1 className="text-center text-warning my-5">Blog Terkait Kami.</h1>
                            <div className="border-bottom"></div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {showAll ? blog() : (
                            <>
                                <Col className="d-flex justify-content-center">
                                    <div className="my-3">
                                        {/* <img src={adit} alt="rawr2" width={"100%"} />
                                        <p className="text-warning p-4 fs-5">
                                            <a href="https://www.smkn1mojokerto.sch.id/ver/1/" className="text-warning" target="_blank" rel="noopener noreferrer">SMK Negeri 1 Mojokerto </a>
                                            kembali melahirkan talenta hebat. Kali ini, salah satu putra terbaik dari cabang olahraga Gateball, Muhammad Safiqul Aditya berhasil menyabet emas untuk kategori triple campuran pada Pekan Olahraga Provinsi (PORPROV) ke-VIII yang diselenggarakan di Mojokerto Jawa Timur mulai 9 September 2023 lalu.
                                            <a href="https://www.instagram.com/p/CxXKI1pRQr7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="text-warning text-decoration-none" target="_blank" rel="noopener noreferrer"> Lihat Selengkapnya...</a>
                                        </p> */}
                                        <iframe width="350px" height="210" src="https://www.youtube.com/embed/4xe2tHbGogo?si=xUMlUyekDSMGowDP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </Col>
                            </>
                        )}
                    </Row>

                    <Row className="justify-content-center mt-3">
                        <Col md={6} className="text-center">
                            <Button variant="outline-warning" onClick={toggleShowAll}>
                                {showAll ? 'Tutup' : 'Lihat Selengkapnya'}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BlogComp;
