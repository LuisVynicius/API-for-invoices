import { PrismaClient, Usuario } from "@prisma/client";
import { IUserDetailsRepository } from "../../repositories/interfaces/IUserDetailsRepository";

export default class CreateUserDetailsUseCase {
    private userDetailsRepository: IUserDetailsRepository;
    private prisma: PrismaClient;

    constructor(userDetailsRepository: IUserDetailsRepository, prisma: PrismaClient) {
        this.userDetailsRepository = userDetailsRepository;
        this.prisma = prisma;
    }

    async execute(Id: number) {
        return this.userDetailsRepository.create(Id);
    }
}