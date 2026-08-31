import CategoryCard from "./CategoryCard";
import nutImage from "../../assets/Hero-images/Nuts.avif";
import barriesImage from "../../assets/Hero-images/Berreis.avif";
import dateImages from "../../assets/Hero-images/Dates.avif";
import giftBoxImage from "../../assets/Hero-images/Gift Boc.avif";
const categories = [
  {
    name: "NUTS",
    slug: "nuts",
    image: nutImage,
  },
  {
    name: "BERRIES",
    slug: "berries",
    image: barriesImage,
  },
  {
    name: "DATES",
    slug: "dates",
    image: dateImages,
  },
  {
    name: "GIFT BOX",
    slug: "gifts",
    image: giftBoxImage,
  },
];

function CategoryList() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8">
      <div className="flex gap-8 overflow-x-auto pb-4 md:justify-center">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
