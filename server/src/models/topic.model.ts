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



// import mongoose, { Schema, Document, Types } from "mongoose";

// export interface ITopic extends Document {
//   chapter_id: Types.ObjectId;   // Reference to Chapter
//   name: string;
//   description?: string;
//   order?: number;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

// const topicSchema = new Schema<ITopic>(
//   {
//     chapter_id: { type: Schema.Types.ObjectId, ref: "Chapter", required: true },
//     name: { type: String, required: true },
//     description: { type: String },
//     order: { type: Number, default: 0 },
//   },
//   { timestamps: true }
// );

// export const Topic = mongoose.model<ITopic>("Topic", topicSchema);