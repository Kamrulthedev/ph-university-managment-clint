import { FieldValues, SubmitHandler } from "react-hook-form";
import PHFrom from "../../../compunents/form/PHFrom";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../compunents/form/PHSelect";
import { semesterOtions } from "../../../constent/semesterOption";
import { monthOptions } from "../../../constent/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../validation.schemas/academicManagment.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagment.api";
import { toast } from "sonner";
import { TResponce } from "../../../types/global";

const data = new Date().getFullYear();
const valueYear = [0, 1, 2, 3, 4].map((number) => ({
  value: String(data + number),
  label: String(data + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Semester Createing.....");
    const name = semesterOtions[Number(data?.name) - 1]?.label;

    const SemestertData = {
      name: name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = await addAcademicSemester(SemestertData) as TResponce;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success(res.data.message, { id: toastId });
      }
    } catch (error) {
      toast.error("Someting Want worng !", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHFrom
          onSubmit={onsubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            label="Name"
            name="name"
            options={semesterOtions}
          ></PHSelect>
          <PHSelect label="Year" name="year" options={valueYear}></PHSelect>
          <PHSelect
            label="StartMonth"
            name="startMonth"
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            label="EndMonth"
            name="endMonth"
            options={monthOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
