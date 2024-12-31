import Loading from "../../../../components/loading/loading";
import Badge from "../components/badge";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdEye } from "react-icons/io";
import { useOrdersFetch } from "../../../../hooks/use-orders";
import { formatDateInUzbekistan } from "../../../../helpers/date-format";
import { useState } from "react";
import { formatUzbekistanPhoneNumber } from "../../../../helpers/phone-number";
import SeeDetailModal from "../new-orders/components/see-detail-modal";
import { TbArrowsExchange } from "react-icons/tb";
import apiClient from "../../../../helpers/apiClient";
import toast from "react-hot-toast";
import Pagination from "../../components/pagination";

const ProgressOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, totalPages } = useOrdersFetch(
    "/order",
    "INPROGRESS",
    currentPage
  );

  const [open, setOpen] = useState(false);
  const [currentDetail, setCurrentDetail] = useState(null);
  const [isShow, setIsShow] = useState({});

  const handleSeeOrderDetail = (item) => {
    setOpen(true);
    setCurrentDetail(item);
  };

  const toggleIsShow = (index) => {
    setIsShow((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleChangeOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await apiClient(`/order/${orderId}`, "PUT", null, {
        status: newStatus,
      });
      if (response.data === "Status updated successfully") {
        toast.success("Muvafaqqiyatli");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col mt-2">
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden ">
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
                      Full Name
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Order Date
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Location
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
                  {data?.length <= 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center py-4 text-gray-700"
                      >
                        No data found
                      </td>
                    </tr>
                  )}
                  {data?.map((item, ind) => (
                    <tr
                      key={ind}
                      className="bg-white transition-all duration-500 hover:bg-gray-50"
                    >
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                        {ind + 1 + 5 * (currentPage - 1)}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {item?.order?.client_name}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {formatUzbekistanPhoneNumber(item?.order?.phone_number)}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {formatDateInUzbekistan(item?.order?.createdAt)}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        <Badge
                          name={item?.order?.status?.name?.toLowerCase()}
                        />
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        <Link
                          target="_blank"
                          to={`https://www.google.com/maps?q=${item?.order.latitude},${item?.order.longitude}`}
                          className="text-blue-500 transition-all hover:underline"
                        >
                          Link
                        </Link>
                      </td>
                      <td className=" p-5 ">
                        <div className="flex items-center gap-1">
                          <div>
                            {isShow[ind] ? (
                              <div className="flex items-center gap-x-1">
                                <select
                                  defaultValue={""}
                                  onChange={(e) =>
                                    handleChangeOrderStatus(
                                      item?.order?.id,
                                      e.target.value
                                    )
                                  }
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                                >
                                  <option value={""} disabled selected>
                                    Change status
                                  </option>
                                  <option value="INPROGRESS">Completed</option>
                                  <option value="DECLINED">Declined</option>
                                </select>
                                <button
                                  onClick={() => toggleIsShow(ind)}
                                  title="Cancel"
                                  className="p-2 rounded-full  group transition-all duration-500  flex item-center hover:text-sky-600 hover:bg-gray-100"
                                >
                                  <IoMdClose size={20} />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => toggleIsShow(ind)}
                                title="Change status"
                                className="p-2 rounded-full  group transition-all duration-500  flex item-center hover:text-sky-600 hover:bg-gray-100"
                              >
                                <TbArrowsExchange size={20} />
                              </button>
                            )}
                          </div>
                          <button
                            onClick={() => handleSeeOrderDetail(item)}
                            title="See detail"
                            className="p-2 rounded-full  group transition-all duration-500  flex item-center hover:text-sky-600 hover:bg-gray-100"
                          >
                            <IoMdEye size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <div className="flex justify-end px-4 mt-2 py-3">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
            <div>
              <SeeDetailModal
                open={open}
                currentOrder={currentDetail}
                handleClose={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressOrders;
