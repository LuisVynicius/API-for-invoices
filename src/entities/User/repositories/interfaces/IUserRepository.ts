import { Usuario } from "@prisma/client";
import { CreateUserDTO } from "../../useCases/CreateUser/CreateUserDTO";
import { UpdateUserDTO } from "../../useCases/UpdateUser/UpdateUserDTO";

export interface IUserRepository {
    findAllUsers(): Promise<Usuario[] | null>;
    findById(id: number): Promise<Usuario | null>;
    create(user: CreateUserDTO): Promise<Usuario | null>;
    update(user: UpdateUserDTO): void;
    delete(id: number): void;
}