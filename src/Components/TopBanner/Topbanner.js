import React from 'react';
import {Button} from "react-bootstrap";


const Topbanner = () => {
   const topbg={

        background:"url('https://i.ibb.co/QJQY6M8/ilya-pavlov-Oqtaf-YT5k-Tw-unsplash.jpg')",
           backgroundSize:"cover",
       backgroundRepeat:"no-repeat",
       paddingBottom:"150px"
    }
    return (
        <div style={topbg} data-aos="zoom-in-up">
            <h1 className="text-warning  pt-5">Express JS REST API Development</h1>
            <h4 className="text-white">REST API Development, Best Practices & Security</h4>
            <Button variant="warning" className="ps-5 pe-5">LogIn</Button>

        </div>
    );
};

export default Topbanner;