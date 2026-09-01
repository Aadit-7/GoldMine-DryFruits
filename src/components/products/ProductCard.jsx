import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

function ProductCard({ product }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border-sage bg-surface-sage">
      {product.discount && (
        <span className="absolute left-3 top-3 z-10 rounded bg-error-red px-2 py-1 text-xs font-bold text-white">
          {product.discount}
        </span>
      )}

      <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow">
        <Heart size={18} className="text-text-soft hover:text-error-red" />
      </button>

      {/* Product Image - Clickable */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        {/* Product Name - Clickable */}
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-1 text-base font-semibold text-primary hover:underline">
            {product.name}
          </h3>
        </Link>

        <p className="mb-4 text-sm text-text-soft">{product.description}</p>

        <div className="mt-auto">
          <div className="mb-4 flex items-end gap-2">
            <span className="text-xl font-bold text-text-ink">
              ₹{product.price}
            </span>

            {product.originalPrice && (
              <span className="text-sm text-text-soft line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded bg-secondary-container py-2.5 text-xs font-bold tracking-wide text-text-ink transition hover:bg-secondary hover:text-white">
            <ShoppingCart size={16} />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
