import { baseApi } from "../../api/baseApi";
export interface Semester {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}
const academicManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query<Semester[], void>({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false, 
});

export const { useGetAllSemestersQuery } = academicManagmentApi;
