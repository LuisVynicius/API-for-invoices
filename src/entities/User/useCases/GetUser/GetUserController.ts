import { NextFunction, Request, Response } from "express";
import GetUserUseCase from "./GetUserUseCase";
import { NotFoundError } from "../../../../helpers/api-erros";

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
            const { Id } = request.params;
            const user = await this.getUserUseCase.execute(parseInt(Id));
            return response.status(200).json(user);
        } catch(error) {
           return next(error);
        }
    }
}