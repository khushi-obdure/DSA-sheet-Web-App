import React from "react";

const DsaHeader: React.FC = () => {
  return (
    <section
      style={{
        padding: "30px 50px",
        background: "#111",
        borderBottom: "1px solid #222",
      }}
    >
      <h1 style={{ color: "#fff", marginBottom: "10px" }}>
        Khushi's A2Z DSA Course
      </h1>
      <p style={{ color: "#bbb", maxWidth: "800px", lineHeight: 1.6 }}>
        This course is made for people who want to learn DSA from A to Z for
        free in a structured manner.
      </p>
      <p style={{ color: "#f97316", fontWeight: 600, marginTop: "15px" }}>
        Happy Learning!
      </p>
    </section>
  );
};

export default DsaHeader;
