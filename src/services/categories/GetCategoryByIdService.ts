import { GetItemProps } from "../../interfaces/GetItemProps";
import prismaClient from "../../prisma";

class GetCategoryByIdService{
    async execute({id}: GetItemProps){

        if(!id){
            throw new Error("Id Não pode ser vazio");
        }

        const category = await prismaClient.categories.findFirst({
            where:{
                id: id
            }
        })

        if(!category) {
            throw new Error("Categoria não existe");
        }

        return category;


    }
}

export{ GetCategoryByIdService }