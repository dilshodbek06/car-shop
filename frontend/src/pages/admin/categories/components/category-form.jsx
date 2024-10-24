/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "vaul";
import {
  createNewCategory,
  updateCategory,
} from "../../../../actions/category/carPart-actions";
import toast from "react-hot-toast";
import { toggleModalOpen } from "../../../../redux/slices/category/carPartSlice";

const CategoryForm = ({ open, refresh }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  const { isEditing, editingId, editingItem } = useSelector(
    (state) => state.category
  );

  const dispatch = useDispatch();

  const statusWatch = watch("status");
  const fileWatch = watch("image");

  const onSubmit = async (data) => {
    const newData = { ...data, image: data.image[0], topPart: 0 };
    try {
      if (!isEditing) {
        await createNewCategory(newData);
      } else {
        await updateCategory(editingId, newData);
      }
      refresh();
      toast.success("Success");
      handleCancel();
    } catch (e) {
      toast.error("Something went wrong");
    }
  };

  const handleCancel = () => {
    reset();
    dispatch(toggleModalOpen());
  };
  const handleRemoveImage = () => {
    setValue("image", null);
  };

  return (
    <div>
      <Drawer.Root
        open={open}
        onClose={() => dispatch(toggleModalOpen)}
        onOpenChange={handleCancel}
        direction="right"
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full max-w-lg w-full mt-24 fixed bottom-0 right-0">
            <div className="p-3 bg-white flex-1 h-full">
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4 text-xl">
                  Create new Car Part
                </Drawer.Title>
                <Drawer.Description className="hidden"></Drawer.Description>
              </div>
              <div className="overflow-y-auto scroll-smooth h-[calc(100vh-70px)] px-1">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* title */}
                  <div>
                    <label
                      htmlFor="title"
                      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                        errors.title && "text-red-600"
                      }`}
                    >
                      Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="enter title..."
                      {...register("title", { required: true })}
                    />
                  </div>
                  {/* active */}
                  <div className="mt-4">
                    <label
                      htmlFor="status"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Choose a status
                    </label>
                    <label className="inline-flex items-center me-5 mt-1 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        id="status"
                        className="sr-only peer"
                        {...register("status")}
                      />
                      <span className=" text-sm font-medium text-gray-900 ">
                        {statusWatch ? "Active" : "Noactive"}
                      </span>
                      <div className="relative ml-3 w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-1 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  {/* image */}
                  <div className="mt-4">
                    {fileWatch?.length > 0 && fileWatch[0] ? (
                      <div className="flex gap-x-5 items-center">
                        <img
                          src={URL.createObjectURL(fileWatch[0])}
                          alt="image"
                          className="w-28 h-28 rounded-sm"
                        />
                        <button
                          onClick={handleRemoveImage}
                          type="button"
                          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-1 focus:ring-gray-100 "
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div>
                        <label
                          className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                            errors.image && "text-red-600"
                          }`}
                          htmlFor="uploadimage"
                        >
                          Upload photo *
                        </label>
                        <label
                          htmlFor="uploadimage"
                          className="bg-white text-gray-500 font-semibold text-base rounded  h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif] hover:border-gray-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-11 mb-2 fill-gray-500"
                            viewBox="0 0 32 32"
                          >
                            <path
                              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                              data-original="#000000"
                            />
                            <path
                              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                              data-original="#000000"
                            />
                          </svg>
                          Upload file
                          <input
                            type="file"
                            id="uploadimage"
                            className="hidden"
                            {...register("image", { required: true })}
                          />
                          <p className="text-xs font-medium text-gray-400 mt-2">
                            PNG, JPG, SVG and WEBP are Allowed.
                          </p>
                        </label>
                      </div>
                    )}
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

export default CategoryForm;
