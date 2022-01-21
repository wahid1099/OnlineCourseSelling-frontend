import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import contnetlogo from "../../Images/album.svg";



const bgcolor={
    background:"#F5F5F5"
}
const OtherCourses = () => {
    return (
        <div style={bgcolor} className="pt-5 pb-5" data-aos="zoom-in">
            <h4>Other Courses</h4>
            <h5>Explore More & Learn More</h5>
            <Container>
                <Row xs={1} md={4} className="g-4">

                    <Col>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://i.ibb.co/q7YR9kp/html.png" className="img-fluid w-25 mx-auto pt-2"   />
                            <Card.Body>
                                <Card.Title>HTML Zero to Hero</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://i.ibb.co/nnh5XsX/css3.png" className="img-fluid w-25 mx-auto pt-2"   />
                            <Card.Body>
                                <Card.Title>CSS crash course</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://i.ibb.co/H7szVfS/javascript.jpg" className="img-fluid w-25 mx-auto pt-2"   />
                            <Card.Body>
                                <Card.Title>Javscript Fundamentals</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://i.ibb.co/ct1XkRG/bootstrap-logo.png" className="img-fluid w-25 mx-auto pt-4"   />
                            <Card.Body>
                                <Card.Title>Bootstrap Boot camp</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Row xs={1} md={4} className="g-4 pt-5">

                    <Col>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://i.ibb.co/k8sqPcp/React-icon-svg.png" className="img-fluid w-25 mx-auto pt-2"   />
                            <Card.Body>
                                <Card.Title>React js</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://i.ibb.co/NsswpZF/nodejs.png" className="img-fluid pt-2 w-25 mx-auto"   />
                            <Card.Body>
                                <Card.Title>Node Js</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://i.ibb.co/ZYn48JB/mongodb.png" className="img-fluid w-25 pt-2 mx-auto"   />
                            <Card.Body>
                                <Card.Title>Mongo DB</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://i.ibb.co/4Kpcn88/firebase.png" className="img-fluid w-25 pt-2 mx-auto"   />
                            <Card.Body>
                                <Card.Title>FireBase</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            
        </div>
    );
};

export default OtherCourses;