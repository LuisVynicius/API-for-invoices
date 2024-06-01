import prisma from "../../../../mysql/prisma/prisma";
import UserRepository from "../../repositories/userRepository";
import DeleteUserUseCase from "./DeleteUserUseCase";
import DeleteUserController from "./DeleteUsersController";
import GetUserUseCase from "../GetUser/GetUserUseCase";

export default async function DeleteUser() {
    const userRepository = new UserRepository(prisma);
  
    const getUserUseCase = new GetUserUseCase(userRepository);
    const deleteUserUseCase = new DeleteUserUseCase(userRepository, getUserUseCase);
    const deleteUserController = new DeleteUserController(deleteUserUseCase);
  
    return { deleteUserUseCase, deleteUserController };
  }
  