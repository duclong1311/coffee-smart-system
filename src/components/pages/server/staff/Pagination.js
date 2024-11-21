const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    console.log(currentPage);
    const handlePageClick = (page) => {
        if (page >= 1 & page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={`flex-row items-center justify-center px-3 h-8 
                    leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 
                    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                    ${i === currentPage ? "bg-Neutral-700 text-black" : ""}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    }

    return (
        <>
            <div className='pagination mt-4 flex justify-center'>
                <nav aria-label="Page navigation">
                    <ul class="inline-flex -space-x-px text-sm">
                        <li>
                            <button
                                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                disabled={currentPage === 1 ? true : false}
                                onClick={() => handlePageClick(currentPage - 1)}
                            >
                                Previous
                            </button>
                        </li>
                        <li>
                            {
                                renderPageNumbers()
                            }
                        </li>
                        <li>
                            <button
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                disabled={currentPage === totalPages ? true : false}
                                onClick={() => handlePageClick(currentPage + 1)}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Pagination;