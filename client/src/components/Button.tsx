import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "outline" | "danger";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  onClick,
  disabled = false,
  loading = false,
  fullWidth = true,
}) => {
  const baseStyle: React.CSSProperties = {
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "inherit",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "8px",
    transition: "all 0.25s ease-in-out",
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? "100%" : "auto",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--accent-color)",
      color: "#fff",
    },
    secondary: {
      backgroundColor: "transparent",
      border: "1px solid var(--accent-color)",
      color: "#fff",
    },
    outline: {
      backgroundColor: "transparent",
      border: "1px solid var(--text-muted)",
      color: "var(--text-muted)",
    },
    danger: {
      backgroundColor: "#ef4444",
      color: "#fff",
    },
  };

  const mergedStyle = { ...baseStyle, ...variants[type] };

  return (
    <button
      style={mergedStyle}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled}
    >
      {loading && (
        <span
          style={{
            width: "16px",
            height: "16px",
            border: "2px solid #fff",
            borderTop: "2px solid transparent",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
