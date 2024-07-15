import { Form, Input } from "antd";
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
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
