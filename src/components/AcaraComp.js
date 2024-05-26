import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../style/global.css';

const AcaraComp = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        script.onload = () => {
            console.log("TikTok script loaded");
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-vh-100 w-body d-flex align-items-center justify-content-center">
            <Container>
                <Row>
                    <Col md={4} className="text-center mt-5 w-100">
                        <div className="d-flex justify-content-center">
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AcaraComp;
