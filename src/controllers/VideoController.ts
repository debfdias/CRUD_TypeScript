import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";
import { GetAllVideoService } from "../services/GetAllVideosService";

export class VideoController {
    async create(request: Request, response: Response){
        const {name, description, duration, category_id} = request.body;

        const service = new CreateVideoService();

        const result = await service.execute({name, description, duration, category_id});

        if(!result)
        {
            return response.status(400).json("Erro");
        }

        return response.json(result);
    }

    async list(request: Request, response: Response){
        const service = new GetAllVideoService();

        const videos = await service.execute();

        return response.json(videos);
    }
}