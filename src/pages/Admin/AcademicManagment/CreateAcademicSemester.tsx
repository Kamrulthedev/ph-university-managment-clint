import { FieldValues, SubmitHandler } from "react-hook-form";
import PHFrom from "../../../compunents/form/PHFrom";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../compunents/form/PHSelect";
import { semesterOtions } from "../../../constent/semesterOption";
import { monthOptions } from "../../../constent/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../validation.schemas/academicManagment.schema";

const data = new Date().getFullYear();
const valueYear = [0, 1, 2, 3, 4].map((number) => ({
  value: String(data + number),
  label: String(data + number),
}));

const CreateAcademicSemester = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOtions[Number(data?.name) - 1]?.label;
    const selectData = {
      name: name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(selectData);
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
