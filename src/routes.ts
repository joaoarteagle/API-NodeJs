import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { request } from "http";
import { CreateUserController } from "./controllers/users/CreateUserController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply)=>{
        return({teste:"hello teste"})
    })
    
    fastify.post("/user", async(request: FastifyRequest, reply: FastifyReply)=>{
       return new CreateUserController().handle(request, reply); 
    })
}