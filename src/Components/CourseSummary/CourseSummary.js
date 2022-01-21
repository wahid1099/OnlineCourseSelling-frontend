import React from 'react';
import {Container} from "react-bootstrap";

const CourseSummary = () => {
    const bgcolor={
        background:"#F5F5F5"
    }
    return (
        <div style={bgcolor} data-aos="fade-up"
             data-aos-duration="3000" className="pb-3">

           <Container className="bg-white">
               <h2 className="pt-5">Express JS REST API</h2>
               <p className="p-3 pb-5 text-center text-black-50" >
                   In this tutorial series we will learn step by step REST API development using Express JS the most popular framework of Node JS. Besides learning development we will also learn the best practices of REST Api, which is very important to increase our skill set as well as development quality. Rest API security is an important part of this series, inside this part we are going to learn security practices like Rest API Security - Encryption-Decryption, API throttle , Data sanitization , xss, cors, security HTTP headers, JSON Encryption, Authentication.


               </p>
           </Container>
        </div>
    );
};

export default CourseSummary;