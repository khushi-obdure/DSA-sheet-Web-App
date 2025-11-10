import express from "express";
import { ProgressController } from "../controllers/progress.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();
const controller = new ProgressController();

router.get("/me", authMiddleware, controller.getProfile.bind(controller));
router.post(
  "/complete",
  authMiddleware,
  controller.completeProblem.bind(controller)
);
router.post(
  "/uncomplete",
  authMiddleware,
  controller.uncompleteProblem.bind(controller)
);

export default router;
