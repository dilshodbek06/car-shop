import { BiCategoryAlt } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { MdCampaign, MdListAlt } from "react-icons/md";

const Statistics = () => {
  return (
    <div className="px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-md shadow-md hover:shadow-lg">
          <div className="mt-1 flex items-center gap-x-3">
            <div className="p-4 rounded-md bg-cyan-100">
              <BiCategoryAlt size={24} className="text-cyan-500" />
            </div>
            <p className="font-bold text-xl">Total Categories</p>
          </div>
          <div className="mt-2">
            <h2 className="font-medium text-xl ml-3">4x</h2>
          </div>
        </div>
        <div className="p-4 rounded-md shadow-md hover:shadow-lg">
          <div className="mt-1 flex items-center gap-x-3">
            <div className="p-4 rounded-md bg-orange-100">
              <MdListAlt size={24} className="text-orange-500" />
            </div>
            <p className="font-bold text-xl">Total Products</p>
          </div>
          <div className="mt-2">
            <h2 className="font-medium text-xl ml-3">4x</h2>
          </div>
        </div>
        <div className="p-4 rounded-md shadow-md hover:shadow-lg">
          <div className="mt-1 flex items-center gap-x-3">
            <div className="p-4 rounded-md bg-yellow-100">
              <CiViewList size={24} className="text-yellow-500" />
            </div>
            <p className="font-bold text-xl">Total Orders</p>
          </div>
          <div className="mt-2">
            <h2 className="font-medium text-xl ml-3">4x</h2>
          </div>
        </div>
        <div className="p-4 rounded-md shadow-md hover:shadow-lg">
          <div className="mt-1 flex items-center gap-x-3">
            <div className="p-4 rounded-md bg-indigo-100">
              <MdCampaign size={24} className="text-indigo-500" />
            </div>
            <p className="font-bold text-xl">Total Ads</p>
          </div>
          <div className="mt-2">
            <h2 className="font-medium text-xl ml-3">4x</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
