import { useGetAllSemestersQuery } from "../../../redux/features/academicSemesterApi/academicSemesterApi";

const AcademicSemester = () => {

    const {data} = useGetAllSemestersQuery(undefined);
    console.log( "ddddddddddd",data)

    return (
        <div>
            <h1>This is Academic Semester</h1>
        </div>
    ); 
};

export default AcademicSemester; 