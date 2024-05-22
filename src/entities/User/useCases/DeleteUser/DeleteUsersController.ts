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
        const { UsuarioID } = request.params;
        await this.deleteUserUseCase.execute(parseInt(UsuarioID));
        return response.status(204).send();
    }
}