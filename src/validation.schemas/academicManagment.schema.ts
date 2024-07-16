import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({ required_error: "Please Select is Name" }),
    year: z.string({ required_error: "Please Select is Year" }),
    startMonth: z.string({ required_error: "Please Select is Start Month" }),
    endMonth: z.string({ required_error: "Please Select is End Month" }),
  });
