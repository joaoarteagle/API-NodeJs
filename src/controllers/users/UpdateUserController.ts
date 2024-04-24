import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserService } from "../../services/users/UpdateUserService";
import { CreateUserProps } from "../../interfaces/UserProps";


class UpdateUserController{
    async handle(request: FastifyRequest, reply:FastifyReply){

        const id = request.query as {id:string}
        const update = request.body as CreateUserProps;

        const userService = new UpdateUserService();

        const userUpdate = await userService.execute(id,update);

        reply.send(userUpdate);

    }

        
    }

    export{ UpdateUserController }