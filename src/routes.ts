import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { request } from "http";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { ListUsersController } from "./controllers/users/ListUsersController";
import { DeleteUserController } from "./controllers/users/DeleteUserController";
import { GetUserController } from "./controllers/users/GetUserController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    

    //Routes Users
    fastify.post("/user", async(request: FastifyRequest, reply: FastifyReply)=>{
       return new CreateUserController().handle(request, reply); 
    })

    fastify.get("/users", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new ListUsersController().handle(request, reply);  
    })

    fastify.delete("/user", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new DeleteUserController().handle(request, reply);  
    })

    fastify.get("/user", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new GetUserController().handle(request, reply);  
    })


    // Routes Tasks

}