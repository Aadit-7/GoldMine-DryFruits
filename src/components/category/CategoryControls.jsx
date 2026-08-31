function CategoryControls({
  productCount,
  sortValue,
  setSortValue,
}) {
  return (
    <div className="mb-6 flex items-center justify-between border-b border-surface-variant pb-4">

      <span className="text-sm text-text-soft">
        Showing {productCount} premium products
      </span>

      <div className="flex items-center gap-2">
        <label
          htmlFor="sort"
          className="text-sm text-text-soft"
        >
          Sort by:
        </label>

        <select
          id="sort"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          className="rounded-md border border-outline-variant bg-surface px-3 py-2 text-sm outline-none"
        >
          <option value="bestselling">
            Bestselling
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>

          <option value="newest">
            Newest Arrivals
          </option>
        </select>
      </div>
    </div>
  );
}

export default CategoryControls;