import { GetItemProps } from "../../interfaces/GetItemProps";
import prismaClient from "../../prisma";

class GetUserService{

    async execute({id}:GetItemProps){

        
        if(!id){
            throw new Error("Solicitação invalida");
        }

        const userService = await prismaClient.user.findMany({
            where:{
                id: id
            }
        });
        console.log(userService);
       return userService;

    }
}

export {GetUserService}