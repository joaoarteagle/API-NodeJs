import { FastifyRequest,  FastifyReply } from "fastify";
import { DeleteCategoryService } from "../../services/categories/DeleteCategoryService";
import { constants } from "buffer";

class DeleteCategoryController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const id = request.query as {id: string}

        const categoryService = new DeleteCategoryService();

        const deletedCategory = await categoryService.execute(id)

        reply.send(deletedCategory);
    }
}

export{DeleteCategoryController}