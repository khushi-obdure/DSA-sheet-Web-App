import React from "react";

interface ProgressSummaryProps {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

const ProgressSummary: React.FC<ProgressSummaryProps> = ({
  total,
  easy,
  medium,
  hard,
}) => {
  const ProgressBar = ({ value }: { value: number }) => (
    <div
      style={{
        width: "100%",
        height: "8px",
        background: "#222",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: "#00c853",
          transition: "width 0.4s ease",
        }}
      />
    </div>
  );

  const Stat = ({
    label,
    completed,
    total,
  }: {
    label: string;
    completed: number;
    total: number;
  }) => (
    <div
      style={{
        background: "#111",
        border: "1px solid #222",
        borderRadius: "8px",
        padding: "15px 20px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <h3 style={{ color: "#fff", marginBottom: "8px", fontWeight: 500 }}>
        {label}
      </h3>
      <p style={{ color: "#aaa", marginBottom: "8px" }}>
        {completed} / {total} completed
      </p>
      <ProgressBar value={(completed / total) * 100 || 0} />
    </div>
  );

  return (
    <div
      style={{
        background: "#0d0d0d",
        borderBottom: "1px solid #222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "40px 0",
      }}
    >
      <Stat label="Total" completed={50} total={total} />
      <Stat label="Easy" completed={20} total={easy} />
      <Stat label="Medium" completed={10} total={medium} />
      <Stat label="Hard" completed={5} total={hard} />
    </div>
  );
};

export default ProgressSummary;
