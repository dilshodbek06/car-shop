import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

/* eslint-disable react/prop-types */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-3 py-[5px] ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white rounded"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <GrFormPreviousLink size={22} />
      </button>

      {[...Array(totalPages).keys()].map((_, idx) => (
        <button
          key={idx}
          disabled={currentPage === idx + 1}
          className={`px-3 py-1 ${
            currentPage === idx + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}

      <button
        className={`px-3 py-[5px] ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white rounded"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <GrFormNextLink size={22} />
      </button>
    </div>
  );
};

export default Pagination;
