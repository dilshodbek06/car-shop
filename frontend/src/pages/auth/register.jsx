import { Link } from "react-router-dom";
import photo from "../../images/brand.svg";
import { useForm } from "react-hook-form";
import { handleRegister } from "../../actions/auth/auth";
import toast from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Parol bir xil emas");
      return;
    }
    await handleRegister(data);
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
              Create account
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-[#ff5000] transition-all"
                placeholder="Enter name"
                {...register("name", { required: true })}
              />
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
              <input
                type="password"
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-[#ff5000] transition-all"
                placeholder="Enter confirm password"
                {...register("confirmPassword", { required: true })}
              />
            </div>

            <div className="mt-8">
              <button className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-[#ff5000] hover:bg-[#e7520c] focus:outline-none focus:ring-2 ring-[#e75d1d]">
                Create an account
              </button>
            </div>
            <p className="text-sm mt-8 text-center text-gray-800">
              Already have an account?
              <Link to={"/login"}>
                <span className="text-[#ff5000] cursor-pointer font-semibold hover:underline ml-1">
                  Login here
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
