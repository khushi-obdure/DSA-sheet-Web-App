import { Topic } from "../models/topic.model";

export class TopicService {
    async get() {
        const data = await Topic.find();
        if (!data) throw new Error("Topic Data not found");
        return data;
    }
}
