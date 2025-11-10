import React, { useState } from "react";
import { FaYoutube, FaFileAlt, FaRegStar, FaStar } from "react-icons/fa";

interface Problem {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  leetcodeLink?: string;
  youtubeLink?: string;
  articleLink?: string;
  status: "Unsolved" | "In Progress" | "Solved";
}

interface ProblemTableProps {
  problems: Problem[];
}

const ProblemTable: React.FC<ProblemTableProps> = ({ problems }) => {
  const [starred, setStarred] = useState<number[]>([]);
  const [checked, setChecked] = useState<number[]>([]);

  const toggleStar = (id: number) => {
    setStarred((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleCheck = (id: number) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "#14532d";
      case "Medium":
        return "#78350f";
      case "Hard":
        return "#7f1d1d";
      default:
        return "#444";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Done":
        return "#16a34a";
      case "Pending":
        return "#facc15";
      default:
        return "#aaa";
    }
  };

  return (
    <div style={{ overflowX: "auto", backgroundColor: "#0d0d0d" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          color: "#fff",
          minWidth: "900px",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#111",
              color: "#bbb",
              textAlign: "left",
            }}
          >
            <th style={cellStyle}>#</th>
            <th style={cellStyle}>Problem</th>
            <th style={cellStyle}>LeetCode</th>
            <th style={cellStyle}>YouTube</th>
            <th style={cellStyle}>Article</th>
            <th style={cellStyle}>Difficulty</th>
            <th style={cellStyle}>Status</th>
            <th style={cellStyle}>Fav</th>
          </tr>
        </thead>

        <tbody>
          {problems.map((p) => {
            const isChecked = checked.includes(p.id);
            const status = isChecked ? "Done" : "Pending";

            return (
              <tr
                key={p.id}
                style={{
                  borderBottom: "1px solid #1a1a1a",
                  backgroundColor: isChecked ? "#1a1a1a" : "transparent",
                }}
              >
                {/* Checkbox */}
                <td style={cellStyle}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheck(p.id)}
                  />
                </td>

                {/* Problem Title */}
                <td style={cellStyle}>
                  <span style={{ fontWeight: 500 }}>{p.title}</span>
                </td>

                {/* LeetCode Link */}
                <td style={cellStyle}>
                  {p.leetcodeLink ? (
                    <a
                      href={p.leetcodeLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#60a5fa" }}
                    >
                      Visit
                    </a>
                  ) : (
                    "-"
                  )}
                </td>

                {/* YouTube Icon */}
                <td style={cellStyle}>
                  {p.youtubeLink ? (
                    <a href={p.youtubeLink} target="_blank" rel="noreferrer">
                      <FaYoutube color="#f97316" size={18} />
                    </a>
                  ) : (
                    "-"
                  )}
                </td>

                {/* Article Icon */}
                <td style={cellStyle}>
                  {p.articleLink ? (
                    <a href={p.articleLink} target="_blank" rel="noreferrer">
                      <FaFileAlt color="#bbb" size={16} />
                    </a>
                  ) : (
                    "-"
                  )}
                </td>

                {/* Difficulty */}
                <td style={cellStyle}>
                  <span
                    style={{
                      backgroundColor: getDifficultyColor(p.difficulty),
                      color: "#fff",
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {p.difficulty}
                  </span>
                </td>

                {/* Dynamic Status */}
                <td style={cellStyle}>
                  <span
                    style={{
                      color: getStatusColor(status),
                      fontWeight: 500,
                    }}
                  >
                    {status}
                  </span>
                </td>

                {/* Favourite Star */}
                <td
                  style={{ ...cellStyle, cursor: "pointer" }}
                  onClick={() => toggleStar(p.id)}
                >
                  {starred.includes(p.id) ? (
                    <FaStar color="#facc15" />
                  ) : (
                    <FaRegStar color="#bbb" />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Common Styles
const cellStyle: React.CSSProperties = {
  padding: "12px 16px",
  borderBottom: "1px solid #1a1a1a",
};

export default ProblemTable;
