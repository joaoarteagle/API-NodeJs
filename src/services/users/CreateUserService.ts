import { error } from "console";
import { CreateUserProps } from "../../interfaces/UserProps";
import prismaClient from "../../prisma";

class CreateUserService{
    async execute({userName, weight, email, password}:CreateUserProps){
        

        if(!userName || !weight || !email || !password){
            throw new Error("Preencha todos os campos");
        }

        const user = await prismaClient.user.create({
            data:{
                userName,
                weight,
                email,
                password
            }
        })
        
        return user;
    }
}

export {CreateUserService}