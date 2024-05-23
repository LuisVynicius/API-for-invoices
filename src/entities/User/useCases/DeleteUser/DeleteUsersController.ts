import { NextFunction, Request, Response } from "express";
import DeleteUserUseCase from "./DeleteUserUseCase";

export default class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }

    async handle(
            request: Request,
            response: Response,
            next: NextFunction
    ) {
        const { Id } = request.params;
        await this.deleteUserUseCase.execute(parseInt(Id));
        return response.status(204).send();
    }
}