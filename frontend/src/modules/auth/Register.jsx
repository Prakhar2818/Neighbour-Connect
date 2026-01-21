import { useForm } from "react-hook-form";
import { registerUser } from "./authService";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.png'


export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await registerUser(data);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAF2FF]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center">
          <img className="h-35" src={Logo} alt="NC" />
        </div>
        <h2 className="text-2xl font-bold text-center text-[#0B3C74]">
          Create Account
        </h2>
        <p className="text-center text-slate-500 mt-2">
          Join your society digitally
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <select
            {...register("role")}
            className="w-full border p-3 rounded-lg"
          >
            <option value="ADMIN">Admin</option>
            <option value="RESIDENT">Resident</option>
            <option value="SOCIETY_MANAGER">Society Manager</option>
            <option value="SECURITY">Security</option>
          </select>

          <button className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-[#1E40AF]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
