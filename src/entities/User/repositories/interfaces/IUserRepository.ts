import { Usuarios } from "@prisma/client";
import { CreateUserDTO } from "../../useCases/CreateUser/CreateUserDTO";

export interface IUserRepository {
    findAllUsers(): Promise<Usuarios[] | null>;
    findById(id: number): Promise<Usuarios | null>;
    create(user: CreateUserDTO): void;
    update(user: Usuarios): void;
    delete(id: number): void;
}