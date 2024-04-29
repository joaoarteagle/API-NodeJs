import { CategoryProps } from "../../interfaces/CategoryProps";
import { GetItemProps } from "../../interfaces/GetItemProps";
import prismaClient from "../../prisma";

class UpdateCategoryService{
    async execute({id}:GetItemProps, {name, color}:CategoryProps){

        const category = await prismaClient.categories.findFirst({
            where:{
                id: id
            }      
        })

        if(!category) {
                throw new Error("Cadastro nâo encontrado") 
        }

        const updated = await prismaClient.categories.update({
            where:{
                id: id
            }, data:{
                name,
                color
            }
        })


        return updated;
       
    }
}

export{ UpdateCategoryService}