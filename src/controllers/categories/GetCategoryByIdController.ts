import { FastifyRequest, FastifyReply } from "fastify";
import { GetCategoryByIdService } from "../../services/categories/GetCategoryByIdService";

class GetCategoryByIdController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const id = request.query as {id: string}

        const categoryService = new GetCategoryByIdService();

        const category = await categoryService.execute(id);

        reply.send(category);

    }
}

export{ GetCategoryByIdController }