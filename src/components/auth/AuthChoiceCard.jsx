import { Link } from "react-router";

function AuthChoiceCard({ title, description, icon: Icon, to }) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center rounded-xl border border-border-sage bg-surface-sage p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white transition group-hover:scale-110">
        <Icon size={30} />
      </div>

      <h2 className="text-xl font-bold text-text-ink">{title}</h2>

      <p className="mt-2 text-sm text-text-soft">{description}</p>

      <span className="mt-6 font-semibold text-primary">Continue →</span>
    </Link>
  );
}

export default AuthChoiceCard;
