import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteTaskService } from "../../services/task/DeleteTaskService";

class DeleteTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const id = request.query as {id:string}
        const taskService = new DeleteTaskService();
        const deletedTask = await taskService.execute(id);

        reply.send(deletedTask);

    }
}

export{ DeleteTaskController }