import React from 'react';
import contnetlogo from '../../Images/album.svg';
import {Card, Col, Container, Row} from "react-bootstrap";
const CourseContents = () => {
    const bgcolor={
        background:"#F5F5F5"
    }
    return (
        <div className="pt-5 pb-5" style={bgcolor}  data-aos="zoom-out-up">
            <Container>
                <Row xs={1} md={4} className="g-4">

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={contnetlogo} className="img-fluid w-25 mx-auto pt-2"   />
                            <Card.Body>
                                <Card.Title>Mearn Stack Server-Side Development</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={contnetlogo} className="img-fluid w-25 mx-auto pt-2"   />
                            <Card.Body>
                                <Card.Title>Rest API Development Ins & Outs</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={contnetlogo} className="img-fluid w-25 mx-auto pt-2"   />
                            <Card.Body>
                                <Card.Title>Best Practices of REST API Development</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={contnetlogo} className="img-fluid w-25 mx-auto pt-2"   />
                            <Card.Body>
                                <Card.Title>REST API Security Best Practices</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Row xs={1} md={4} className="g-4 pt-5">

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={contnetlogo} className="img-fluid w-25 mx-auto pt-2"   />
                            <Card.Body>
                                <Card.Title>Best Practices of Express REST API Structure</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={contnetlogo} className="img-fluid pt-2 w-25 mx-auto"   />
                            <Card.Body>
                                <Card.Title>Rest API Documentation Preparation Guide</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={contnetlogo} className="img-fluid w-25 pt-2 mx-auto"   />
                            <Card.Body>
                                <Card.Title>Implementation Artificial Intelligence with Rest API</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={contnetlogo} className="img-fluid w-25 pt-2 mx-auto"   />
                            <Card.Body>
                                <Card.Title>Back-data Transmission for Robotics & IOT Devices</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default CourseContents;