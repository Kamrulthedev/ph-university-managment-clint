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

const CreateAcademicSemester = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    const name = valueOtions[Number(data.name) - 1].label;
    const selectData = {
      name: name,
      code: data.name,
    };
    console.log(selectData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHFrom onSubmit={onsubmit}>
          <PHSelect label="Name" name="name" options={valueOtions}></PHSelect>
          <PHSelect label="year" name="year" options={valueOtions}></PHSelect>
          <PHSelect
            label="startMonth"
            name="startMonth"
            options={valueOtions}
          ></PHSelect>
          <PHSelect
            label="endMonth"
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
