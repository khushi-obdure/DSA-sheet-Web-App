import React, { useState } from "react";
import ProblemTable from "./ProblemTable";

interface Lecture {
  title: string;
  problems: {
    name?: string;
    leetcodeLink?: string;
    youtubeLink?: string;
    articleLink?: string;
    level: "Easy" | "Medium" | "Hard";
    status: "Unsolved" | "In Progress" | "Solved";
  }[];
}

interface Step {
  title: string;
  lectures: Lecture[];
}

interface DsaAccordionProps {
  steps: Step[];
}

const DsaAccordion: React.FC<DsaAccordionProps> = ({ steps }) => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <div style={{ margin: "20px 50px" }}>
      {steps.map((step, index) => (
        <div key={index} style={{ borderBottom: "1px solid #222" }}>
          <div
            style={{
              padding: "18px",
              background: "#111",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={() => setOpenStep(openStep === index ? null : index)}
          >
            <span>{step.title}</span>
            <span>{openStep === index ? "▲" : "▼"}</span>
          </div>

          {openStep === index && (
            <div style={{ background: "#0d0d0d" }}>
              {step.lectures.map((lec, i) => (
                <div key={i} style={{ paddingLeft: "20px" }}>
                  <div
                    style={{
                      padding: "12px 0",
                      borderBottom: "1px solid #1a1a1a",
                      color: "#aaa",
                      fontWeight: 500,
                    }}
                  >
                    {lec.title}
                  </div>
                  <ProblemTable
                    problems={lec.problems.map((p, idx) => ({
                      id: idx, // unique id for table
                      title: p.name || "Untitled Problem",
                      difficulty: p.level,
                      status: p.status,
                      leetcodeLink: p.leetcodeLink,
                      youtubeLink: p.youtubeLink,
                      articleLink: p.articleLink,
                    }))}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DsaAccordion;
