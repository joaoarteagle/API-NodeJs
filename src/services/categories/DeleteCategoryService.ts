import { GetItemProps } from "../../interfaces/GetItemProps";
import prismaClient from "../../prisma";

class DeleteCategoryService{
    
    async execute({id}:GetItemProps){
        const category = await prismaClient.categories.findFirst({
            where:{
                id: id
            }
        })

        if(!category){
            throw new Error("Categoria não encontrada");

        }

        await prismaClient.categories.delete({
            where:{
                id:id
            }
        })

        return {message: "Categoria Deletada com sucesso"}
    }
}

export{DeleteCategoryService}