/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Drawer } from "vaul";
import toast from "react-hot-toast";
import apiClient from "../../../../helpers/apiClient";

const AdminForm = ({ open, refresh, handleClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await apiClient(`/auth/register/admin`, "post", data);
      refresh();
      toast.success("Muvafaqqiyatli");
      handleCancel();
    } catch (e) {
      toast.error("Xatolik yuz berdi");
    }
  };

  const handleCancel = () => {
    reset();
    handleClose();
  };

  return (
    <div>
      <Drawer.Root
        open={open}
        onClose={handleClose}
        onOpenChange={handleCancel}
        direction="right"
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full max-w-lg w-full mt-24 fixed bottom-0 right-0">
            <div className="p-3 bg-white flex-1 h-full">
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4 text-xl">
                  Create new Admin
                </Drawer.Title>
                <Drawer.Description className="hidden"></Drawer.Description>
              </div>
              <div className="overflow-y-auto scroll-smooth h-[calc(100vh-70px)] px-1">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* title */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                        errors.name && "text-red-600"
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="enter full name..."
                      {...register("name", { required: true })}
                    />
                  </div>
                  {/* phone */}
                  <div className="mt-3">
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
                      placeholder="enter phone number..."
                      {...register("phone", { required: true })}
                    />
                  </div>
                  {/* password */}
                  <div className="mt-3">
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
                  {/* action buttons */}
                  <div className="flex justify-end items-center mt-6 gap-x-3 pb-2">
                    <button
                      type="button"
                      onClick={() => handleCancel()}
                      className="bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Cancel
                    </button>
                    <button
                      disabled={isSubmitting}
                      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      {isSubmitting ? "Loading..." : "Save"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default AdminForm;
