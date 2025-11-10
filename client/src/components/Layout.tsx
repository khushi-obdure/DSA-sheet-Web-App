import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginModal from "./AuthModal/LoginModal";
import RegisterModal from "./AuthModal/RegisterModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Load user from localStorage when the app starts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Function to handle login success
  const handleLoginSuccess = (loggedInUser: any) => {
    setUser(loggedInUser);
    setShowLogin(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div style={{ backgroundColor: "#0d0d0d", color: "#fff" }}>
      <Header
        onLoginClick={() => setShowLogin(true)}
        user={user}
        onLogout={handleLogout}
      />
      <main style={{ paddingTop: "90px" }}>{children}</main>
      <Footer />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </div>
  );
};

export default Layout;
