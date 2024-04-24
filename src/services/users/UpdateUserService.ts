import { GetItemProps} from "../../interfaces/GetItemProps";
import { CreateUserProps } from "../../interfaces/UserProps";
import prismaClient from "../../prisma";

class UpdateUserService{
    async execute({id}:GetItemProps,{ userName, weight, email, password}:CreateUserProps){

        const user = await prismaClient.user.update({
            where:{
                id:id,
            }, 
            data:{
                userName,
                weight, 
                email, 
                password,
            }
        });

        return user;



    }
}

export{ UpdateUserService }