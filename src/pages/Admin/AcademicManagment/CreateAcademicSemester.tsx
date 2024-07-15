import { FieldValues, SubmitHandler } from "react-hook-form";
import PHFrom from "../../../compunents/form/PHFrom";
import PHInput from "../../../compunents/form/PHInput";
import { Button, Col, Flex } from "antd";

const CreateAcademicSemester = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHFrom onSubmit={onsubmit}>
          <PHInput type="text" name="name" label="Name:"></PHInput>
          <PHInput type="text" name="year" label="Year:"></PHInput>
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
