import { Response } from "express";
import { ProgressService } from "../services/progress.service";
import { AuthRequest } from "../middleware/auth.middleware";

const progressService = new ProgressService();

export class ProgressController {
  async getProfile(req: AuthRequest, res: Response) {
    try {
      const user = await progressService.getProfile(req.userId!);
      res.status(200).json({ user });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async completeProblem(req: AuthRequest, res: Response) {
    try {
      const { problemId } = req.body;
      const progress = await progressService.completeProblem(
        req.userId!,
        problemId
      );
      res.status(200).json({ progress });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async uncompleteProblem(req: AuthRequest, res: Response) {
    try {
      const { problemId } = req.body;
      const progress = await progressService.uncompleteProblem(
        req.userId!,
        problemId
      );
      res.status(200).json({ progress });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
