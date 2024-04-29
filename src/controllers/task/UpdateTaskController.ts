import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateTaskService } from "../../services/task/UpdateTaskService";
import prismaClient from "../../prisma";
import { TaskProps } from "../../interfaces/TaskProps";


class UpdateTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: string}
        const data = request.body as TaskProps
        const taskExist = await prismaClient.task.findFirst({
            where:{
                id: id
            }
        });

        if(!taskExist){
            throw new Error("Tarefa não encontrada!");
        }

        const taskService = new UpdateTaskService();

        const update = await taskService.execute({id}, data);

        reply.send(update);
    }
}

export{UpdateTaskController}