import prisma from "../../../../mysql/prisma/prisma";
import UserRepository from "../../repositories/userRepository";
import GetUserController from "./GetUserController";
import GetUserUseCase from "./GetUserUseCase";

export default async function GetUser() {
  const userRepository = new UserRepository(prisma);

  const getUserUseCase = new GetUserUseCase(userRepository);
  const getUserController = new GetUserController(getUserUseCase);

  return { getUserUseCase, getUserController };
}
