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
      <div>
        <form
          style={{ textAlign: "center" }}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {children}
        </form>
      </div>
    </FormProvider>
  );
};

export default PHFrom;
