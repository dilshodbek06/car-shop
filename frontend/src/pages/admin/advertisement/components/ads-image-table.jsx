/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import Loading from "../../../../components/loading/loading";
import { deleteAdsImage } from "../../../../actions/ads/image/ads-image-actions";
import toast from "react-hot-toast";
import { baseUrl } from "../../../../helpers/apiClient";
import dateFormat from "../../../../helpers/date-format";

const AdsImageTable = ({ loading, items, refresh }) => {
  const handleDelete = async (id) => {
    const result = await deleteAdsImage(id);
    if (result?.success) {
      toast.success("Deleted success");
      refresh();
    } else {
      toast.error("Something went wrong");
    }
  };
  const getImage = (name) => {
    return `${baseUrl}/file/getFile/${name}`;
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
                          src={getImage(item?.attachment?.id)}
                          alt="image"
                        />
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {dateFormat(item.createdAt)}
                      </td>

                      <td className=" p-5 ">
                        <div className="flex items-center gap-1">
                          <button
                            // onClick={() => handleEdit(item)}
                            className="p-2 rounded-full  group transition-all duration-500  flex item-center hover:text-sky-600 hover:bg-gray-100"
                          >
                            <GoPencil size={20} />
                          </button>
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
            <div className="flex justify-end px-4 mt-2 py-3">
              {/* <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsImageTable;
