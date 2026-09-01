import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

function AdminRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    role: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <main className="flex h-screen items-center justify-center overflow-hidden bg-background px-4 py-4">
      <section className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-5 text-center">
          <div className="mb-3 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <ShieldCheck size={24} />
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-primary">GoldMine</h1>

          <h2 className="mt-2 text-2xl font-semibold text-text-ink">
            Onboard New Administrator
          </h2>

          <p className="mt-1 text-sm text-text-soft">
            Create secure credentials for a new administration team member.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border border-border-sage bg-surface p-5 shadow-sm md:p-6">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-1 block text-xs font-bold uppercase tracking-wide text-on-surface-variant"
              >
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
                className="h-10 w-full rounded-lg border border-border-sage bg-surface-container px-4 text-sm text-text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="workEmail"
                className="mb-1 block text-xs font-bold uppercase tracking-wide text-on-surface-variant"
              >
                Work Email
              </label>

              <input
                id="workEmail"
                name="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="jane.doe@goldmine.com"
                required
                className="h-10 w-full rounded-lg border border-border-sage bg-surface-container px-4 text-sm text-text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="mb-1 block text-xs font-bold uppercase tracking-wide text-on-surface-variant"
              >
                System Role
              </label>

              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="h-10 w-full rounded-lg border border-border-sage bg-surface-container px-4 text-sm text-text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="">Select a role...</option>

                <option value="manager">Manager</option>

                <option value="editor">Editor</option>

                <option value="support">Support</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-xs font-bold uppercase tracking-wide text-on-surface-variant"
              >
                Temporary Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="h-10 w-full rounded-lg border border-border-sage bg-surface-container px-4 pr-12 text-sm text-text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-soft hover:text-primary"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <p className="mt-1 text-xs text-text-soft">
                Must be at least 8 characters long.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-col gap-3 pt-1 md:flex-row md:justify-end">
              <Link
                to="/auth/admin/login"
                className="flex h-10 items-center justify-center rounded-lg border border-primary px-6 text-sm font-semibold text-primary transition hover:bg-surface-sage"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="h-10 rounded-lg bg-primary px-6 text-sm font-semibold text-white transition hover:bg-nav-dark"
              >
                Register Administrator
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default AdminRegister;
