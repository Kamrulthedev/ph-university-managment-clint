import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagment.api";

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