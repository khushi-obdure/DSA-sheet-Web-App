import express from "express";
import { TopicController } from "../controllers/topic.controller";

const router = express.Router();
const controller = new TopicController();

router.get("/", controller.get.bind(controller));

export default router;
