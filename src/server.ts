import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({logger:true})

const start = async()=>{


    await app.register(fastifyCors);
    await app.register(routes);

    try{
        await app.listen({port:3333})
    }catch(error){
       console.log(error);
        process.exit(1);
    }
}

start();