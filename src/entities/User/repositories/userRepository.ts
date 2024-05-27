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

    findByEmail(email: string) {
        const user = this.prisma.usuario.findFirst({
            where: {
                Email: email
            }
        });
        return user;
    }
    
    findAllUsers() {
        return this.prisma.usuario.findMany({
            where: {
                DataDeDesativacao: null
            }
        });
    }

    findById(Id: number) {
        const user = this.prisma.usuario.findUnique({
            where: {
                Id: Id
            }
        });
        return user;
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

    async update(user: UpdateUserDTO) {
        return this.prisma.usuario.update({
            where: {
                Id: user.Id
            },
            data: {
                Nome: user.Nome,
                Senha: await argon2i.hash(user.Senha)
                
            }
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