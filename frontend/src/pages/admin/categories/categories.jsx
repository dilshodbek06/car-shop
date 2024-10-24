import { useEffect } from "react";
import CategoryList from "./components/category-list";
import CategoryForm from "./components/category-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoriesFailure,
  fetchCategoriesStart,
  fetchCategoriesSucess,
  handleTotalPage,
  toggleModalOpen,
} from "../../../redux/slices/category/carPartSlice";
import { getAllCategories } from "../../../actions/category/carPart-actions";

const Categories = () => {
  const dispatch = useDispatch();
  const {
    fetchLoading,
    categories,
    modalOpen: isOpen,
  } = useSelector((state) => state.category);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async (currentPage) => {
    try {
      dispatch(fetchCategoriesStart());
      const data = await getAllCategories(currentPage);
      dispatch(fetchCategoriesSucess(data?.content));
      dispatch(handleTotalPage(data?.totalPages));
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
      dispatch(fetchCategoriesFailure());
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold text-2xl md:text-3xl">Car Parts</h1>
        <button
          onClick={() => dispatch(toggleModalOpen())}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          + New
        </button>
      </div>
      <CategoryList
        refresh={fetch}
        loading={fetchLoading}
        items={categories ?? []}
      />
      <CategoryForm refresh={fetch} open={isOpen} />
    </div>
  );
};

export default Categories;
