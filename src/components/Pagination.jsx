const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber)
    }
  }

  const getPageNumbers = () => {
    const pages = []
    const range = 2 

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - range && i <= currentPage + range) 
      ) {
        pages.push(i)
      } else if (
        i === currentPage - range - 1 ||
        i === currentPage + range + 1
      ) {
        pages.push("...")
      }
    }
   
    return pages.filter((item, index) => pages.indexOf(item) === index)
  }

  const buttonBase =
    "px-3 py-2 mx-1 font-bold rounded-lg transition-all duration-200 min-w-[40px]"
  const activeClass = "bg-tawny-olive text-black-wash shadow-lg scale-105"
  const inactiveClass =
    "bg-scrabeus-sacer text-tawny-olive hover:bg-corn-harvest hover:text-black-wash"

  return (
    <div className="flex flex-wrap justify-center items-center mt-10 mb-10 gap-y-2">
      {/* PŘEDCHOZÍ */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`${buttonBase} ${
          currentPage <= 1 ? "opacity-30 cursor-not-allowed" : inactiveClass
        }`}
      >
        &larr;
      </button>

      {/* ČÍSLA STRÁNEK */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && goToPage(page)}
          className={`${buttonBase} ${
            page === currentPage
              ? activeClass
              : page === "..."
                ? "cursor-default text-tawny-olive opacity-50"
                : inactiveClass
          }`}
        >
          {page}
        </button>
      ))}

      {/* DALŠÍ */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`${buttonBase} ${
          currentPage >= totalPages
            ? "opacity-30 cursor-not-allowed"
            : inactiveClass
        }`}
      >
        &rarr;
      </button>
    </div>
  )
}

export default Pagination
