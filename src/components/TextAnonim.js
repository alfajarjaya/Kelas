import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../style/global.css';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import usersIcons from '../assets/users.svg';
import { Telegram } from '@mui/icons-material';

function TextAnonim() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('https://api.alfajjar.my.id/tkj_skanesa/data_komentar/text-get');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMessages(data.data.text);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);


    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (message.trim()) {
            try {
                const response = await fetch('https://api.alfajjar.my.id/tkj_skanesa/data_komentar/text-post', {
                    method: 'POST',
                    body: JSON.stringify({ text: message }),
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: data.message
                });

                // Tambahkan pesan baru ke state messages tanpa refresh
                setMessages(prevMessages => [...prevMessages, message]);

                // Kosongkan input
                setMessage('');
                setIsLoading(false);
            } catch (error) {
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal',
                    text: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.'
                });
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
            Swal.fire({
                icon: 'warning',
                title: 'Peringatan',
                text: 'Tidak ada pesan yang dikirim.'
            });
        }
    };


    return (
        <div className='w-body d-flex justify-content-center align-items-center min-vh-100' id='send-message'>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center text-warning fs-1 fw-bold">Send Anonymous Messages.</h1>
                        <div className="border-bottom mb-4"></div>
                    </Col>
                </Row>
                <div className="container-message">
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center align-items-center mb-5">
                                <div className="w-100 comment p-5">
                                    {// Loop data messages
                                        messages.map((msg, index) => (
                                            <div key={index} className='border comment-body p-3 mx-5 my-2 bg-dark text-white d-flex align-items-center'>
                                                <img src={usersIcons} alt="icons" />
                                                <p className='text-white m-0 mx-3'>{msg}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit} className='d-flex justify-content-evenly align-items-center'>
                                <Form.Group controlId="formMessage" className='w-50'>
                                    <Form.Control
                                        type="text"
                                        value={message}
                                        onChange={handleMessageChange}
                                        placeholder="Write your message here..."
                                        className='input-text-anonim rounded-4'
                                    />
                                </Form.Group>
                                <Button variant="outline-warning" type="submit" className="p-4 rounded-4" disabled={isLoading}>
                                    {isLoading ? <Spinner animation="border" size="sm" /> : <><span>Send </span><Telegram /></>}
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default TextAnonim;
