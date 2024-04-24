import { FastifyRequest, FastifyReply } from "fastify";
import { ListTaskByUserService } from "../../services/user_tasks/ListTaskByUserService";



class ListTaskByUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {id} = request.query as {id:string}

        const service = new ListTaskByUserService();

        const listTask = await service.execute(id);

        reply.send(listTask);

    }
}

export {ListTaskByUserController}