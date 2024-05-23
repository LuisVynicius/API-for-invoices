import { Usuario, PrismaClient } from "@prisma/client"
import { IUserRepository } from "./interfaces/IUserRepository"
import { CreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";
import { UpdateUserDTO } from "../useCases/UpdateUser/UpdateUserDTO";
import argon2i from "argon2";

export default class UserRepository implements IUserRepository{
    private prisma: PrismaClient;
    
    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }
    
    findAllUsers() {
        return this.prisma.usuario.findMany({
            where: {
                DataDeDesativacao: null
            }
        });
    }

    findById(Id: number) {
        return this.prisma.usuario.findUnique({
            where: {
                Id: Id
            }
        });
    }

    async create({
        Nome,
        Email,
        Senha
    }: CreateUserDTO) {
        return this.prisma.usuario.create({
            data: {
                Nome,
                Senha: await argon2i.hash(Senha),
                Email,
            }
        });
    }

    update(user: UpdateUserDTO) {
        return this.prisma.usuario.update({
            where: {
                Id: user.Id
            },
            data: user
        });
    }

    delete(Id: number) {
        return this.prisma.usuario.update({
            where: {
                Id: Id
            },
            data: {
                DataDeDesativacao: new Date()
            }
        });
    }
}