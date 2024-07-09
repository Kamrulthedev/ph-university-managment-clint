import { FormProvider, useForm } from "react-hook-form";

const PHFrom = ({ onSubmit, children }) => {
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
