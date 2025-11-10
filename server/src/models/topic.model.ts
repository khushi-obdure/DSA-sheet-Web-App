import mongoose, { Schema, Document } from "mongoose";

interface Problem {
    name?: string;
    leetcodeLink?: string;
    youtubeLink?: string;
    articleLink?: string;
    level: "Easy" | "Medium" | "Hard";
    status: "Unsolved" | "In Progress" | "Solved";
}

interface Subtopic {
    name?: string;
    problems: Problem[];
}

export interface TopicDocument extends Document {
    name: string;
    subtopics: Subtopic[];
}

const ProblemSchema = new Schema<Problem>({
    name: { type: String, required: true },
    leetcodeLink: String,
    youtubeLink: String,
    articleLink: String,
    level: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
    status: {
        type: String,
        enum: ["Unsolved", "In Progress", "Solved"],
        default: "Unsolved",
    },
});

const SubtopicSchema = new Schema<Subtopic>({
    name: { type: String},
    problems: [ProblemSchema],
});

const TopicSchema = new Schema<TopicDocument>({
    name: { type: String, required: true },
    subtopics: [SubtopicSchema],
});

export const Topic = mongoose.model<TopicDocument>("Topic", TopicSchema);
