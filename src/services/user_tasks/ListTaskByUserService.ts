
import prismaClient from "../../prisma";
import { GetItemProps } from "../../interfaces/GetItemProps";

class ListTaskByUserService{

    async execute(associedUser: string){

        const user = await prismaClient.user.findFirst({
            where:{
                id : associedUser
            },
            include:{ tasks: true }
        });

        // console.log(user);

        // const tasks = await prismaClient.task.findMany({
        //     where:{
        //         associedUser: {
        //             id: associedUser
        //         }
        //     }
        // });

        // console.log(tasks);
        return user?.tasks;


    }


}

export{ListTaskByUserService}