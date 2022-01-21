import React from 'react';
import Header from "../Components/Header/Header";
import Topbanner from "../Components/TopBanner/Topbanner";
import CourseContents from "../Components/CourseContents/CourseContents";
import CourseSummary from "../Components/CourseSummary/CourseSummary";
import BottomBanner from "../Components/BottomBanner/BottomBanner";
import FreeClasPreview from "../Components/FreeClasPreview/FreeClasPreview";
import OtherCourses from "../Components/OtherCourses/OtherCourses";
import Footer from "../Components/Footer/Footer";
import PaymentInstruction from "../Components/PaymentInstruction/PaymentInstruction";

const HomePage = () => {
    return (
        <div>

            <Header/>
            <Topbanner/>
            <CourseContents/>
            <CourseSummary/>
            <BottomBanner/>
            <PaymentInstruction/>
            <FreeClasPreview/>
            <OtherCourses/>
            <Footer/>
        </div>
    );
};

export default HomePage;