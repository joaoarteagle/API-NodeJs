import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCategoryService } from "../../services/categories/UpdateCategoryService";
import prismaClient from "../../prisma";

class UpdateCategoryController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: string}

        const {name, color} = request.body as {name: string, color: string}

        if(!id){
            throw new Error("ID não informado");
        }

        const categoryTest = await prismaClient.categories.findFirst({
            where:{
                id: id
            }
        })

        if(!categoryTest){
            throw new Error("Usuario não encontrado");
        }
        
        const categoryService = new UpdateCategoryService();

        const updated = await categoryService.execute({id},{name, color} );


        reply.send(updated);
    }

}

export{UpdateCategoryController}