import { useParams, Link } from "react-router";

import { products } from "../data/products";

import ProductGallery from "../components/product-details/ProductGallary";

import ProductInfo from "../components/product-details/ProductInfo";

import ProductDetailsAccordion from "../components/product-details/ProductDetailAccordion";

function ProductDetailsPage() {
  const { productId } = useParams();

  const product = products.find(
    (item) =>
      String(item.id) === String(productId)
  );

  if (!product) {
    return (
      <div className="mx-auto max-w-[1200px] px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-text-ink">
          Product Not Found
        </h1>

        <p className="mt-3 text-text-soft">
          The product you are looking for does
          not exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-white"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-8">
      {/* Breadcrumb */}

      <nav className="mb-8 flex items-center gap-2 text-sm text-text-soft">
        <Link
          to="/"
          className="hover:text-primary"
        >
          Home
        </Link>

        <span>/</span>

        <Link
          to={`/category/${product.category}`}
          className="capitalize hover:text-primary"
        >
          {product.category}
        </Link>

        <span>/</span>

        <span className="truncate text-text-ink">
          {product.name}
        </span>
      </nav>

      {/* Main Product Section */}

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
        {/* Gallery */}

        <div className="md:col-span-7">
          <ProductGallery
            product={product}
          />
        </div>

        {/* Product Info */}

        <div className="md:col-span-5">
          <ProductInfo
            product={product}
          />
        </div>
      </div>

      {/* Details Section */}

      <div className="mt-10 md:ml-auto md:w-[41.666667%]">
        <ProductDetailsAccordion
          product={product}
        />
      </div>
    </main>
  );
}

export default ProductDetailsPage;