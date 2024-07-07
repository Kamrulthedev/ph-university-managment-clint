import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const dispaths = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { id: "A-0001", password: "Admin1234" },
  });

  const [Login, { error }] = useLoginMutation();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Logging in......");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await Login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      dispaths(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", {id: toastId, duration: 2000})
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Somting Want Wrong", {id: toastId, duration: 2000});
    }
  };

  return (
    <form style={{ textAlign: "center" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
