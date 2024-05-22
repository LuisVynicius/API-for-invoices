import { getPrisma } from "../../../../mysql/prisma/prisma";
import UserRepository from "../../repositories/userRepository";
import UpdateUserController from "./UpdateUserController";
import UpdateUserUseCase from "./UpdateUserUseCase";

export default async function UpdateUser() {
    const prisma = await getPrisma();
  
    const userRepository = new UserRepository(prisma);
    
    const updateUserUseCase = new UpdateUserUseCase(userRepository);
    const updateUserController = new UpdateUserController(updateUserUseCase);
  
    return { updateUserUseCase, updateUserController };
}