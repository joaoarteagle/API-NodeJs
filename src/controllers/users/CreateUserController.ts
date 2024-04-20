import {FastifyRequest, FastifyReply} from "fastify";
import { CreateUserService } from "../../services/users/CreateUserService";


class CreateUserController{
    async handle(request: FastifyRequest, reply:FastifyReply){

        const{userName, weight, email, password} = request.body as {userName:string , weight: number, email:string, password: string}

        const userService = new CreateUserService();
        const user = await userService.execute({userName, weight, email, password});


        reply.send(user)
    }


}


export{CreateUserController};