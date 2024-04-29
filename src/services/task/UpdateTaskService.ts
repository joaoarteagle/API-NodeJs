import { connect } from "http2";
import { GetItemProps } from "../../interfaces/GetItemProps";
import { TaskProps } from "../../interfaces/TaskProps";
import prismaClient from "../../prisma";

class UpdateTaskService{

    async execute(  {id}:GetItemProps, 
                    {title, description, type, status, 
                    category, associedUser}: TaskProps){

            

            if(!id){
                throw new Error("Id Nulo");
            }

        const task = await prismaClient.task.update({
            where:{
                id: id
            }, data:{
                title,
                description,
                type, 
                category:{
                    connect: category
                },
                associedUser:{
                    connect: category
                },
                status

            }
        });

        if(!task){
            throw new Error("Tarefa Não encontrada");
        }

        return task;


    }



}

export{UpdateTaskService}