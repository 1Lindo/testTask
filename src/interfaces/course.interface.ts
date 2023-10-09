export interface Course {
    id: string
    img: string
    icon: string
    title: string
    cls_text: string
    st_text: string
    start_text: string
    course_title: string
    course_link: string
    course_name: string
    course_price: string
    ct_color: string,
    cn_color: string,
    total_start: string,
    about: string,
    instructor: {
        id: string,
        img: string,
        name: string,
        total_class: string,
        total_st: string,
        title: string,
        about: string
        cls_text: string,
        st_text: string,
        start_text: string
    },
    reviews: [
        {
            id: string,
            img: string,
            name: string,
            review_text: string
            review_time: string
            rating:string
        }
    ]
}

export interface CourseDataA {
    courses: Course[]
}

export interface CourseDataSingle {
    course: Course
}
export interface CourseDataCombine {
    course: Course
    courses: Course[]
}
