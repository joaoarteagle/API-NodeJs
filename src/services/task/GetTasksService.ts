import prismaClient from "../../prisma";


class GetTasksService{
    async execute(){

        const tasks  = await prismaClient.task.findMany();

        return tasks;

    }
}

export {GetTasksService}