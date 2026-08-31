import { Link } from "react-router";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group flex flex-col items-center"
    >
      <div className="h-24 w-24 overflow-hidden rounded-full">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>

      <p className="mt-3 text-sm font-semibold tracking-wide">
        {category.name}
      </p>
    </Link>
  );
}

export default CategoryCard;
