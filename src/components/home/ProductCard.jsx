import { Heart, ShoppingCart } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-lg
        border
        border-border-sage
        bg-surface-sage
      "
    >
      {/* Discount */}
      {product.discount && (
        <span
          className="
            absolute
            left-3
            top-3
            z-10
            rounded
            bg-secondary-container
            px-2
            py-1
            text-xs
            font-bold
            text-text-ink
          "
        >
          {product.discount}
        </span>
      )}

      {/* Wishlist */}
      <button
        className="
          absolute
          right-3
          top-3
          z-10
          rounded-full
          bg-surface/80
          p-2
          text-on-surface-variant
          backdrop-blur
          hover:text-error-red
        "
      >
        <Heart size={18} />
      </button>

      {/* Image */}
      <div className="aspect-square bg-surface-container-lowest">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-cover
            p-4
            transition
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col bg-surface-container-low p-4">
        <h3 className="font-semibold text-on-surface">{product.name}</h3>

        <p className="mt-1 text-sm text-on-surface-variant">
          {product.description}
        </p>

        {/* Weight */}
        <div className="my-4 flex gap-2">
          {product.weight.map((weight, index) => (
            <button
              key={weight}
              className={
                index === 0
                  ? "rounded border border-primary bg-primary/5 px-2 py-1 text-xs font-semibold text-primary"
                  : "rounded border border-border-sage px-2 py-1 text-xs text-on-surface-variant"
              }
            >
              {weight}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="mt-auto flex items-end justify-between">
          <div>
            {product.mrp && (
              <p className="text-sm text-on-surface-variant line-through">
                ₹{product.mrp}
              </p>
            )}

            <p className="text-xl font-bold text-primary">₹{product.price}</p>
          </div>

          <button
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded
              bg-secondary-container
              text-text-ink
              transition
              hover:bg-secondary-fixed
            "
          >
            <ShoppingCart size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
