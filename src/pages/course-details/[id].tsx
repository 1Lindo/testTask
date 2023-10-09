import React, {FC} from "react";
import SEO from "../../common/seo";
import CourseDetails from "../../components/course-details";
import WrapperFour from "../../layout/wrapper-4";
import {GetStaticPaths, GetStaticProps} from "next";
import {CourseDataA, CourseDataCombine, CourseDataSingle} from "@/src/interfaces/course.interface";
import {getDataService} from "@/src/services/get-data.service";
import {number} from "prop-types";
import {ParsedUrl} from "next/dist/shared/lib/router/utils/parse-url";
import {NextParsedUrlQuery} from "next/dist/server/request-meta";

const index: FC<CourseDataSingle> = ({course}) => {
    return (
        <WrapperFour>
            <SEO pageTitle={course.course_name + "| Epora Course"}/>
            <CourseDetails course={course}/>
        </WrapperFour>
    );
};

interface Params extends NextParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {

    const courses = await getDataService.getCourses()

    return {
        paths: courses.map(course => ({
            params: {
                id: course.id.toString(),
            },
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<CourseDataSingle> = async ({params}) => {

    const course = await getDataService.getCourseById(String(params?.id))
    return {
        props: {course},
        revalidate: 6
    }
}

export default index;
