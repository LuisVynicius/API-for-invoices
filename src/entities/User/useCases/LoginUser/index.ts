import { getPrisma } from "../../../../mysql/prisma/prisma";
import UserRepository from "../../repositories/userRepository";
import LoginUserController from "./LoginUserController";
import LoginUserUseCase from "./LoginUserUseCase";

export default async function GetLogin() {
  const prisma = await getPrisma();

  const userRepository = new UserRepository(prisma);

  const loginUserUseCase = new LoginUserUseCase(userRepository);
  const loginUserController = new LoginUserController(loginUserUseCase);

  return { loginUserUseCase, loginUserController };
}
