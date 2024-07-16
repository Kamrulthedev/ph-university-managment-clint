import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
};

type TForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PHFrom = ({ onSubmit, children, resolver }: TForm) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm({ resolver });
  
  return (
    <FormProvider {...methods}>
      <Form
        layout="vertical"
        style={{ textAlign: "center" }}
        onFinish={methods.handleSubmit(onSubmit)}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHFrom;
