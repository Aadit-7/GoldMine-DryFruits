import {
  ChevronDown,
  Star,
  Verified,
} from "lucide-react";

function ProductDetailsAccordion({ product }) {
  return (
    <div className="border-t border-surface-variant">
      {/* Product Details */}

      <details
        className="group border-b border-surface-variant"
        open
      >
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-semibold text-text-ink">
          Product Details

          <ChevronDown className="text-outline transition group-open:rotate-180" />
        </summary>

        <div className="pb-5 text-sm leading-relaxed text-text-soft">
          <p>
            {product.description ||
              "Experience our premium quality products, carefully selected and packed to preserve their natural taste and goodness."}
          </p>

          {product.features && (
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {product.features.map(
                (feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </details>

      {/* Nutrition */}

      <details className="group border-b border-surface-variant">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-semibold text-text-ink">
          Nutrition & Ingredients

          <ChevronDown className="text-outline transition group-open:rotate-180" />
        </summary>

        <div className="pb-5 text-sm text-text-soft">
          <p className="mb-3 font-semibold text-text-ink">
            Ingredients:
            {" "}
            {product.ingredients ||
              "Premium natural ingredients"}
          </p>

          {product.nutrition && (
            <div className="rounded-lg border border-outline-variant bg-surface-container-low p-4">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-text-ink">
                Nutritional Value
              </h4>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {Object.entries(
                  product.nutrition
                ).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between border-b border-surface-variant pb-2"
                  >
                    <span>{key}</span>

                    <span className="font-semibold text-text-ink">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </details>

      {/* Reviews */}

      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-semibold text-text-ink">
          Customer Reviews (
          {product.reviews || 0})

          <ChevronDown className="text-outline transition group-open:rotate-180" />
        </summary>

        <div className="pb-5">
          <div className="rounded-lg border border-surface-variant bg-white p-4">
            <div className="flex items-start justify-between">
              <div>
                <h5 className="font-semibold text-text-ink">
                  Excellent Quality!
                </h5>

                <div className="mt-1 flex">
                  {Array.from(
                    { length: 5 },
                    (_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                        className="text-secondary-container"
                      />
                    )
                  )}
                </div>
              </div>

              <span className="text-xs text-outline">
                Recent
              </span>
            </div>

            <p className="mt-3 text-sm text-text-soft">
              Fresh, crunchy and excellent
              quality. Highly recommended!
            </p>

            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">
              <Verified size={14} />

              Verified Buyer
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}

export default ProductDetailsAccordion;