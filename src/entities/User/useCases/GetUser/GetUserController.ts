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
        const { Id } = request.params;
        try{
            const user = await this.getUserUseCase.execute(parseInt(Id));
            return response.status(200).json(user);
        } catch (error: any) {
            return response.status(404).json({ message: error.message });
        }
    }
}