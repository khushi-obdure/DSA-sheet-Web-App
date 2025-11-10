import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 20px",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Advance Your Career with{" "}
        <span style={{ color: "var(--secondary-color)" }}>DSA Subjects</span>
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        Master DSA with curated resources and expert guidance — Join the Top 1%
        achievers!
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
          justifyContent: "center",
        }}
      >

      </div>
    </section>
  );
};

export default Hero;
