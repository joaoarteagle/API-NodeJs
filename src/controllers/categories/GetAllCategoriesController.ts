import { FastifyRequest, FastifyReply } from "fastify";
import { GetAllCategoriesService } from "../../services/categories/GetAllCategoriesService";


class GetAllCategoriesController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const categoriesService = new GetAllCategoriesService();

        const categories = await categoriesService.execute();

        reply.send(categories);
    }
}
export{GetAllCategoriesController}