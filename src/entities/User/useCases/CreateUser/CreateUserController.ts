import { NextFunction, Request, Response } from "express";
import { CreateUserDTO } from "./CreateUserDTO";
import CreateUserUseCase from "./CreateUserUseCase";

export default class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const { Nome, Email, Senha } = request.body as CreateUserDTO;

        await this.createUserUseCase.execute({
            Nome,
            Email,
            Senha
        });
        
        return response.status(201).send();
    }
}