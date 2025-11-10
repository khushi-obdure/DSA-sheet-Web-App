import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const result = await authService.register(req.body);
      res.status(201).json({
        statusCode: 201,
        message: "User registered successfully",
        data: result,
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = await authService.login(req.body);
      console.log(result,'-===result')
      // res.status(200).json(result);
      res.status(200).json({
        statusCode: 200,
        message: "Login Successful",
        data: result,
      });
    } catch (err: any) {
      res.status(401).json({ message: err.message });
    }
  }
}
