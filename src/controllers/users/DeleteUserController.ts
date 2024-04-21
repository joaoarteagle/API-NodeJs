import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteUserService } from "../../services/users/DeleteUserService"
class DeleteUserController{
 
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as {id: string}

        const deletedUser = new DeleteUserService();
        
        const user = await deletedUser.execute({ id });


        reply.send(user);
    }

}

export {DeleteUserController}