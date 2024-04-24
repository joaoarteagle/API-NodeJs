import { GetItemProps } from "../../interfaces/GetItemProps";
import prismaClient from "../../prisma";

class DeleteTaskService{
    async execute({id}: GetItemProps){
        
        if(!id){
            throw new Error("Solicitação invalida");
        }


        const findTask = await prismaClient.task.findFirst({
            where:{
                id: id
            
            }
        })

    
        if(!findTask){
            throw new Error("Task não existe");
        }

           
            await prismaClient.task.delete({
                where:{
                    id: findTask.id
                }
            })
    
    
            return {message: "Task Deletada com sucesso"}
    }
}

export{DeleteTaskService}