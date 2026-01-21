import { useForm } from "react-hook-form";
import { resetPassword } from "./authService";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.png'

export default function ResetPassword() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    await resetPassword(data);
    navigate('/')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAF2FF]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center">
          <img className="h-35" src={Logo} alt="NC" />
        </div>
        <h2 className="text-2xl font-bold text-center text-[#0B3C74]">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <input
            {...register("token")}
            placeholder="Reset Token"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            {...register("newPassword")}
            type="password"
            placeholder="New Password"
            className="w-full border p-3 rounded-lg"
            required
          />

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
