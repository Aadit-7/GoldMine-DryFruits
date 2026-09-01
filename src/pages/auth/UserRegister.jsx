import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Award, Leaf } from "lucide-react";

import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";

function UserRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    marketing: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <main className="flex h-screen items-center justify-center overflow-hidden bg-surface px-4 py-3">
      <section className="w-full max-w-[480px]">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-semibold text-primary">GoldMine</h1>

          <h2 className="mt-1 text-2xl font-semibold text-text-ink">
            Join the Art of Snacking
          </h2>

          <p className="mt-1 text-sm text-text-soft">
            Premium ingredients. Exceptional taste.
          </p>
        </div>

        {/* Registration Card */}
        <div className="rounded-xl border border-border-sage bg-surface-sage p-5 md:p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <AuthInput
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <AuthInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <AuthInput
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              value={formData.phone}
              onChange={handleChange}
            />

            <PasswordInput
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />

            {/* Marketing Checkbox */}
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                name="marketing"
                checked={formData.marketing}
                onChange={handleChange}
                className="h-4 w-4 shrink-0 rounded border-border-sage"
              />

              <span className="text-xs text-text-soft">
                Keep me updated on new harvests and exclusive offers.
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-1 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-secondary-container text-sm font-semibold text-text-ink transition hover:bg-secondary hover:text-white"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <Link
              to="/auth/user/login"
              className="text-sm text-primary hover:underline"
            >
              Already have an account? Sign in instead
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-4 flex justify-center gap-5">
          <TrustBadge icon={Leaf} text="100% Natural" />

          <TrustBadge icon={Award} text="Grade A+" />
        </div>
      </section>
    </main>
  );
}

function TrustBadge({ icon: Icon, text }) {
  return (
    <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full border border-dashed border-border-sage bg-white text-primary">
      <Icon size={16} />

      <span className="mt-0.5 text-center text-[7px] font-bold uppercase leading-tight">
        {text}
      </span>
    </div>
  );
}

export default UserRegister;
