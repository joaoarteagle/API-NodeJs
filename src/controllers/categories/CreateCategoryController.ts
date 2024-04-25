import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCategoryService } from "../../services/categories/CreateCategoryService";

class CreateCategoryController{
    async handle(request: FastifyRequest, reply:FastifyReply){

       const {name, color} = request.body as {name: string, color: string} 

        const categoryService = new CreateCategoryService();

        const category = await categoryService.execute({name, color});


        reply.send(category);

    }
}

export{CreateCategoryController}