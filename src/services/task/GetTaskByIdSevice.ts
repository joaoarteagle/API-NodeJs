import { GetItemProps } from "../../interfaces/GetItemProps";
import prismaClient from "../../prisma";

class GetTaskByIDService{
    async execute({id}: GetItemProps){

        const task = await prismaClient.task.findFirst({
            where:{
                id: id
            }
        });


        return task;

    }
}

export{ GetTaskByIDService }