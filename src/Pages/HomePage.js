import React from 'react';
import Header from "../Components/Header/Header";
import Topbanner from "../Components/TopBanner/Topbanner";
import CourseContents from "../Components/CourseContents/CourseContents";
import CourseSummary from "../Components/CourseSummary/CourseSummary";
import BottomBanner from "../Components/BottomBanner/BottomBanner";
import FreeClasPreview from "../Components/FreeClasPreview/FreeClasPreview";

const HomePage = () => {
    return (
        <div>

            <Header/>
            <Topbanner/>
            <CourseContents/>
            <CourseSummary/>
            <BottomBanner/>
            <FreeClasPreview/>
        </div>
    );
};

export default HomePage;