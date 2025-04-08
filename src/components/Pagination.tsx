interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center my-8">
      <div>
        <ul className="flex space-x-2">
          <li>
            <button
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-2 py-1 cursor-pointer hover:opacity-80 transition rounded-md ${
                currentPage === 1
                  ? "bg-gradient-to-t from-[#ec8f8f] to-[#ff0000] text-white cursor-not-allowed"
                  : "bg-gradient-to-t from-[#ec8f8f] to-[#ff0000] text-white"
              }`}
            >
              &laquo;
            </button>
          </li>

          {getPageNumbers().map((number) => (
            <li key={number}>
              <button
                onClick={() => onPageChange(number)}
                className={`px-2 py-1 cursor-pointer hover:opacity-80 transition rounded-md ${
                  currentPage === number
                    ? "bg-gradient-to-t from-[#5927ef] to-[#48097b] text-white"
                    : "bg-gradient-to-t from-[#ec8f8f] to-[#ff0000] text-white"
                }`}
              >
                {number}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={() =>
                currentPage < totalPages && onPageChange(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className={`px-2 py-1 cursor-pointer hover:opacity-80 transition rounded-md ${
                currentPage === totalPages
                  ? "bg-gradient-to-t from-[#ec8f8f] to-[#ff0000] text-white cursor-not-allowed"
                  : "bg-gradient-to-t from-[#ec8f8f] to-[#ff0000] text-white"
              }`}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
