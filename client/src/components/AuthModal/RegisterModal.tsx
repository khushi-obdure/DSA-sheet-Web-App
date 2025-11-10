import React, { useState } from "react";
import Button from "../Button";
import { IoMdClose } from "react-icons/io";

interface RegisterModalProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  onClose,
  onSwitchToLogin,
}) => {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    graduationYear: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
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
          <h2 style={{ color: "#fff", margin: "10px 0" }}>Welcome to TUF</h2>
          <p style={{ color: "#aaa", marginBottom: "20px" }}>
            Sign up to start your journey
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <select
            name="graduationYear"
            value={form.graduationYear}
            onChange={handleChange}
            required
          >
            <option value="">Choose Graduation Year</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="primary">Verify and Sign Up</Button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#bbb" }}>
          Already have an account?{" "}
          <span
            onClick={onSwitchToLogin}
            style={{ color: "var(--accent)", cursor: "pointer" }}
          >
            Sign In
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

export default RegisterModal;
