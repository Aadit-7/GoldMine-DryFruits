import { useState } from "react";
import { Tag } from "lucide-react";

function ProductGallery({ product }) {
  const images = product.images?.length > 0 ? product.images : [product.image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse">
      {/* Main Image */}
      <div className="relative aspect-[4/5] flex-1 overflow-hidden rounded-xl border border-surface-variant bg-surface-container-high">
        <img
          src={selectedImage}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />

        {product.discount && (
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow">
            <Tag size={14} />

            {product.discount}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 md:w-24 md:flex-col md:overflow-visible">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`h-24 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition md:h-32 md:w-24 ${
              selectedImage === image
                ? "border-primary"
                : "border-outline-variant opacity-70 hover:border-border-sage hover:opacity-100"
            }`}
          >
            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
