import { useForm } from "react-hook-form";
import { forgotPassword } from "./authService";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.png'

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    await forgotPassword(data);
    navigate('/reset')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAF2FF]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center">
          <img className="h-35" src={Logo} alt="NC" />
        </div>
        <h2 className="text-2xl font-bold text-center text-[#0B3C74]">
          Forgot Password
        </h2>
        <p className="text-center text-slate-500 mt-2">
          Enter email in case for password missplace
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            required
          />

          <button className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-[#1E40AF]">
            Send Reset Token
          </button>
        </form>
      </div>
    </div>
  );
}
