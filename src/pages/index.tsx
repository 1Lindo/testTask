import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import {GetStaticProps} from "next";
import {CourseDataA} from "@/src/interfaces/course.interface";
import {getDataService} from "@/src/services/get-data.service";
import {FC} from "react";


const index:FC<CourseDataA> = ({courses}) => {
    console.log(courses);
    return (
    <Wrapper>
      <SEO pageTitle={'Epora'} />
      <Home courses={courses}/>
    </Wrapper>
  );
};

export const getStaticProps:GetStaticProps<CourseDataA> = async () => {

    const courses = await getDataService.getCourses()
    return{
        props: {courses},
        revalidate:6
    }
}

export default index;
