import prisma from "../../../../mysql/prisma/prisma";
import GetUser from "../../../User/useCases/GetUser";
import UserDetailsRepository from "../../repositories/userDetailsRepository";
import GetUserDetailsUseCase from "../GetUserDetails/GetUserDetailsUseCase";
import UpdateUserDetailsController from "./UpdateUserDetailsController";
import UpdateUserDetailsUseCase from "./UpdateUserDetailsUseCase";

export default async function UpdateUserDetails() {
    const userDetailsRepository = new UserDetailsRepository(prisma);

    const { getUserUseCase } = await GetUser();

    const getUserDetailsUseCase = new GetUserDetailsUseCase(userDetailsRepository, getUserUseCase);
    const updateUserDetailsUseCase = new UpdateUserDetailsUseCase(userDetailsRepository, getUserDetailsUseCase);
    const updateUserDetailsController = new UpdateUserDetailsController(updateUserDetailsUseCase);

    return { updateUserDetailsUseCase, updateUserDetailsController };
}