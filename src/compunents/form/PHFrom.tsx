import { useForm } from "react-hook-form";

const PHFrom = ({ onSubmit, children }) => {
  const { handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </div>
  );
};

export default PHFrom;
