import { Usuarios, PrismaClient } from "@prisma/client"
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
        return this.prisma.usuarios.findMany({
            where: {
                DataDeDesativacao: null
            }
        });
    }

    findById(UsuarioID: number) {
        return this.prisma.usuarios.findUnique({
            where: {
                UsuarioID: UsuarioID
            }
        });
    }

    async create({
        Nome,
        Email,
        Senha
    }: CreateUserDTO) {
        return this.prisma.usuarios.create({
            data: {
                Nome,
                Senha: await argon2i.hash(Senha),
                Email,
            }
        });
    }

    update(user: UpdateUserDTO) {
        return this.prisma.usuarios.update({
            where: {
                UsuarioID: user.UsuarioID
            },
            data: user
        });
    }

    delete(UsuarioID: number) {
        return this.prisma.usuarios.update({
            where: {
                UsuarioID: UsuarioID
            },
            data: {
                DataDeDesativacao: new Date()
            }
        });
    }
}