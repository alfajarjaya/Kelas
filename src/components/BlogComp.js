import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../style/global.css';
import Aos from "aos";
import MediaDekstop from "./Blog/MediaDekstop";
import MediaPhone from "./Blog/MediaPhone";

export default function BlogComp() {
    // const BlogContent = () => {
    //     return (
    //         <Container>
    //             <Row>
    //                 <Col className="d-flex justify-content-center">
    //                     <div className="my-3">
    //                         <iframe width="350px" height="210" src="https://www.youtube.com/embed/4xe2tHbGogo?si=xUMlUyekDSMGowDP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //                     </div>
    //                 </Col>
    //             </Row>
    //         </Container>
    //     );
    // };

    // const [showAll, setShowAll] = useState(false);
    const [showStructure, setShowStructure] = useState(false);
    const [showBlog, setShowBlog] = useState(false);

    // const toggleShowAll = () => {
    //     setShowAll(!showAll);
    // };

    const toggleShowStructure = () => {
        if (showStructure) {
            setShowStructure(true);
            setShowBlog(false);
        } else {
            setShowStructure(!showStructure);
            setShowBlog(false);
        }
    };

    const toggleShowBlog = () => {
        if (showBlog) {
            setShowBlog(true);
            setShowStructure(false);
        } else {
            setShowBlog(true);
            setShowStructure(false);
        }
    };

    useEffect(() => {
        setShowStructure(true);
        Aos.init();
        Aos.refresh();
    })

    const phoneMedia = window.matchMedia("(max-width: 768px)");

    return (
        <div className="w-body pt-5" id="blog">
            <div className="mt-5">
                <Container className="py-5">
                    <Row className="d-flex justify-content-center">
                        <Col className="d-flex align-items-center justify-content-evenly text-center border-bottom" >
                            <h1 className="text-center text-warning cp" onClick={toggleShowStructure}>Stucture</h1>
                            <h1 className="text-center text-warning">||</h1>
                            <h1 className="text-center text-warning cp" onClick={toggleShowBlog}>Our Blog</h1>
                        </Col>
                    </Row>

                </Container>
                <Container>
                    {showBlog ? (
                        <>
                            <Col className="d-flex justify-content-center">
                                <div className="my-3 w-50">
                                    <iframe height={phoneMedia.matches ? "210px" : "450px"} width="100%" src="https://www.youtube.com/embed/4xe2tHbGogo?si=xUMlUyekDSMGowDP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </Col>

                            {/* <Row className="justify-content-center mt-3">
                                <Col md={6} className="text-center">
                                    <Button variant="outline-warning" onClick={toggleShowAll}>
                                        {showAll ? 'Tutup' : 'Lihat Selengkapnya'}
                                    </Button>
                                </Col>
                            </Row> */}
                        </>
                    ) : (
                        <>
                            {phoneMedia.matches ? <MediaPhone />: <MediaDekstop />}
                        </>
                    )}

                </Container>
            </div>
        </div>
    );
};