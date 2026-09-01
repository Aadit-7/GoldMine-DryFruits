import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, Lock, Mail, Award } from "lucide-react";

function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

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
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-surface px-4 py-4">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-surface-sage/30 blur-3xl" />

        <div className="absolute -right-20 top-40 h-64 w-64 rounded-full bg-secondary-fixed/20 blur-3xl" />
      </div>

      <section className="relative z-10 w-full max-w-md">
        <div className="relative rounded-xl border border-border-sage bg-[#F3EBDA] p-6 sm:p-7">
          {/* Quality badge */}
          <div className="absolute -right-3 -top-3 flex h-14 w-14 rotate-12 items-center justify-center rounded-full border-2 border-dashed border-border-sage bg-surface">
            <Award size={24} className="text-secondary" />
          </div>

          {/* Branding */}
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-semibold text-primary">GoldMine</h2>
          </div>

          {/* Header */}
          <div className="mb-5 text-center">
            <h1 className="text-3xl font-semibold text-primary">
              Welcome Back
            </h1>

            <p className="mt-1 text-sm text-text-soft">
              Sign in to continue your journey of healthy snacking.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-bold uppercase tracking-wider text-text-ink"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-soft"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-border-sage bg-surface py-2.5 pl-10 pr-4 text-text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-bold uppercase tracking-wider text-text-ink"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-soft"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-lg border border-border-sage bg-surface py-2.5 pl-10 pr-12 text-text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-soft hover:text-text-ink"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex cursor-pointer items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 cursor-pointer rounded border-border-sage text-primary focus:ring-primary"
              />

              <span className="ml-2 text-sm text-text-soft">
                Keep me signed in
              </span>
            </label>

            {/* Sign In */}
            <button
              type="submit"
              className="flex h-10 w-full items-center justify-center rounded-lg bg-primary-container px-4 text-base font-semibold text-white transition hover:bg-primary"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4">
            <div className="border-t border-border-sage" />

            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#F3EBDA] px-3 text-xs text-text-soft">
              Or
            </span>
          </div>

          {/* Register */}
          <Link
            to="/auth/user/register"
            className="flex h-10 w-full items-center justify-center rounded-lg border border-primary px-4 text-base font-semibold text-primary transition hover:bg-surface-sage/50"
          >
            Create an account
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <div className="flex flex-wrap justify-center gap-2 text-xs text-text-soft">
            <span>Brand Story</span>
            <span>•</span>
            <span>Contact Us</span>
            <span>•</span>
            <span>Privacy Policy</span>
          </div>

          <p className="mt-2 text-[10px] uppercase tracking-wide text-text-soft/60">
            © 2026 GoldMine. Premium Dry Fruits.
          </p>
        </div>
      </section>
    </main>
  );
}

export default UserLogin;
