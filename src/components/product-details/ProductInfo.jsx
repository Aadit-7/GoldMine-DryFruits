import { useState } from "react";

import {
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  const weights =
    product.weights || [
      "100g",
      "200g",
      "500g",
      "1kg",
    ];

  const [selectedWeight, setSelectedWeight] =
    useState(weights[0]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) =>
      prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <div className="flex flex-col gap-6 md:sticky md:top-24">
      {/* Product Header */}

      <div className="border-b border-surface-variant pb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-text-soft">
          {product.brand || "Premium Collection"}
        </p>

        <h1 className="mt-2 text-3xl font-semibold leading-tight text-text-ink md:text-4xl">
          {product.name}
        </h1>

        {/* Rating */}

        <div className="mt-3 flex items-center gap-2">
          <div className="flex">
            {Array.from(
              { length: 5 },
              (_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill={
                    index <
                    Math.round(
                      product.rating || 4.5
                    )
                      ? "currentColor"
                      : "none"
                  }
                  className="text-secondary-container"
                />
              )
            )}
          </div>

          <span className="text-sm text-primary underline">
            (
            {product.reviews || 0} Reviews)
          </span>
        </div>
      </div>

      {/* Price */}

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-2xl font-bold text-text-ink">
          ₹{product.price}
        </span>

        {product.originalPrice && (
          <span className="text-sm text-outline line-through">
            ₹{product.originalPrice}
          </span>
        )}

        <span className="ml-auto rounded-md bg-primary-fixed-dim/20 px-2 py-1 text-xs font-bold text-primary">
          Inclusive of all taxes
        </span>
      </div>

      {/* Weight Selector */}

      <div>
        <h2 className="mb-3 text-lg font-semibold text-text-ink">
          Select Weight
        </h2>

        <div className="flex flex-wrap gap-3">
          {weights.map((weight) => (
            <button
              key={weight}
              onClick={() =>
                setSelectedWeight(weight)
              }
              className={`min-h-11 rounded-full border px-5 py-2 text-sm transition ${
                selectedWeight === weight
                  ? "border-primary bg-primary text-white"
                  : "border-outline-variant text-text-soft hover:border-primary"
              }`}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Cart */}

      <div className="flex gap-4">
        {/* Quantity */}

        <div className="flex h-11 w-32 items-center justify-between overflow-hidden rounded-lg border border-outline-variant bg-white">
          <button
            onClick={decreaseQuantity}
            className="flex h-full w-10 items-center justify-center text-text-soft hover:bg-surface-container"
          >
            <Minus size={18} />
          </button>

          <span className="font-semibold text-text-ink">
            {quantity}
          </span>

          <button
            onClick={increaseQuantity}
            className="flex h-full w-10 items-center justify-center text-text-soft hover:bg-surface-container"
          >
            <Plus size={18} />
          </button>
        </div>

        {/* Add To Cart */}

        <button className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-secondary-container font-semibold text-text-ink transition hover:brightness-105 active:scale-[0.98]">
          <ShoppingBag size={18} />

          Add to Cart
        </button>
      </div>

      {/* Wishlist */}

      <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-primary font-semibold text-primary transition hover:bg-primary/5">
        <Heart size={18} />

        Add to Wishlist
      </button>

      {/* Quality Badges */}

      <div className="grid grid-cols-4 gap-3 border-t border-surface-variant py-6">
        <QualityItem
          icon="🌿"
          text="100% Natural"
        />

        <QualityItem
          icon="🌾"
          text="Gluten Free"
        />

        <QualityItem
          icon="✓"
          text="Premium Sourced"
        />

        <QualityItem
          icon="♥"
          text="Heart Healthy"
        />
      </div>
    </div>
  );
}

function QualityItem({ icon, text }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-border-sage bg-surface-container text-xl text-primary">
        {icon}
      </div>

      <span className="text-xs font-bold leading-tight text-text-soft">
        {text}
      </span>
    </div>
  );
}

export default ProductInfo;