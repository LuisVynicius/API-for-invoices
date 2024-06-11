import { NextFunction, Request, Response } from "express";
import prisma from "../../../../mysql/prisma/prisma";
import UserDetailsRepository from "../../repositories/userDetailsRepository";
import GetUserDetailsUseCase from "./GetUserDetailsUseCase";
import GetUserDetailsController from "./GetUserDetailsController";
import GetUser from "../../../User/useCases/GetUser";

export default async function GetUserDetails() {
    const userDetailsRepository = new UserDetailsRepository(prisma);
    
    const { getUserUseCase } = await GetUser(); 

    const getUserDetailsUseCase = new GetUserDetailsUseCase(userDetailsRepository, getUserUseCase);
    const getUserDetailsController = new GetUserDetailsController(getUserDetailsUseCase);

    return { getUserDetailsUseCase, getUserDetailsController };
}
