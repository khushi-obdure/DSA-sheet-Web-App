import React from "react";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        padding: "60px 50px 20px",
        color: "#ccc",
        borderTop: "1px solid #222",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Column */}
        <div>
          <h2 style={{ color: "#fff", marginBottom: "10px" }}>DSA</h2>
          <p style={{ color: "#bbb", fontSize: "0.9rem", lineHeight: 1.6 }}>
            The best place to learn Data Structures, Algorithms, and most asked
            coding interview questions. Real interview experiences free of cost.
          </p>

          <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
            <a href="#" style={iconStyle}>
              <FaLinkedinIn />
            </a>
            <a href="#" style={iconStyle}>
              <FaXTwitter />
            </a>
            <a href="#" style={iconStyle}>
              <FaInstagram />
            </a>
            <a href="#" style={iconStyle}>
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 style={headingStyle}>Company</h4>
          <ul style={listStyle}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>

        {/* Quick Access */}
        <div>
          <h4 style={headingStyle}>Quick Access</h4>
          <ul style={listStyle}>
            <li>
              <a href="#">DSA Sheet</a>
            </li>
            <li>
              <a href="#">Technical Blogs</a>
            </li>
            <li>
              <a href="#">CS Subjects</a>
            </li>
            <li>
              <a href="#">CP Sheet</a>
            </li>
          </ul>
        </div>

        {/* DSA Sheets */}
        <div>
          <h4 style={headingStyle}>DSA Sheets</h4>
          <ul style={listStyle}>
            <li>
              <a href="#">SDE Sheet</a>
            </li>
            <li>
              <a href="#">A2Z DSA Playlist</a>
            </li>
            <li>
              <a href="#">SDE Core Sheet</a>
            </li>
            <li>
              <a href="#">CP Sheet</a>
            </li>
          </ul>
        </div>

        {/* DSA Playlist */}
        <div>
          <h4 style={headingStyle}>DSA Playlist</h4>
          <ul style={listStyle}>
            <li>
              <a href="#">Array Series</a>
            </li>
            <li>
              <a href="#">Graph Series</a>
            </li>
            <li>
              <a href="#">DP Series</a>
            </li>
            <li>
              <a href="#">LinkedList Series</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        style={{
          borderTop: "1px solid #222",
          textAlign: "center",
          marginTop: "50px",
          paddingTop: "20px",
          fontSize: "0.85rem",
          color: "#777",
        }}
      >
        Copyright © {new Date().getFullYear()} takeUforward | All rights
        reserved.
      </div>
    </footer>
  );
};

//  Reusable Styles
const headingStyle: React.CSSProperties = {
  color: "#f97316",
  fontWeight: 600,
  marginBottom: "10px",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontSize: "0.9rem",
};

const iconStyle: React.CSSProperties = {
  color: "#ccc",
  background: "#1a1a1a",
  padding: "8px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  transition: "0.2s ease",
};

export default Footer;
