import { NextFunction, Request, Response } from "express";
import GetUserUseCase from "./GetUserUseCase";

export default class GetUserController {
    constructor(private getUserUseCase: GetUserUseCase) {
        this.getUserUseCase = getUserUseCase;
    }

    async handle(
            request: Request,
            response: Response,
            next: NextFunction
    ) {
        try {
            const authHeader = request.headers.authorization;
            if (!authHeader) {
                throw new Error('Token de autenticação não fornecido');
            }
            const token = authHeader.split(" ")[1];
            const user = await this.getUserUseCase.execute(token);
            return response.status(200).json(user);
        } catch(error) {
           return next(error);
        }
    }
}