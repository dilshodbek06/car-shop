import { useEffect } from "react";
import ProductList from "./components/product-list";
import ProductForm from "./components/product-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSucess,
  handleTotalPage,
  toggleModalOpen,
} from "../../../redux/slices/product/productSlice";
import { getAllProducts } from "../../../actions/product/product-actions";

const Products = () => {
  const {
    fetchLoading,
    products,
    modalOpen: isOpen,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async (currentPage) => {
    try {
      dispatch(fetchProductsStart());
      const data = await getAllProducts(currentPage);
      dispatch(fetchProductsSucess(data?.content));
      dispatch(handleTotalPage(data?.totalPages));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      dispatch(fetchProductsFailure());
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold text-2xl md:text-3xl">Products</h1>
        <button
          onClick={() => dispatch(toggleModalOpen())}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          + New
        </button>
      </div>
      <ProductList
        refresh={fetch}
        loading={fetchLoading}
        items={products ?? []}
      />
      <ProductForm refresh={fetch} open={isOpen} />
    </div>
  );
};

export default Products;
