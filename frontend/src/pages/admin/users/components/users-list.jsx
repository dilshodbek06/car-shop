import { GoPencil } from "react-icons/go";
import Loading from "../../../../components/loading/loading";
import { useEffect, useState } from "react";
import apiClient from "../../../../helpers/apiClient";
import { formatUzbekistanPhoneNumber } from "../../../../helpers/phone-number";
import { AiOutlineClose } from "react-icons/ai";
import AdminForm from "./admin-form";

// eslint-disable-next-line react/prop-types
const UsersList = ({ open, setOpen }) => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const res = await apiClient(`/auth/admin`, "get");
      setLoading(false);
      setAdmins(res?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mt-2">
      <div className=" overflow-x-auto">
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
                      Full name
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Phone
                    </th>

                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 ">
                  {admins?.length <= 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="text-center py-4 text-gray-700"
                      >
                        No data found
                      </td>
                    </tr>
                  )}
                  {admins?.map((admin, ind) => (
                    <tr
                      key={ind}
                      className="bg-white transition-all duration-500 hover:bg-gray-50"
                    >
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                        {ind + 1}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {admin?.name}
                      </td>

                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {formatUzbekistanPhoneNumber(admin?.phone)}
                      </td>
                      <td className=" p-5 ">
                        <div className="flex items-center gap-1">
                          <button className="p-2 rounded-full  group transition-all duration-500  flex item-center hover:text-sky-600 hover:bg-gray-100">
                            <GoPencil size={20} />
                          </button>
                          <button className="p-2 rounded-full  group transition-all duration-500  flex item-center hover:text-red-600 hover:bg-gray-100">
                            <AiOutlineClose size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <div>
              <AdminForm
                open={open}
                handleClose={() => setOpen(false)}
                refresh={fetchAdmins}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
