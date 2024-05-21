import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export default class CreateUserUseCase {
    private userRepository: IUserRepository;
    private prisma: PrismaClient;

    constructor(userRepository: IUserRepository, prisma: PrismaClient){
        this.userRepository = userRepository;
        this.prisma = prisma;
    }

    async execute({
        Nome,
        Email,
        Senha
    }: CreateUserDTO) {
        return await this.userRepository.create({
            Nome,
            Senha,
            Email
        });
    }
    
}