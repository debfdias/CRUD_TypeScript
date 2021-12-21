import { getRepository } from "typeorm"
import { Category } from "../entities/Category"


export class DeleteCategoryService {
    async execute(id: string) {
        const repo = getRepository(Category);

        if (!(await repo.findOne(id)))
        {
            return null;
        }

        await repo.delete(id);
    }
}