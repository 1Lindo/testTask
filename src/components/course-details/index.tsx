import React, {FC} from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseArea from "./course-area";
import CourseDetailsArea from "./course-details-area";
import {CourseDataCombine, CourseDataSingle} from "@/src/interfaces/course.interface";

const CourseDetails:FC<CourseDataSingle> = ({course}) => {
  return (
    <>
      <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl=""/>
      <CourseDetailsArea course={course}/>
      <CourseArea course={course}/>
      <CounterArea />
    </>
  );
};
export default CourseDetails;
