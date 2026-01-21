import { useForm } from "react-hook-form";
import { loginUser } from "./authService";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.png'

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await loginUser(data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAF2FF]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center">
          <img className="h-35" src={Logo} alt="NC" />
        </div>
        <h1 className="text-3xl font-bold text-[#0B3C74] text-center">
          Neighbour Connect
        </h1>
        <p className="text-slate-500 text-center mt-2">
          Get more done with your society
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <input
            {...register("email")}
            placeholder="Email address"
            className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-[#1E40AF] transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-[#2563EB]">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate("/forgot")}
          >
            Forgot password?
          </span>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Create account
          </span>
        </div>
      </div>
    </div>
  );
}
