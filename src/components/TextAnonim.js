import React, { useState, useEffect } from 'react';
import { openDB } from 'idb';
import '../style/global.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

async function initDB() {
    const db = await openDB('comments-db', 1, {
        upgrade(db) {
            db.createObjectStore('comments', { keyPath: 'id', autoIncrement: true });
        },
    });
    return db;
}

function TextAnonim() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        (async () => {
            const db = await initDB();
            const tx = db.transaction('comments', 'readonly');
            const store = tx.objectStore('comments');
            const allComments = await store.getAll();
            setMessages(allComments.map(comment => comment.text));
        })();
    }, []);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim()) {
            const db = await initDB();
            const tx = db.transaction('comments', 'readwrite');
            const store = tx.objectStore('comments');
            await store.add({ text: message });
            const allComments = await store.getAll();
            setMessages(allComments.map(comment => comment.text));
            setMessage('');
        }
    };

    return (
        <div className='w-body d-flex justify-content-center align-items-center min-vh-100' id='send-message'>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center text-warning fs-1 fw-bold">Kirim pesan kepada pengunjung.</h1>
                        <div className="border-bottom mb-4"></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <div className="d-flex justify-content-center align-items-center">
                                <Form.Group controlId="formMessage" className='w-50'>
                                    <Form.Control
                                        as="textarea"
                                        rows={6}
                                        value={message}
                                        onChange={handleMessageChange}
                                        placeholder="Ketik pesan Anda di sini..."
                                        className='textarea'
                                    />
                                </Form.Group>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <Button variant="outline-warning" type="submit" className="mt-5 px-5 py-3">
                                    Kirim Pesan Anda
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center align-items-center py-3">
                            <div className="w-50">
                                {messages.map((msg, index) => (
                                    <div key={index} className='border p-3 my-2 bg-light'>
                                        <p className='text-dark'>{msg}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TextAnonim;
