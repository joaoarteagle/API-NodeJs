import { FastifyRequest, FastifyReply } from "fastify";
import { GetTaskByIDService } from "../../services/task/GetTaskByIdSevice";


class GetTaskByIDController{
    async handle(request:FastifyRequest, reply: FastifyReply){

        const id = request.query as {id:string}

        const taskService = new GetTaskByIDService();

        const task = await taskService.execute(id);

        reply.send(task);

    }
}

export{ GetTaskByIDController };