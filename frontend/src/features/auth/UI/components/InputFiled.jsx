import React from "react";

const InputField = ({ label, type = "text", name, value, onChange, placeholder, icon: Icon, error }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={name} className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-text-muted)" }}>
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <span className="absolute left-3 pointer-events-none" style={{ color: "var(--color-text-muted)" }}>
            <Icon size={15} />
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={type === "password" ? "current-password" : "email"}
          className="w-full rounded-lg text-sm outline-none transition-all duration-200"
          style={{
            background: "var(--color-surface-strong)",
            border: `1px solid ${error ? "#ef4444" : "var(--color-border)"}`,
            color: "var(--color-text)",
            padding: Icon ? "0.7rem 1rem 0.7rem 2.4rem" : "0.7rem 1rem",
          }}
          onFocus={(e) => {
            if (!error) {
              e.target.style.borderColor = "var(--color-primary)";
              e.target.style.boxShadow = "0 0 0 3px rgba(34,197,94,0.12)";
            }
          }}
          onBlur={(e) => {
            e.target.style.borderColor = error ? "#ef4444" : "var(--color-border)";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>
      {error && <p className="text-xs" style={{ color: "#ef4444" }}>{error}</p>}
    </div>
  );
};

export default InputField;