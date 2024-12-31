/* eslint-disable react/prop-types */
import { Drawer } from "vaul";
import Badge from "../../components/badge";
import { formatDateInUzbekistan } from "../../../../../helpers/date-format";
import { formatUzbekistanPhoneNumber } from "../../../../../helpers/phone-number";

const SeeDetailModal = ({ open, currentOrder, handleClose }) => {
  const calculateTotalPrice = () => {
    if (currentOrder === null) {
      return 0;
    }
    let s = 0;
    for (let i = 0; i < currentOrder?.products?.length; i++) {
      s +=
        currentOrder?.products[i]?.count *
        currentOrder?.products[i]?.product?.price;
    }
    return s;
  };
  return (
    <div>
      <Drawer.Root
        open={open}
        onClose={handleClose}
        onOpenChange={handleClose}
        direction="right"
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full max-w-xl w-full mt-24 fixed bottom-0 right-0 ">
            <div className="p-3 bg-white flex-1 h-full">
              <div className="max-w-lg mx-auto relative">
                <Drawer.Title className="font-medium mb-4 text-xl">
                  Order details
                </Drawer.Title>
                <button
                  onClick={handleClose}
                  className="absolute top-0 right-1 w-7 h-7 flex items-center text-lg justify-center rounded-full hover:bg-gray-100"
                >
                  x
                </button>
                <Drawer.Description className="hidden"></Drawer.Description>
              </div>
              <div className="overflow-y-auto scroll-smooth h-[calc(100vh-70px)] px-1 ">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm">
                        Order Id: #
                        {currentOrder !== null &&
                          currentOrder?.order?.id?.slice(0, 5)}
                      </p>
                      <p className="text-sm mt-2">
                        {currentOrder !== null &&
                          formatDateInUzbekistan(
                            currentOrder?.order?.createdAt
                          )}
                      </p>
                    </div>
                    <div>
                      <div>
                        Order Status:{" "}
                        <Badge
                          name={
                            currentOrder !== null &&
                            currentOrder?.order?.status?.name?.toLowerCase()
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 py-3">
                  <table className="min-w-full rounded-xl">
                    <thead>
                      <tr className="bg-gray-50">
                        <th
                          scope="col"
                          className="p-3 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-tl-xl"
                        >
                          №
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                        >
                          Price
                        </th>

                        <th
                          scope="col"
                          className="p-3 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                      {currentOrder != null &&
                        currentOrder?.products?.map((item, ind) => (
                          <tr
                            key={ind}
                            className="bg-white transition-all duration-500 hover:bg-gray-50"
                          >
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                              {ind + 1}
                            </td>
                            <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                              {item?.product?.name}
                            </td>
                            <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                              {item?.count}x
                            </td>
                            <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                              {item?.product?.price?.toLocaleString()} UZS
                            </td>
                            <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                              {(
                                item?.product?.price * item?.count
                              )?.toLocaleString()}{" "}
                              UZS
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end py-3">
                    <h3 className="font-bold">
                      Total Price:{" "}
                      <span className="font-normal">
                        {calculateTotalPrice()?.toLocaleString()} UZS
                      </span>
                    </h3>
                  </div>
                </div>
                <hr className="mt-2" />
                {currentOrder !== null && (
                  <div className="mt-2 p-3">
                    <h5 className="font-bold">Shipping Address</h5>
                    <div className="mt-3 pl-2 space-y-2">
                      <p className="font-medium">
                        FullName:{" "}
                        <span className="font-normal">
                          {currentOrder?.order?.client_name}
                        </span>
                      </p>
                      <p className="font-medium">
                        Phone:{" "}
                        <span className="font-normal">
                          {formatUzbekistanPhoneNumber(
                            currentOrder?.order?.phone_number
                          )}
                        </span>
                      </p>
                      <p className="font-medium">
                        Address: <span className="font-normal">Bukhara</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default SeeDetailModal;
