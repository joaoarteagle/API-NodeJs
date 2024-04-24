import { Categories, Status, User } from "@prisma/client";

export interface TaskProps{
    title: string;
    description: string;
    type: string;
    status: Status;
    category?: Categories;
    associedUser: User;

}