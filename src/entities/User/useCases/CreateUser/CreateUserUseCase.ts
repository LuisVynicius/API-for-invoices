import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";
import CreateUserDetailsUseCase from "../../../userDetails/useCases/CreateUserDetails/CreateUserDetailsUseCase";
import UserDetailsRepository from "../../../userDetails/repositories/userDetailsRepository";
import { ConflictError } from "../../../../helpers/api-erros";

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
        
        const userExist = await this.userRepository.findByEmail(Email);

        if (userExist) {
            throw new ConflictError("Email já utilizado");
        }

        const user =  await this.userRepository.create({
            Nome,
            Senha,
            Email
        });
        

        if (!user || !user.Id) {
            throw new Error();
        }
        
        this.createUserDetailsUseCase.execute(user.Id);

        return user;
    }
    
}