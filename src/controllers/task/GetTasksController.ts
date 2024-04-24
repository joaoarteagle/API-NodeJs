import { FastifyRequest, FastifyReply } from "fastify";
import { GetTasksService } from "../../services/task/GetTasksService";

class GetTasksController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const tasksService = new GetTasksService();

        const list = await tasksService.execute();

        reply.send(list);

    }
}

export{ GetTasksController }