import { Link, useNavigate } from "react-router-dom";
import photo from "../../images/brand.svg";
import { useForm } from "react-hook-form";
import { handleLogin } from "../../actions/auth/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await handleLogin(data);
      if (result === 401) {
        toast.error("Telefon raqam yoki parol noto'g'ri.");
      } else {
        localStorage.setItem("access_token", result?.access_token);
        if (result?.refresh_token) {
          localStorage.setItem("refresh_token", result?.refresh_token);
        }
        login(result?.roles?.[0]?.name);
        navigate(
          result?.roles?.[0]?.name === "ROLE_SUPER_ADMIN"
            ? "/admin/users"
            : result?.roles?.[0]?.name === "ROLE_ADMIN"
            ? "/admin"
            : result?.roles?.[0]?.name === "ROLE_OPERATOR"
            ? "/admin/orders-new"
            : "/"
        );
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center font-[sans-serif] p-4">
        <div className="max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)] p-8 relative mt-12">
          <div className="bg-white w-24 h-24 border-[8px] p-1.5 absolute left-0 right-0 mx-auto -top-16 rounded-full overflow-hidden">
            <img src={photo} alt="logo" className="w-full inline-block mt-1" />
          </div>

          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-xl font-bold text-[#ff5000] mb-8 text-center">
              Login
            </h3>
            <div className="space-y-4">
              <input
                type="tel"
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-[#ff5000] transition-all"
                placeholder="Enter phone"
                {...register("phone", { required: true })}
              />
              <input
                type="password"
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-[#ff5000] transition-all"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 border-gray-300 rounded accent-[#ff5000]"
                  {...register("rememberMe")}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm cursor-pointer text-gray-800 select-none"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div className="mt-8">
              <button
                disabled={loading}
                className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-[#ff5000] hover:bg-[#e7520c] focus:outline-none focus:ring-2 ring-[#e75d1d]"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <p className="text-sm mt-8 text-center text-gray-800">
              Don&apos;t have an account?
              <Link to="/register">
                <span className="text-[#ff5000] cursor-pointer font-semibold hover:underline ml-1">
                  Register here
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
