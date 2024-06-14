import { NextFunction, Request, Response } from "express";
import UpdateUserUseCase from "./UpdateUserUseCase";
import { UpdateUserDTO } from "./UpdateUserDTO";
import { NotFoundError } from "../../../../helpers/api-erros";

export default class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
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
            const {
                Nome,
                Senha,
                CPF,
                Sobrenome,
                NumeroTelefone,
                Sexo
                } = request.body as UpdateUserDTO;
            try {
                await this.updateUserUseCase.execute({
                    Nome,
                    Senha,
                    CPF,
                    Sobrenome,
                    NumeroTelefone,
                    Sexo
                }, token);
                return response.status(204).send();
        } catch(error) {
                return next(error);
        }
    }
}