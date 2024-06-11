import { NextFunction, Request, Response } from "express";
import GetUserDetailsUseCase from "./GetUserDetailsUseCase";

export default class GetUserDetailsController {
    constructor(private getUserDetailsUseCase: GetUserDetailsUseCase) {
        this.getUserDetailsUseCase = getUserDetailsUseCase;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const authHeader = request.headers.authorization;
            
        if (!authHeader) {
            throw new Error('Token de autenticação não fornecido');
        }
        
        const token = authHeader.split(" ")[1];

        try{
            const userDetails = await this.getUserDetailsUseCase.execute(token);
            return response.status(200).json(userDetails);
        } catch(error) {
            return next(error);
        }
    }
}