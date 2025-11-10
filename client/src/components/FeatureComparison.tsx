import React from "react";
import Button from "./Button";

interface Feature {
  title: string;
  tuf: string;
  tufPlus: string;
}

const features: Feature[] = [
  {
    title: "Content Organization",
    tuf: "Content is scattered across multiple platforms, and the quality often varies, leading to distractions and a lack of consistency.",
    tufPlus:
      "Everything is consolidated under one platform, saving you time and helping you stay focused without switching platforms.",
  },
  {
    title: "DSA Videos",
    tuf: "DSA videos are on YouTube, but advanced topics like recursion, strings, and heaps are not included.",
    tufPlus:
      "The entire Basic DSA is freshly recorded based on user feedback. Advanced topics are available exclusively. Around 50% of YouTube videos are re-used, carefully edited, and broken into subparts to save time while ensuring clarity.",
  },
  {
    title: "Practice Problems and Blogs",
    tuf: "A2Z, SDE, and 79 Sheets for DSA are available but lack many basic problems, and practice problems and blogs might not align with the videos.",
    tufPlus:
      "A dedicated premium practice platform with a complete set of problems, including basic and premium ones. Features like a time complexity analyzer and in-depth code reviews for your code ensure you’re fully prepared for interviews.",
  },
  {
    title: "Topic Contests",
    tuf: "-",
    tufPlus:
      "Topic-specific contests are available to help you practice under real-time pressure and evaluate your understanding.",
  },
  {
    title: "OOPs Content",
    tuf: "-",
    tufPlus:
      "OOPs videos, quizzes, and practice problems are already available, providing comprehensive coverage to strengthen your fundamentals.",
  },
  {
    title: "Interview Prep (OS, DBMS, CN)",
    tuf: "-",
    tufPlus:
      "Quizzes, blogs, and a redefined syllabus for interviews are already available. Videos will be added soon.",
  },
];

const FeatureComparison: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: "#0d0d0d",
        padding: "80px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid #222",
        }}
      >
        {/* Header Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            backgroundColor: "#111",
            borderBottom: "1px solid #222",
          }}
        >
          <div style={{ padding: "16px", fontWeight: 600 }}>Features</div>
          <div
            style={{
              textAlign: "center",
              padding: "16px",
              borderLeft: "1px solid #222",
              borderRight: "1px solid #222",
            }}
          >
            <Button type="secondary">Get Started</Button>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "16px",
              backgroundColor: "#1a1a1a",
            }}
          >
            <Button type="primary">Explore Plus</Button>
          </div>
        </div>

        {/* Features Rows */}
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderTop: "1px solid #222",
              backgroundColor: index % 2 === 0 ? "#0d0d0d" : "#111",
            }}
          >
            <div
              style={{
                padding: "20px",
                borderRight: "1px solid #222",
                fontWeight: 600,
              }}
            >
              {feature.title}
            </div>
            <div
              style={{
                padding: "20px",
                borderRight: "1px solid #222",
                color: "#bbb",
              }}
            >
              {feature.tuf}
            </div>
            <div style={{ padding: "20px", color: "#bbb" }}>
              {feature.tufPlus}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureComparison;
