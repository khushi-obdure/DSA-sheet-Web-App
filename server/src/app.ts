
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import progressRoutes from "./routes/progress.routes";
import topicRoutes from "./routes/topic.routes"

dotenv.config();
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/topic", topicRoutes)
app.use("/api/progress", progressRoutes);

const PORT = process.env.PORT || 4000;
connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
