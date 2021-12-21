import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { DeleteCategoryService } from "../services/DeleteCategoryService";
import { GetAllCategoryService } from "../services/GetAllCategoryService";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

export class CategoryController {
    async create(request: Request, response: Response){
        const {name, description} = request.body;

        const service = new CreateCategoryService();

        const result = await service.execute({name, description});

        if(!result)
        {
            return response.status(400).json("Erro");
        }

        return response.json(result);
    }

    async list(request: Request, response: Response){
        const service = new GetAllCategoryService();

        const categories = await service.execute();

        return response.json(categories);
    }

    async delete(request: Request, response: Response){
        const {id} = request.params;

        const service = new DeleteCategoryService();

        const result = await service.execute(id);

        if(!result)
        {
            return response.status(400).json("Erro");
        }

        return response.status(204).end();
    }

    async update(request: Request, response: Response){
        const {id} = request.params;
        const {name, description} = request.body;

        const service = new UpdateCategoryService();

        const result = await service.execute({id, name, description});

        if(!result)
        {
            return response.status(400).json("Erro");
        }

        return response.status(204).end();
    }
}