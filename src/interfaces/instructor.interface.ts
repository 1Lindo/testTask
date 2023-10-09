export interface instructorData {
    id: string,
    img: string,
    name: string,
    total_class: string,
    total_st: string,
    title: string,
}

export interface userDataA {
    instructors: instructorData[]
}

export interface userDataSingle {
    instructor: instructorData
}
