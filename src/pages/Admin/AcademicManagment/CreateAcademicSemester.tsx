import { FieldValues, SubmitHandler } from "react-hook-form";
import PHFrom from "../../../compunents/form/PHFrom";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../compunents/form/PHSelect";

const valueOtions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summar",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const data = new Date().getFullYear();
const valueYear = [0, 1, 2, 3, 4].map((number) => ({
  value: String(data + number),
  label: String(data + number),
}));

const CreateAcademicSemester = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    const name = valueOtions[Number(data?.name) - 1]?.label;
    const selectData = {
      name: name,
      code: data.name,
      year:data.year
    };
    console.log(selectData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHFrom onSubmit={onsubmit}>
          <PHSelect label="Name" name="name" options={valueOtions}></PHSelect>
          <PHSelect label="Year" name="year" options={valueYear}></PHSelect>
          <PHSelect
            label="StartMonth"
            name="startMonth"
            options={valueOtions}
          ></PHSelect>
          <PHSelect
            label="EndMonth"
            name="endMonth"
            options={valueOtions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
