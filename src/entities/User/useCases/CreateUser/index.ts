import prisma from "../../../../mysql/prisma/prisma";
import CreateUserDetailsUseCase from "../../../userDetails/useCases/CreateUserDetails/CreateUserDetailsUseCase";
import UserRepository from "../../repositories/userRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

export default async function CreateUser() {
    const userRepository = new UserRepository(prisma);

    const createUserUseCase = new CreateUserUseCase(userRepository, prisma);
    const createUserController = new CreateUserController(createUserUseCase);

    return { createUserUseCase, createUserController };
}