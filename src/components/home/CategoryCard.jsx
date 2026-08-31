import { Link } from "react-router";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="
        group
        flex
        min-w-[80px]
        flex-col
        items-center
        gap-3
      "
    >
      <div
        className="
          h-20
          w-20
          overflow-hidden
          rounded-full
          border
          border-border-sage
          bg-surface-sage
        "
      >
        <img
          src={category.image}
          alt={category.name}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      <span className="text-xs font-bold tracking-wider text-on-surface">
        {category.name}
      </span>
    </Link>
  );
}

export default CategoryCard;
