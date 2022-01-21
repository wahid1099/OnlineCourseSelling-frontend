import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

const PaymentInstruction = () => {
    const bgcolor={
        background:"#F5F5F5"
    }
    return (
        <div style={bgcolor} className="pb-5 pt-5">
           <Container>
               <Row>
                   <Col md={6} sm={12} className="text-start" data-aos="fade-right">
                       <img src="https://i.ibb.co/3vK0n0C/paymentmethod.png" className="img-fluid  w-25"/>
                       <h6 className="text-black-50 pt-3">বিকাশঃ কোর্স ফি পাঠিয়ে দিন 018xxxxxxxx (বিকাশ পার্সোনাল) নম্বরে .ফিরতি SMS থেকে পাওয়া TrxID টি সংরক্ষন করুন, যেটি কোর্স রেজিঃ এর সময় প্রদান করবেন।</h6>

                       <h6 className="text-black-50 pt-3">রকেটঃ কোর্স ফি পাঠিয়ে দিন 017xxxxxxxx (রকেট পার্সোনাল) নম্বরে .ফিরতি SMS থেকে পাওয়া TrxID টি সংরক্ষন করুন, যেটি কোর্স রেজিঃ এর সময় প্রদান করবেন।</h6>

                       <h6 className="text-black-50 pt-3">ইউজার Account Active হয়ে যাওয়ার পরে কোর্স ফি ফেরত যোগ্য নয়। কোর্সের মান যাচাই করতে ফ্রি ক্লাস দেখুন। কোর্স প্লানের ভিডিও থেকে দেখে নিন, কি কি থাকছে।</h6>

                       <h6 className="text-black-50 pt-3">আপনার যে কোনো জিজ্ঞাসা কিংবা সাহায্যের জন্যে কোর্স ম্যানেজারের সাথে কথা বলুন - সুমাইয়া খানম মোবাইল নং 01774688159 , অবশ্যই সকাল ১০ টা থেকে রাত ৮ টার মধ্যে।</h6>

                       <Row xs={1} md={3} className="g-4">

                               <Col>
                                   <Card className="text-center">

                                       <Card.Body>
                                           <Card.Title className="text-primary text-center">84</Card.Title>

                                           <Card.Text>
                                               Class Uploaded


                                           </Card.Text>
                                       </Card.Body>
                                   </Card>
                               </Col>

                           <Col>
                               <Card className="text-center">

                                   <Card.Body>
                                       <Card.Title className="text-primary text-center">1270
                                       </Card.Title>

                                       <Card.Text>
                                           Already Enrolled

                                       </Card.Text>
                                   </Card.Body>
                               </Card>
                           </Col>

                           <Col>
                               <Card className="text-center">

                                   <Card.Body>
                                       <Card.Title className="text-primary text-center">   BDT 1500</Card.Title>

                                       <Card.Text>
                                           Course Fee




                                       </Card.Text>
                                   </Card.Body>
                               </Card>
                           </Col>

                       </Row>
                   </Col>
                   <Col md={6} sm={12} data-aos="fade-left" >
                       <img src="https://i.ibb.co/LCVXTww/offer.gif"/>
                   </Col>
               </Row>
           </Container>

        </div>
    );
};

export default PaymentInstruction;