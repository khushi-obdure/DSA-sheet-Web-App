import React from "react";
import ProgressSummary from "../components/DsaDashboard/ProgressSummary";

const Progress: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <ProgressSummary total={100} easy={40} medium={35} hard={25} />
    </div>
  );
};

export default Progress;
