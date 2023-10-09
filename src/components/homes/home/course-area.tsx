import course_data from "@/src/data/course-data";
import Link from "next/link";
import React, {FC} from "react";
import {CourseDataA} from "@/src/interfaces/course.interface";
import CourseItem from "@/src/components/ui/course/course-item";


const CourseArea: FC<CourseDataA> = ({courses}) => {
    return (
        <>
            <section
                className="course-area pt-115 pb-110 wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".4s"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb-65">
                                <h2 className="tp-section-title mb-20">
                                    Explore Popular Courses
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {courses.map(course => <CourseItem key={course.id} course={course}/>)}
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="course-btn mt-20">
                                <Link className="tp-btn" href="">
                                    Browse All Courses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseArea;
