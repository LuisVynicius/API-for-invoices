import { NextFunction, Request, Response } from "express";
import { getPrisma } from "../../../../mysql/prisma/prisma";
import UserDetailsRepository from "../../repositories/userDetailsRepository";
import GetUserDetailsUseCase from "./GetUserDetailsUseCase";
import GetUserDetailsController from "./GetUserDetailsController";

export default async function GetUserDetails() {
    const prisma = await getPrisma();

    const userDetailsRepository = new UserDetailsRepository(prisma);

    const getUserDetailsUseCase = new GetUserDetailsUseCase(userDetailsRepository);
    const getUserDetailsController = new GetUserDetailsController(getUserDetailsUseCase);

    return { getUserDetailsUseCase, getUserDetailsController };
}