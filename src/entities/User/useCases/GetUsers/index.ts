import prisma from "../../../../mysql/prisma/prisma";
import UserRepository from "../../repositories/userRepository";
import GetUsersController from "./GetUsersController";
import GetUsersUseCase from "./GetUsersUseCase";

export default async function GetUsers() {  
    const userRepository = new UserRepository(prisma);
  
    const getUsersUseCase = new GetUsersUseCase(userRepository);
    const getUsersController = new GetUsersController(getUsersUseCase);
  
    return { getUsersUseCase, getUsersController };
}
  