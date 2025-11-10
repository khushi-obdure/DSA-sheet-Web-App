import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface HeaderProps {
  onLoginClick: () => void;
  user?: { username: string } | null;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, user, onLogout }) => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        backgroundColor: "#111",
        boxShadow: "0 1px 8px rgba(0,0,0,0.4)",
      }}
    >
      <Link to="/" style={{ color: "#fff", fontWeight: 500 }}>
        <h2 style={{ color: "#fff", fontWeight: 700 }}>DSA</h2>
      </Link>

      <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "#fff", fontWeight: 500 }}>
          Resources
        </Link>
        <Link to="/progress" style={{ color: "#fff", fontWeight: 500 }}>
          Progress
        </Link>
        <Link to="/dsa-sheet" style={{ color: "#fff", fontWeight: 500 }}>
          DSA Sheet
        </Link>

        {user ? (
          <>
            <span style={{ color: "#f97316", fontWeight: 600 }}>
              Hi, {user.username || "User"}
            </span>
            <Button type="danger" onClick={onLogout} fullWidth={false}>
              Logout
            </Button>
          </>
        ) : (
          <Button type="secondary" onClick={onLoginClick} fullWidth={false}>
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
