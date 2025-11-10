import bcrypt from "bcryptjs";
import { User } from "../models/user.model";
import { generateToken } from "../utils/jwt.util";

export class AuthService {
  async register(data: {
    username: string;
    email: string;
    password: string;
    fullName?: string;
    graduationYear?: string;
  }) {
    const { username, email, password, fullName, graduationYear } = data;


    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      fullName,
      graduationYear,
    });

    return {
      id: user._id,
      username: user.username,
      email: user.email,
      progress: user.progress,
    };
  }

  async login(data: { emailOrUsername: string; password: string }) {
    const { emailOrUsername, password } = data;

    const user = await User.findOne({
      $or: [
        { email: emailOrUsername.toLowerCase() },
        { username: emailOrUsername },
      ],
    });

    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = generateToken(user._id.toString());

    return {
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        progress: user.progress,
      },
    };
  }
}
