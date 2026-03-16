import React from "react";
import { Loader2 } from "lucide-react";

const Button = ({ children, onClick, type = "button", variant = "primary", fullWidth = false, icon: Icon, loading = false, disabled = false }) => {
  const isDisabled = disabled || loading;

  const styles = {
    primary: {
      background: isDisabled ? "rgba(255,255,255,0.4)" : "var(--color-primary)",
      color: "#000000",
      border: "none",
    },
    outline: {
      background: "transparent",
      color: "var(--color-text)",
      border: "1px solid var(--color-border)",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      style={{
        ...styles[variant],
        width: fullWidth ? "100%" : "auto",
        cursor: isDisabled ? "not-allowed" : "pointer",
        padding: "0.72rem 1.4rem",
        borderRadius: "0.6rem",
        fontSize: "0.875rem",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        transition: "all 0.18s ease",
        letterSpacing: "0.01em",
      }}
      onMouseEnter={(e) => {
        if (isDisabled) return;
        if (variant === "primary") {
          e.currentTarget.style.background = "#e5e5e5";
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(255,255,255,0.15)";
        } else {
          e.currentTarget.style.background = "var(--color-surface)";
          e.currentTarget.style.borderColor = "var(--color-text-muted)";
        }
      }}
      onMouseLeave={(e) => {
        if (isDisabled) return;
        if (variant === "primary") {
          e.currentTarget.style.background = "var(--color-primary)";
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "none";
        } else {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "var(--color-border)";
        }
      }}
    >
      {loading ? <Loader2 size={16} className="animate-spin" /> : Icon && <Icon size={17} />}
      {children}
    </button>
  );
};

export default Button;