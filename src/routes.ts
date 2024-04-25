import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { request } from "http";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { ListUsersController } from "./controllers/users/ListUsersController";
import { DeleteUserController } from "./controllers/users/DeleteUserController";
import { GetUserController } from "./controllers/users/GetUserController";
import { CreateTaskController } from "./controllers/task/CreateTaskController";
import { ListTaskByUserController } from "./controllers/user_tasks/ListTaskByUserController";
import { GetTasksController } from "./controllers/task/GetTasksController";
import { GetTaskByIDController } from "./controllers/task/GetTaskByIDController";
import { UpdateUserController } from "./controllers/users/UpdateUserController";
import { DeleteTaskController } from "./controllers/task/DeleteTaskController";
import { CreateCategoryController } from "./controllers/categories/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/categories/GetAllCategoriesController";
import { GetCategoryByIdController } from "./controllers/categories/GetCategoryByIdController";
import { DeleteCategoryController } from "./controllers/categories/DeleteCategoryController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    

    //Routes Users
    //rota de post
    fastify.post("/user", async(request: FastifyRequest, reply: FastifyReply)=>{
       return new CreateUserController().handle(request, reply); 
    });

    //rote de get todos os usuarios
    fastify.get("/users", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new ListUsersController().handle(request, reply);  
    });

    //rota de deletar
    fastify.delete("/user", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new DeleteUserController().handle(request, reply);  
    });

    fastify.put("/user",async(request: FastifyRequest, reply: FastifyReply)=>{
        return new UpdateUserController().handle(request, reply);
    })

    //rota de buscar um
    fastify.get("/user", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new GetUserController().handle(request, reply);  
    });

    // Routes Tasks

    //post a task
    fastify.post("/task", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new CreateTaskController().handle(request, reply);
    });

    //get all tasks 
    fastify.get("/tasks", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new GetTasksController().handle(request, reply);
    });

    //get one task according the id
    fastify.get("/task",async(request:FastifyRequest, reply:FastifyReply)=>{
        return new GetTaskByIDController().handle(request,reply);
    })

    //deletar uma task
    fastify.delete("/task", async(request: FastifyRequest, reply:FastifyReply)=>{
        return new DeleteTaskController().handle(request, reply);
    })



    //Routes User_tasks
    fastify.get("/user/tasks", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new ListTaskByUserController().handle(request, reply);
    });
    

    //Router Categories

    fastify.post("/category", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new CreateCategoryController().handle(request, reply);
    });

    fastify.get("/categories", async(request:FastifyRequest, reply: FastifyReply)=>{
        return new GetAllCategoriesController().handle(request, reply);
    })

    fastify.get("/category", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new GetCategoryByIdController().handle(request, reply);
    });

    fastify.delete("/category", async(request: FastifyRequest, reply: FastifyReply)=>{
        return new DeleteCategoryController().handle(request, reply);
    })
}