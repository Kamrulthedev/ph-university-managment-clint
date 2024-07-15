import { FieldValues, SubmitHandler } from "react-hook-form";
import PHFrom from "../../../compunents/form/PHFrom";
import PHInput from "../../../compunents/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../compunents/form/PHSelect";

const CreateAcademicSemester = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHFrom onSubmit={onsubmit}>
          <PHInput type="text" name="name" label="Name:"></PHInput>
          <PHSelect label="Name"></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
