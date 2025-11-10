import { User } from "../models/user.model";

export class ProgressService {
  async getProfile(userId: string) {
    const user = await User.findById(userId).select("-password");
    if (!user) throw new Error("User not found");
    return user;
  }

  async completeProblem(userId: string, problemId: number) {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    if (!user.progress.completedProblems.includes(problemId)) {
      user.progress.completedProblems.push(problemId);
      user.progress.totalCompleted = user.progress.completedProblems.length;
      await user.save();
    }

    return user.progress;
  }

  async uncompleteProblem(userId: string, problemId: number) {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    user.progress.completedProblems = user.progress.completedProblems.filter(
      (p) => p !== problemId
    );
    user.progress.totalCompleted = user.progress.completedProblems.length;
    await user.save();

    return user.progress;
  }
}
