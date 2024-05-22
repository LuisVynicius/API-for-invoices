import { getPrisma } from "../../../../mysql/prisma/prisma";
import UserDetailsRepository from "../../repositories/userDetailsRepository";
import UpdateUserDetailsController from "./UpdateUserDetailsController";
import UpdateUserDetailsUseCase from "./UpdateUserDetailsUseCase";

export default async function UpdateUserDetails() {
    const prisma = await getPrisma();

    const userDetailsRepository = new UserDetailsRepository(prisma);

    const updateUserDetailsUseCase = new UpdateUserDetailsUseCase(userDetailsRepository);
    const updateUserDetailsController = new UpdateUserDetailsController(updateUserDetailsUseCase);

    return { updateUserDetailsUseCase, updateUserDetailsController };
}