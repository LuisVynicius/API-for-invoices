import { getPrisma } from "../../../../mysql/prisma/prisma";
import UserRepository from "../../repositories/userRepository";
import DeleteUserUseCase from "./DeleteUserUseCase";
import DeleteUserController from "./DeleteUsersController";

export default async function DeleteUser() {
    const prisma = await getPrisma();
  
    const userRepository = new UserRepository(prisma);
  
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);
    const deleteUserController = new DeleteUserController(deleteUserUseCase);
  
    return { deleteUserUseCase, deleteUserController };
  }
  