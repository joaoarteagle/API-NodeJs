import { FastifyRequest, FastifyReply } from "fastify";
import { ListUsersService } from "../../services/users/ListUsersService";


class ListUsersController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const ListUser = new ListUsersService();

        const users = await ListUser.execute();

        reply.send(users);
    }
}

export {ListUsersController}