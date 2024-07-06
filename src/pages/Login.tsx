import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm(); // Corrected the typo here
  
    const onSubmit = (data: any) => {
      console.log(data);
    };
  
    return (
      <form style={{textAlign:'center' }} onSubmit={handleSubmit(onSubmit)}> {/* Corrected the typo here */}
        <div>
          <label htmlFor="id">ID: </label>
          <input type="text" id="id" {...register('id')} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" {...register('password')} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Login;
