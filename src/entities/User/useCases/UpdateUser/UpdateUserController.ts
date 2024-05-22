import { NextFunction, Request, Response } from "express";
import UpdateUserUseCase from "./UpdateUserUseCase";
import { UpdateUserDTO } from "./UpdateUserDTO";

export default class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }

    async handle(
            request: Request,
            response: Response,
            next: NextFunction
        ) {
        const { UsuarioID, Nome, Senha } = request.body as UpdateUserDTO;

        await this.updateUserUseCase.execute({
            UsuarioID,
            Nome,
            Senha
        });

        return response.status(204).send();
    }
}