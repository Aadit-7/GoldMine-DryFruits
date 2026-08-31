import {
  useParams,
  useSearchParams,
  Link,
} from "react-router";

import { useMemo, useState } from "react";

import { products } from "../data/products";

import ProductCard from "../components/products/ProductCard";

import CategorySidebar from "../components/category/CategorySlideBar";

import CategoryControls from "../components/category/CategoryControls";

import CategoryPagination from "../components/category/CategoryPegination";


function CategoryPage() {
  const { slug } = useParams();

  const [searchParams] = useSearchParams();

  const [sortValue, setSortValue] =
    useState("bestselling");


  const currentPage =
    Number(searchParams.get("page")) || 1;


  const productsPerPage = 4;


  const categoryProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.category === slug
    );
  }, [slug]);


  const sortedProducts = useMemo(() => {
    const productList = [...categoryProducts];

    if (sortValue === "low-high") {
      return productList.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortValue === "high-low") {
      return productList.sort(
        (a, b) => b.price - a.price
      );
    }

    return productList;
  }, [categoryProducts, sortValue]);


  const totalPages = Math.ceil(
    sortedProducts.length / productsPerPage
  );


  const startIndex =
    (currentPage - 1) * productsPerPage;


  const currentProducts =
    sortedProducts.slice(
      startIndex,
      startIndex + productsPerPage
    );


  const categoryName = slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");


  return (
    <main className="mx-auto max-w-[1200px] px-4 py-8">

      {/* Breadcrumb */}

      <nav className="mb-6 flex items-center gap-2 text-sm text-text-soft">
        <Link
          to="/"
          className="hover:text-primary"
        >
          Home
        </Link>

        <span>/</span>

        <span className="font-medium text-text-ink">
          {categoryName}
        </span>
      </nav>


      {/* Page Header */}

      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-semibold text-primary">
          {categoryName}
        </h1>

        <p className="max-w-2xl text-text-soft">
          Discover our premium selection of naturally
          sourced products. Carefully selected for
          exceptional taste and quality.
        </p>
      </div>


      <div className="flex gap-8">

        {/* Sidebar */}

        <CategorySidebar />


        {/* Product Area */}

        <div className="min-w-0 flex-1">

          <CategoryControls
            productCount={sortedProducts.length}
            sortValue={sortValue}
            setSortValue={setSortValue}
          />


          {/* Product Grid */}

          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>
          ) : (
            <div className="py-20 text-center">
              <h2 className="text-xl font-semibold">
                No products found
              </h2>

              <p className="mt-2 text-text-soft">
                Products for this category will be
                available soon.
              </p>
            </div>
          )}


          {/* Pagination */}

          <CategoryPagination
            totalPages={totalPages}
          />
        </div>
      </div>
    </main>
  );
}

export default CategoryPage;