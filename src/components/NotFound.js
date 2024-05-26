import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgNf from '../assets/img/nf/nf.gif';

function NotFound() {
    return (
        <div className='d-flex align-items-center min-vh-100 justify-content-center w-body'>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center py-5">
                        <img src={imgNf} alt="Not Found" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-center text-warning">Mohon tunggu sebentar,</h2>
                        <h2 className="text-center text-warning">Halaman sedang dalam perbaikan!</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NotFound;