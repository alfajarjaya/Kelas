import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/global.css';

export default function BlogComp() {
    const BlogContent = () => {
        return (
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div className="my-3">
                            <iframe width="350px" height="210" src="https://www.youtube.com/embed/4xe2tHbGogo?si=xUMlUyekDSMGowDP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        );
    };

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    

    return (
        <div className="w-body pt-5" id="blog">
            <div className="d-flex-align-items-center min-vh-100 mt-5">
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
                        {showAll ? <BlogContent /> : (
                            <>
                                <Col className="d-flex justify-content-center">
                                    <div className="my-3">
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