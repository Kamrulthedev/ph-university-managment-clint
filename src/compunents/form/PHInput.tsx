import { Input } from "antd";
import { Control, Controller, FieldValues } from "react-hook-form";

type TPropos = {
  type: string;
  name: string;
  label?: string;
  control?: Control<FieldValues> | undefined;
};

const PHInput = ({ label, type, name, control }: TPropos) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? (
        <label style={{ marginBottom: "10px", fontSize: 16 }} htmlFor={name}>
          {label}
        </label>
      ) : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
