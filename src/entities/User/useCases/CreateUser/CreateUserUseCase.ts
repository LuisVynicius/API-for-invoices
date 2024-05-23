import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";
import CreateUserDetailsUseCase from "../../../userDetails/useCases/CreateUserDetails/CreateUserDetailsUseCase";
import UserDetailsRepository from "../../../userDetails/repositories/userDetailsRepository";

export default class CreateUserUseCase {
    private userRepository: IUserRepository;
    private prisma: PrismaClient;
    private createUserDetailsUseCase: CreateUserDetailsUseCase;

    constructor(userRepository: IUserRepository, prisma: PrismaClient){
        this.userRepository = userRepository;
        this.prisma = prisma;
        this.createUserDetailsUseCase = new CreateUserDetailsUseCase(new UserDetailsRepository(prisma), prisma);
    }

    async execute({
        Nome,
        Email,
        Senha
    }: CreateUserDTO) {
        const user =  await this.userRepository.create({
            Nome,
            Senha,
            Email
        });

        if (!user || !user.Id) {
            throw new Error("Falha ao criar usuário");
        }
        
        this.createUserDetailsUseCase.execute(user.Id);

        return user;
    }
    
}