import { Request, Response } from "express";
import { TopicService } from "../services/topic.service";

const topicService = new TopicService();

export class TopicController {
    async get(req: Request, res: Response) {
        try {
            const result = await topicService.get();
            res.status(200).json({
                statusCode: 200,
                message: "Get Successfull",
                data: result,
            });
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }
}
