import React from 'react';
import {Col, Row} from "react-bootstrap";
import { BsFacebook,BsLinkedin,BsTwitter,BsYoutube } from "react-icons/bs";
import { BiMap,BiPhone,BiMailSend } from "react-icons/bi";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="pt-5 pb-5" data-aos="fade-up"
             data-aos-anchor-placement="bottom-bottom">
            <Row>
                <Col md={3} sm={6} >
                    <h5>Follow Me</h5>
                    <a target="_blank" href="https://www.facebook.com/md.wahid.007/" className="text-decoration-none text-black-50">  <h6 ><BsFacebook/> Facebook </h6></a>
                    <a target="_blank" href="https://www.linkedin.com/in/md-wahid-645851117/" className="text-decoration-none text-black-50">  <h6 ><BsLinkedin/> LinkedIn </h6></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCk04D2qNOIHsY3je73aRFWw" className="text-decoration-none text-black-50">  <h6 ><BsYoutube/> Youtube </h6></a>
                    <a target="_blank" href="https://twitter.com/Wahid45237631" className="text-decoration-none text-black-50">  <h6 ><BsTwitter/> Twitter </h6></a>

                </Col>
                <Col md={4} sm={6} className="text-start">
                    <h5>Address</h5>
                    <h6><BiMap/> Shekhertek 8,Mohammadpur, Adabor, Dhaka-1207</h6>
                    <h6><BiPhone/> 01879439753 (Help Line)</h6>
                    <h6><BiMailSend/> wahidahmed890@gmail.com</h6>
                </Col>
                <Col md={2} sm={6} className="text-start">
                <h5>Information</h5>
                    <h6><Link to="/aboutme" className="text-decoration-none text-black">About Me</Link></h6>
                </Col>
                <Col md={3} sm={6} className="text-start">
                    <h5>Legal</h5>
                    <h6><Link to="/aboutme" className="text-decoration-none text-black">Refund Policy</Link></h6>
                    <h6><Link to="/aboutme" className="text-decoration-none text-black">Terms & Condition</Link></h6>
                </Col>
            </Row>

        </div>
    );
};

export default Footer;