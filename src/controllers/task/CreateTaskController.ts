import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskService } from "../../services/task/CreateTaskService";
import { Categories, Status, User } from "@prisma/client";

class CreateTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const{title, description, category, type, associedUser, status } = request.body as {title:string , description: string, category: Categories, type: string, associedUser:User, status:Status }


        const taskService = new CreateTaskService();
        const task = await taskService.execute({title, description, category, type, associedUser, status});

            reply.send(task);

    }
}

export {CreateTaskController};