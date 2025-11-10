import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  fullName?: string;
  graduationYear?: string;
  progress: {
    problem_id: Types.ObjectId;
    is_completed: boolean;
    completed_at?: Date;
  }[];
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    fullName: { type: String },
    graduationYear: { type: String },
    progress: [
      {
        problem_id: { type: Schema.Types.ObjectId, ref: "Problem", required: true },
        is_completed: { type: Boolean, default: false },
        completed_at: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
