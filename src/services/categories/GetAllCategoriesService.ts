import prismaClient from "../../prisma";

class GetAllCategoriesService{
    async execute(){

        const categories = await prismaClient.categories.findMany();

        return categories;
    }
}

export{GetAllCategoriesService}