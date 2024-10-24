/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { MdCampaign, MdListAlt } from "react-icons/md";
import {
  adsLength,
  brandsLength,
  carPartsLength,
  carsLength,
  ordersLength,
  productsLength,
} from "../../../../actions/statistics/statistics";
import { SiBrandfolder } from "react-icons/si";
import { IoCarOutline } from "react-icons/io5";
import SkeletonLoading from "./skeleton-loading";

const StatCard = ({ icon, bgColor, title, count, loading }) =>
  loading ? (
    <SkeletonLoading />
  ) : (
    <div className="p-2 sm:p-4 rounded-md shadow-md hover:shadow-lg">
      <div className="mt-1 flex items-center gap-x-2 sm:gap-x-3">
        <div className={`p-2 sm:p-4 rounded-md ${bgColor}`}>{icon}</div>
        <p className="font-bold text-sm sm:text-xl">{title}</p>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-lg sm:text-xl ml-1 sm:ml-3">
          {count}x
        </h2>
      </div>
    </div>
  );

const Statistics = () => {
  const [stats, setStats] = useState({
    cars: 0,
    brands: 0,
    products: 0,
    orders: 0,
    ads: 0,
    carParts: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchStatistics = async () => {
    setLoading(true); // Set loading state to true
    try {
      const [
        carCount,
        brandCount,
        productCount,
        orderCount,
        adCount,
        carPartsCount,
      ] = await Promise.all([
        carsLength(),
        brandsLength(),
        productsLength(),
        ordersLength(),
        adsLength(),
        carPartsLength(),
      ]);

      setStats({
        cars: carCount,
        brands: brandCount,
        products: productCount,
        orders: orderCount,
        ads: adCount,
        carParts: carPartsCount,
      });
    } catch (error) {
      console.error("Error fetching statistics:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  return (
    <div className="px-3">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<BiCategoryAlt size={24} className="text-cyan-500" />}
          bgColor="bg-cyan-50"
          title="Total Categories"
          count={stats.carParts}
          loading={loading}
        />
        <StatCard
          icon={<MdListAlt size={24} className="text-orange-500" />}
          bgColor="bg-orange-50"
          title="Total Products"
          count={stats.products}
          loading={loading}
        />
        <StatCard
          icon={<CiViewList size={24} className="text-yellow-500" />}
          bgColor="bg-yellow-50"
          title="Total Orders"
          count={stats.orders}
          loading={loading}
        />
        <StatCard
          icon={<MdCampaign size={24} className="text-indigo-500" />}
          bgColor="bg-indigo-50"
          title="Total Ads"
          count={stats.ads}
          loading={loading}
        />
        <StatCard
          icon={<SiBrandfolder size={24} className="text-violet-500" />}
          bgColor="bg-violet-50"
          title="Total Brands"
          count={stats.brands}
          loading={loading}
        />
        <StatCard
          icon={<IoCarOutline size={24} className="text-fuchsia-500" />}
          bgColor="bg-fuchsia-50"
          title="Total Cars"
          count={stats.cars}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Statistics;
