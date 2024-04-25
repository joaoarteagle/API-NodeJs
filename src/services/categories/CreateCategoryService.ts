import { CategoryProps } from "../../interfaces/CategoryProps";
import prismaClient from "../../prisma";

class CreateCategoryService{
    async execute({name, color}: CategoryProps){

        const category =  await prismaClient.categories.create({
            data:{
                name,
                color
            }
        })


        return category;

    }



}
export{CreateCategoryService}