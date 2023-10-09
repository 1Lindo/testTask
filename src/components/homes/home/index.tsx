import React, {FC} from "react";
import AboutArea from "./about-area";
import CategoryArea from "./category-area";
import ChooseArea from "./choose-area";
import CounterArea from "../../../common/counter-area";
import CourseArea from "./course-area";
import FeatureArea from "./feature-area";
import HeroBanner from "./hero-banner";
import InstructorArea from "../../../common/instructor-area";
import SuitableArea from "../../../common/suitable-area";
import TestimonialArea from "./testimonial-area";
import BlogArea from "./blog-area";
import BrandArea from "../../../common/brand-area";
import {CourseDataA} from "@/src/interfaces/course.interface";


const Home:FC<CourseDataA> = ({courses}) => {
    return (
    <>
      <HeroBanner />
      <FeatureArea />
      <AboutArea />
      <CategoryArea />
      <CourseArea courses={courses}/>
      <ChooseArea />
      {/*<CounterArea />*/}
      {/*<InstructorArea />*/}
      {/*<SuitableArea />*/}
      <TestimonialArea />
      <BlogArea />
      {/*<BrandArea style_1={true} />*/}
    </>
  );
};

export default Home;
