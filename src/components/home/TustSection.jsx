import { Leaf, BadgeCheck, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    title: "100% Natural",
    icon: Leaf,
  },
  {
    title: "Grade A+ Quality",
    icon: BadgeCheck,
  },
  {
    title: "FSSAI Licensed",
    icon: ShieldCheck,
  },
];

function TrustSection() {
  return (
    <section
      className="
        mt-12
        border-y
        border-border-sage
        bg-surface-container-low
        py-12
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1200px]
          flex-col
          items-center
          justify-center
          gap-12
          px-4
          md:flex-row
          md:gap-24
        "
      >
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex flex-col items-center gap-4">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-dashed
                  border-border-sage
                  bg-surface
                "
              >
                <Icon size={30} className="text-primary" />
              </div>

              <span className="font-semibold text-primary">{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrustSection;
