import React, { useEffect, useState } from "react";
import DsaHeader from "./DsaHeader";
import DsaAccordion from "./DsaAccordion";

interface Problem {
  name: string;
  leetcodeLink: string;
  youtubeLink: string;
  articleLink: string;
  level: string;
  status: string;
  _id: string;
}

interface Subtopic {
  name: string;
  problems: Problem[];
  _id: string;
}

interface Topic {
  _id: string;
  name: string;
  subtopics: Subtopic[];
}
const DsaDashboard: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(`${API_URL}/api/topic`);
        const data = await res.json();
        if (data.statusCode === 200) {
          setTopics(data.data);
        }
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div>
      <DsaHeader />
      <DsaAccordion
        steps={topics.map((topic) => ({
          title: topic.name,
          lectures: topic.subtopics.map((sub) => ({
            title: sub.name,
            problems: sub.problems.map((p) => ({
              name: p.name,
              leetcodeLink: p.leetcodeLink,
              youtubeLink: p.youtubeLink,
              articleLink: p.articleLink,
              level: p.level as "Easy" | "Medium" | "Hard",
              status: p.status as "Unsolved" | "In Progress" | "Solved",
            })),
          })),
        }))}
      />
    </div>

  );
};

export default DsaDashboard;
