import axios from "axios";
import {Course} from "../interfaces/course.interface"

export const getDataService = {
    async getCourses(){
        const {data} = await axios.get<Course[]>('http://localhost:4200/courses')
        return data
    },

    async getCourseById(id:string){
        const {data} = await axios.get<Course[]>('http://localhost:4200/courses', {params:{
            id
            }
        })
        return data[0]
    },

    async getInstructors(){
        const {data} = await axios.get<Course[]>('http://localhost:4200/instructors')
        return data
    },

    async getInstructorById(id:string){
        const {data} = await axios.get<Course[]>('http://localhost:4200/instructors', {params:{
            id
            }
        })
        return data[0]
    }
}
