import { Usuarios } from "@prisma/client";
import { CreateUserDTO } from "../../useCases/CreateUser/CreateUserDTO";
import { UpdateUserDTO } from "../../useCases/UpdateUser/UpdateUserDTO";

export interface IUserRepository {
    findAllUsers(): Promise<Usuarios[] | null>;
    findById(id: number): Promise<Usuarios | null>;
    create(user: CreateUserDTO): void;
    update(user: UpdateUserDTO): void;
    delete(id: number): void;
}