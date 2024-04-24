
import prismaClient from "../../prisma";
import { TaskProps } from "../../interfaces/TaskProps";
import { Status, User } from "@prisma/client";

class CreateTaskService{
    async execute({title, description, category, type, associedUser, status }:TaskProps){
        
        
        const user = await prismaClient.user.findFirst({
            where:{
                id: associedUser.id
            }
        })

        if(!user){
            throw new Error("Usuario não encontrado")
        }

    

        const task = await prismaClient.task.create({
            data:{
                title:title,
                description: description,
                type: type,
                category: {
                    connect: category
                    },
                associedUser:{
                    connect: user
                } ,
                status: status
            }
        })  



        return task;
    }

}

export {CreateTaskService}