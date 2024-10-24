import { useEffect } from "react";
import BrandList from "./components/brand-list";
import BrandForm from "./components/brand-form";
import { getAllBrands } from "../../../actions/brand/brand-actions";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBrandsFailure,
  fetchBrandsStart,
  fetchBrandsSucess,
  handleTotalPage,
  toggleModalOpen,
} from "../../../redux/slices/brand/brandSlice";

const Brands = () => {
  const {
    fetchLoading,
    brands,
    modalOpen: isOpen,
  } = useSelector((state) => state.brand);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async (currentPage) => {
    try {
      dispatch(fetchBrandsStart());
      const data = await getAllBrands(currentPage);
      dispatch(fetchBrandsSucess(data?.content));
      dispatch(handleTotalPage(data?.totalPages));
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
      dispatch(fetchBrandsFailure());
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold text-2xl md:text-3xl">Brands</h1>
        <button
          onClick={() => dispatch(toggleModalOpen())}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          + New
        </button>
      </div>
      <BrandList refresh={fetch} loading={fetchLoading} items={brands ?? []} />
      <BrandForm refresh={fetch} open={isOpen} />
    </div>
  );
};

export default Brands;
