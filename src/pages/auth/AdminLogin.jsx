import { useState } from "react";
import { Eye, EyeOff, LogIn, ShieldCheck } from "lucide-react";

function AdminLogin() {
  const [formData, setFormData] = useState({
    department: "",
    adminId: "",
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
    <main className="flex h-screen flex-col overflow-hidden bg-surface-dim text-text-ink">
      {/* Header */}
      <header className="flex shrink-0 justify-center bg-surface px-4 py-2 shadow-sm">
        <h1 className="text-2xl font-semibold text-primary">
          GoldMine
          <span className="ml-2 text-sm font-normal text-on-surface-variant">
            Admin Portal
          </span>
        </h1>
      </header>

      {/* Main */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-4">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute bottom-[10%] right-[10%] h-64 w-64 rounded-full bg-surface-sage blur-3xl" />
        </div>

        {/* Card */}
        <section className="relative z-10 w-full max-w-md overflow-hidden rounded-xl border border-border-sage bg-surface shadow-xl">
          <div className="h-1.5 w-full bg-primary" />

          <div className="p-5 sm:p-6">
            {/* Header */}
            <div className="mb-5 text-center">
              <ShieldCheck size={38} className="mx-auto mb-2 text-primary" />

              <h2 className="text-2xl font-semibold text-primary">
                Secure Login
              </h2>

              <p className="mt-1 text-sm text-text-soft">
                Enter your credentials to access the administrative dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Department */}
              <div>
                <label
                  htmlFor="department"
                  className="mb-1 block text-xs font-bold uppercase tracking-wide text-on-surface-variant"
                >
                  Department
                </label>

                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="h-10 w-full cursor-pointer rounded-t-lg border-0 border-b-2 border-border-sage bg-surface-container-high px-4 text-sm text-text-ink outline-none transition focus:border-primary"
                >
                  <option value="">Select Department</option>

                  <option value="inventory">Inventory & Supply Chain</option>

                  <option value="sales">Sales & Analytics</option>

                  <option value="marketing">Marketing Campaigns</option>

                  <option value="system">System Administration</option>
                </select>
              </div>

              {/* Admin ID */}
              <div>
                <label
                  htmlFor="adminId"
                  className="mb-1 block text-xs font-bold uppercase tracking-wide text-on-surface-variant"
                >
                  Admin ID or Email
                </label>

                <input
                  id="adminId"
                  name="adminId"
                  value={formData.adminId}
                  onChange={handleChange}
                  placeholder="e.g. ADM-7890"
                  required
                  className="h-10 w-full rounded-t-lg border-0 border-b-2 border-border-sage bg-surface-container-high px-4 text-sm text-text-ink outline-none transition placeholder:text-outline-variant focus:border-primary"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-xs font-bold uppercase tracking-wide text-on-surface-variant"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="h-10 w-full rounded-t-lg border-0 border-b-2 border-border-sage bg-surface-container-high px-4 pr-12 text-sm text-text-ink outline-none transition placeholder:text-outline-variant focus:border-primary"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-soft hover:text-primary"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <label className="flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-border-sage text-primary focus:ring-primary"
                />

                <span className="ml-2 text-sm text-text-soft">
                  Remember my credentials
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-secondary-container text-base font-semibold text-text-ink shadow-sm transition hover:bg-secondary-fixed-dim active:scale-[0.98]"
              >
                <LogIn size={18} />
                Sign In
              </button>
            </form>

            {/* System Status */}
            <div className="mt-5 flex items-center justify-center gap-2 border-t border-border-sage pt-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-wide text-text-soft">
                All Systems Operational
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="shrink-0 bg-primary px-4 py-3 text-center text-white">
        <h3 className="text-lg font-semibold text-secondary-fixed">GoldMine</h3>

        <p className="mt-1 text-xs text-white/80">
          © 2026 GoldMine. Internal Administration Portal.
        </p>
      </footer>
    </main>
  );
}

export default AdminLogin;
