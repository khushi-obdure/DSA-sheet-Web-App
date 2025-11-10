import React, { useState } from "react";
import Button from "../Button";
import { IoMdClose } from "react-icons/io";

interface LoginModalProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
  onLoginSuccess: (user: any) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  onSwitchToRegister,
  onLoginSuccess,
}) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailOrUsername: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data?.data?.token);
      localStorage.setItem("user", JSON.stringify(data?.data?.user));

      alert("Login successful!");
      onLoginSuccess(data?.data?.user);
      onClose();
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IoMdClose
            size={22}
            color="#fff"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff", margin: "10px 0" }}>Welcome to DSA Course</h2>
          <p style={{ color: "#aaa", marginBottom: "20px" }}>
            Login to continue your journey
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div style={{ textAlign: "right" }}>
            <a href="#" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>
              Forgot Password?
            </a>
          </div>

          <Button type="primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>

          {error && (
            <p style={{ color: "red", textAlign: "center", fontSize: "0.9rem" }}>
              {error}
            </p>
          )}
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#bbb" }}>
          Don't have an account?{" "}
          <span
            onClick={onSwitchToRegister}
            style={{ color: "var(--accent)", cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

// Styles
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  backgroundColor: "#0d0d0d",
  border: "1px solid #222",
  borderRadius: "10px",
  padding: "30px",
  width: "380px",
  color: "#fff",
};

export default LoginModal;
