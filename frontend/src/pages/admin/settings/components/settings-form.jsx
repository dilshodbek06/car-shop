import { useForm } from "react-hook-form";

const SettingsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className=" px-3 md:px-6">
      <div className="shadow-[1px_2px_6px_0px_#00000024] border border-gray-100 p-4 rounded-md">
        <h3 className="font-medium text-lg">Personal information</h3>
        <hr className="mt-5" />
        <div className="mt-3  md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="title"
                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                  errors.title && "text-red-600"
                }`}
              >
                Name *
              </label>
              <input
                type="text"
                id="title"
                className="border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="enter title..."
                {...register("title", { required: true })}
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="phone"
                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                  errors.phone && "text-red-600"
                }`}
              >
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="enter phone..."
                {...register("phone", { required: true })}
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                  errors.password && "text-red-600"
                }`}
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="enter password..."
                {...register("password", { required: true })}
              />
            </div>
            <button className="text-white mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full md:w-1/4">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
