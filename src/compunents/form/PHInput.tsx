import { Input } from "antd";
import { Controller } from "react-hook-form";

const PHInput = ({ label, type, name, control }) => {
  return (
    <div style={{ marginBottom: '20px'}}>
      {label ? <label style={{marginBottom: '10px', fontSize: 24}} htmlFor={name}>{label}</label> : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
