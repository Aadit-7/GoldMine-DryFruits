import {
  IndianRupee,
  LayoutGrid,
  MapPin,
  Weight,
  Apple,
} from "lucide-react";

function CategorySidebar() {
  const filters = [
    {
      name: "Price",
      icon: IndianRupee,
    },
    {
      name: "Category",
      icon: LayoutGrid,
    },
    {
      name: "Origin",
      icon: MapPin,
    },
    {
      name: "Weight",
      icon: Weight,
    },
    {
      name: "Nutritional Value",
      icon: Apple,
    },
  ];

  return (
    <aside className="hidden w-64 shrink-0 flex-col gap-4 rounded-lg bg-surface-container-low p-4 lg:flex">

      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-text-soft">
          Filters
        </h2>

        <p className="mt-1 text-sm text-text-soft">
          Refine your selection
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {filters.map((filter, index) => {
          const Icon = filter.icon;

          return (
            <button
              key={filter.name}
              className={`flex items-center gap-3 rounded-lg p-3 text-left text-sm transition ${
                index === 1
                  ? "bg-primary text-white"
                  : "text-text-soft hover:bg-surface-container-highest"
              }`}
            >
              <Icon size={18} />

              {filter.name}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default CategorySidebar;