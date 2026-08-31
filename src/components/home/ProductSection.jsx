import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Californian Almonds",
    description: "100% Natural, High in Protein",
    price: 319,
    mrp: 399,
    discount: "20% OFF",
    weight: ["250g", "500g"],
    image:
      "https://images.unsplash.com/photo-1508061253366-2c1b6f3e0e9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Whole Crunchy Cashews",
    description: "Grade W320, Rich & Creamy",
    price: 382,
    mrp: 450,
    discount: "15% OFF",
    weight: ["250g", "500g"],
    image:
      "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Roasted & Salted Pistachios",
    description: "Iranian Origin, Lightly Salted",
    price: 599,
    weight: ["250g"],
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Kashmiri Walnut Kernels",
    description: "Brain Food, High in Omega-3",
    price: 374,
    mrp: 499,
    discount: "25% OFF",
    weight: ["200g"],
    image:
      "https://images.unsplash.com/photo-1550028061-5b40c11d4e37?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-3xl font-semibold text-primary">
          Bestsellers
        </h2>

        <Link
          to="/products"
          className="
            flex
            items-center
            gap-1
            font-semibold
            text-secondary
            hover:underline
          "
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
