import React from "react";

const TablePagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onNextPage,
  onPreviousPage,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <div className="flex items-center justify-center space-x-2 mt-4">
        <button
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded ${
              page === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
