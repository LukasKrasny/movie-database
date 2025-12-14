const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber <= totalPages) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onPageChange(pageNumber);
    }
  };

  const buttonClass =
  "px-4 py-2 mx-1 font-bold rounded-lg transition-colors duration-200";
  const activeClass = "bg-tawny-olive text-black-wash";
  const inactiveClass =
  "bg-scrabeus-sacer text-tawny-olive hover:bg-corn-harvest hover:text-black-wash";

  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      {/* PŘEDCHOZÍ */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`${buttonClass} ${
          currentPage <= 1 ? "opacity-50 cursor-not-allowed" : inactiveClass
        }`}
      >
        Předchozí
      </button>

      {/* ZOBRAZENÍ STAVU */}
      <span className={`px-4 py-2 mx-1 font-bold rounded-lg ${activeClass}`}>
        Stránka {currentPage} z {totalPages}
      </span>

      {/* DALŠÍ */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`${buttonClass} ${
          currentPage >= totalPages
            ? "opacity-50 cursor-not-allowed"
            : inactiveClass
        }`}
      >
        Další
      </button>
    </div>
  )
};

export default Pagination;