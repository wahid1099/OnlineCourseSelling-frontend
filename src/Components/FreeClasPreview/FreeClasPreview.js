import React from 'react';
import Slider from "react-slick";
import {Container} from "react-bootstrap";
import clas1 from '../../Images/class1.svg';
import class2 from '../../Images/class2.svg';
import class3 from '../../Images/class3.svg';
import class4 from '../../Images/class4.svg';
import class5 from '../../Images/class5.svg';
const FreeClasPreview = () => {
    const bgcolor={
        background:"#F5F5F5"
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div style={bgcolor} className="pt-5 pb-5" data-aos="zoom-in">
           <Container>
               <h4>Free Class & Preview</h4>
               <h6>Watch free videos on Express JS REST API Development</h6>
               <Slider {...settings} className="pt-5 pb-5">
                   <div>
                       <img src={clas1} className="pe-4 w-100 img-fluid"/>
                   </div>
                   <div>
                       <img src={class2} className="pe-4  img-fluid w-100"/>
                   </div>

                   <div>
                       <img src={class3} className="img-fluid w-100 pe-4 "/>
                   </div>
                   <div>
                       <img src={class4} className="img-fluid w-100 pe-4 "/>
                   </div>
                   <div>
                       <img src={class5} className="img-fluid w-100 pe-4 "/>
                   </div>
                   <div>
                       <img src={clas1} className="img-fluid pe-4 "/>
                   </div>
                   <div>
                       <img src={class5} className="img-fluid w-100 pe-4 "/>
                   </div>
               </Slider>

           </Container>
        </div>
    );
};

export default FreeClasPreview;