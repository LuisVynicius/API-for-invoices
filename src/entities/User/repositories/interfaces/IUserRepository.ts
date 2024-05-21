import { Usuarios } from "@prisma/client";

export interface IUserRepository {
    findAllUsers(): Promise<Usuarios[] | null>;
    findById(id: number): Promise<Usuarios | null>;
    create(user: Usuarios): void;
    update(user: Usuarios): void;
    delete(id: number): void;
}