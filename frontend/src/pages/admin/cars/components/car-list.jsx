/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import Badge from "../../components/badge";
import { deleteCar } from "../../../../actions/cars//cars-actions";
import toast from "react-hot-toast";
import dateformat from "../../../../helpers/date-format";
import Loading from "../../../../components/loading/loading";

const CarList = ({ refresh, loading, items }) => {
  const getImage = (name) => {
    return `http://localhost:8080/api/v1/file/getFile/${name}`;
  };
  const handleDelete = async (id) => {
    const result = await deleteCar(id);
    if (result?.success) {
      toast.success("Muvafaqqiyatli o'chirildi");
      refresh();
    } else {
      toast.error("Xatolik yuz berdi");
    }
  };

  return (
    <div className="flex flex-col mt-2">
      <div className=" overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loading />
              </div>
            ) : (
              <table className=" min-w-full rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-tl-xl"
                    >
                      №
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Photo
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Active
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {items?.length <= 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center py-4 text-gray-700"
                      >
                        No data found
                      </td>
                    </tr>
                  )}
                  {items?.map((item, ind) => (
                    <tr
                      key={ind}
                      className="bg-white transition-all duration-500 hover:bg-gray-50"
                    >
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                        {ind + 1}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        <img
                          className="w-16 h-16 cursor-pointer"
                          src={getImage(item?.photo?.id)}
                          alt="photo"
                          loading="lazy"
                        />
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {item?.name}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {item?.brand?.name}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        <Badge isActive={item?.active} />
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {dateformat(item?.createdAt)}
                      </td>
                      <td className=" p-5 ">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleDelete(item?.id)}
                            className="p-2 rounded-full  group transition-all duration-500  flex item-center hover:text-red-600 hover:bg-gray-100"
                          >
                            <AiOutlineClose size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;

{
  /* <div className="px-3 py-4 flex justify-center border-2 border-red-600 overflow-x-auto">
<table className="w-full px-2 md:px-0 text-md bg-white shadow-sm rounded mb-4">
  <thead>
    <tr className="border-b">
      <th className="text-left p-3 px-5">№</th>
      <th className="text-left p-3 px-5">Title</th>
      <th className="text-left p-3 px-5">Description</th>
      <th className="text-center p-3 px-5">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b hover:bg-gray-100 bg-gray-50">
      <td className="p-3 px-5">1</td>
      <td className="p-3 px-5">Zapchat</td>
      <td className="p-3 px-5">Lorem ipsum dolor sit amet.</td>
      <td className="p-3 px-5 flex justify-end">
        <button className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded focus:outline-none focus:shadow-outline">
          <GoPencil />
        </button>
        <button
          type="button"
          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          <AiOutlineClose />
        </button>
      </td>
    </tr>
  </tbody>
</table>
</div> */
}
