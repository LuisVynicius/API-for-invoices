import { Usuarios, PrismaClient } from "@prisma/client"
import { IUserRepository } from "./interfaces/IUserRepository"
import { CreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";

export default class UserRepository implements IUserRepository{
    private prisma: PrismaClient;
    
    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }
    
    findAllUsers(): Promise<{
            UsuarioID: number;
            Nome: string;
            Email: string;
            Senha: string;
            DataDeDesativacao: Date | null; }[] | null> {
        return this.prisma.usuarios.findMany({
            where: {
                DataDeDesativacao: null
            }
        });
    }

    findById(UsuarioID: number): Promise<{
            UsuarioID: number;
            Nome: string;
            Email: string;
            Senha: string;
            DataDeDesativacao: Date | null; } | null> {
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
                Senha,
                Email,
            }
        });
    }

    update(user: {
            UsuarioID: number;
            Nome: string;
            Email: string;
            Senha: string;
            DataDeDesativacao: Date | null; }): void {
        this.prisma.usuarios.update({
            where: {
                UsuarioID: user.UsuarioID
            },
            data: user
        });
    }

    delete(id: number) {
    }
    
    
}