import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <div className="flex justify-center gap-2 mt-14 flex-wrap ">
      {/* <button
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border border-white text-white rounded disabled:opacity-30"
      >
        قبلی
      </button> */}

      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx + 1}
          onClick={() => handlePageChange(idx + 1)}
          className={`px-3 py-1 border border-gray-300 text-white rounded ${
            currentPage === idx + 1 ? "bg-white text-black" : ""
          }`}
        >
          {idx + 1}
        </button>
      ))}

      {/* <button
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border border-white text-white rounded disabled:opacity-30"
      >
        بعدی
      </button> */}
    </div>
  );
};

export default Pagination;
