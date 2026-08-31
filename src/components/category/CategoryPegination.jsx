import {
  useNavigate,
  useSearchParams,
} from "react-router";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function CategoryPagination({ totalPages }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentPage =
    Number(searchParams.get("page")) || 1;

  const changePage = (page) => {
    navigate(`?page=${page}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-2">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            changePage(currentPage - 1)
          }
          className="flex h-10 w-10 items-center justify-center rounded-md border border-outline-variant disabled:opacity-50"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((page) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-md font-medium transition ${
              currentPage === page
                ? "bg-primary text-white"
                : "border border-outline-variant text-text-soft hover:bg-surface-container-highest"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            changePage(currentPage + 1)
          }
          className="flex h-10 w-10 items-center justify-center rounded-md border border-outline-variant disabled:opacity-50"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default CategoryPagination;