import { useState } from "react";
import CategoryList from "./components/category-list";
import CategoryForm from "./components/category-form";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold text-3xl">Categories</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          + New
        </button>
      </div>
      <CategoryList />
      <CategoryForm open={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Categories;
