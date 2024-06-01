import prisma from "../../../../mysql/prisma/prisma";
import UserRepository from "../../repositories/userRepository";
import UpdateUserController from "./UpdateUserController";
import UpdateUserUseCase from "./UpdateUserUseCase";
import GetUserUseCase from "../GetUser/GetUserUseCase";

export default async function UpdateUser() {  
    const userRepository = new UserRepository(prisma);
    
    const getUserUseCase = new GetUserUseCase(userRepository);
    const updateUserUseCase = new UpdateUserUseCase(userRepository, getUserUseCase);
    const updateUserController = new UpdateUserController(updateUserUseCase);
  
    return { updateUserUseCase, updateUserController };
}