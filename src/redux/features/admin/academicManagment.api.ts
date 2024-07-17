import { TacademicSemester } from "../../../types/academicSemester.type";
import { TResponceRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformResponse: (response: TResponceRedux<TacademicSemester[]>) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation }: any =
  academicManagmentApi;
