import { Status } from "@prisma/client";
import { GetItemProps } from "../../interfaces/GetItemProps"
import prismaClient from "../../prisma"
class DeleteUserService{
    async execute({id}:GetItemProps){

        if(!id){
            throw new Error("Solicitação invalida");
        }


        const findUser = await prismaClient.user.findFirst({
            where:{
                id: id
            
            }
        })

    
        if(!findUser){
            throw new Error("Usuario não existe");
        }
    


        const tasks  = await prismaClient.task.count({
            where:{
                associedUserId: findUser.id
            }
        })

        if(tasks==0){
           
            await prismaClient.user.delete({
                where:{
                    id: findUser.id
                }
            })
    
    
            return {message: "Deletado com sucesso"}
        }else{
            throw new Error("Usuario possui tarefas registradas");
        }
        } 

        
}

export {DeleteUserService}