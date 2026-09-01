import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function PasswordInput({
  label = "Password",
  name = "password",
  placeholder = "Enter your password",
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-xs font-bold uppercase tracking-wide text-on-surface-variant"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="h-11 w-full rounded-lg border-none bg-surface-container px-4 pr-12 text-text-ink shadow-inner outline-none transition focus:ring-2 focus:ring-primary"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-soft hover:text-primary"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
