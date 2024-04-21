import { FastifyRequest, FastifyReply } from "fastify";
import { GetUserService } from "../../services/users/GetUserService";


class GetUserController{
    async handle(request:FastifyRequest, reply: FastifyReply){

        const { id } = request.query as { id: string}

        const userService = new GetUserService();

        const user = await userService.execute({id});
        
        reply.send(user);
    }
}

export {GetUserController}