import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHFrom from "../compunents/form/PHFrom";
import PHInput from "../compunents/form/PHInput";

const Login = () => {
  const dispaths = useAppDispatch();
  const navigate = useNavigate();

  const [Login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in......");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await Login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispaths(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Somting Want Wrong", { id: toastId, duration: 2000 });
      console.log(err);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHFrom onSubmit={onSubmit}>
        <PHInput type="id" name="id" label="ID:"></PHInput>
        <PHInput type="password" name="password" label="Password:"></PHInput>
        <Button htmlType="submit">Login</Button>
      </PHFrom>
    </Row>
  );
};

export default Login;
