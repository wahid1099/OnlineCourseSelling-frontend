import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const BottomBanner = () => {
    const bgcolor={
        background:"#F5F5F5"
    }

    return (
        <div style={bgcolor} className="pt-5 pb-5">
         <Container>
             <Row>
                 <Col md={6} sm={12}>
                <h3 className="pt-5">Express JS REST API Tutorial Series</h3>
                     <h6 className="text-black-50">Learn something good,do something better</h6>
                 </Col>
                 <Col md={6} sm={12}>
                     <img  src="https://i.ibb.co/dDcpC6T/classroom.png" className="img-fluid"/>

                 </Col>
             </Row>
         </Container>
        </div>
    );
};

export default BottomBanner;