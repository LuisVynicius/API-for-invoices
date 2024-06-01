import prisma from "../../../../mysql/prisma/prisma";
import UserDetailsRepository from "../../repositories/userDetailsRepository";
import CreateUserDetailsUseCase from "./CreateUserDetailsUseCase";

export default async function CreateUserDetails() {
    const userDetailsRepository = new UserDetailsRepository(prisma);

    const createUserDetailsUseCase = new CreateUserDetailsUseCase(userDetailsRepository, prisma);

    return { createUserDetailsUseCase };
}