function AuthInput({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-xs font-bold uppercase tracking-wide text-on-surface-variant"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-11 w-full rounded-lg border-none bg-surface-container px-4 text-text-ink shadow-inner outline-none transition focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

export default AuthInput;
