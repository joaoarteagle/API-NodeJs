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


        await prismaClient.user.delete({
            where:{
                id: findUser.id
            }
        })


        return {message: "Deletado com sucesso"}
    }
}

export {DeleteUserService}