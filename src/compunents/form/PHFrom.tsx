import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

const PHFrom = ({ onSubmit, children }: TForm) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form layout="vertical"
        style={{ textAlign: "center" }}
        onFinish={methods.handleSubmit(onSubmit)}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHFrom;
