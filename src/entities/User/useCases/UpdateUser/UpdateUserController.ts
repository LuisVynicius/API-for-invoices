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
        const { Id, Nome, Senha } = request.body as UpdateUserDTO;
        try {
            await this.updateUserUseCase.execute({
                Id,
                Nome,
                Senha
            });

            return response.status(204).send();
        } catch(error) {
            return next(error);
        }
    }
}