import { NextFunction, Request, Response } from "express";
import UpdateUserDetailsUseCase from "./UpdateUserDetailsUseCase";
import { UsuarioDetalhes } from "@prisma/client";

export default class UpdateUserDetailsController {
    constructor(private updateUserDetailsUseCase: UpdateUserDetailsUseCase) {
        this.updateUserDetailsUseCase = updateUserDetailsUseCase;
    }

    async handle (
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const { UsuarioID, CPF, Sobrenome, NumeroTelefone, Sexo } = request.body as UsuarioDetalhes;

        await this.updateUserDetailsUseCase.execute({
            UsuarioID,
            CPF,
            NumeroTelefone,
            Sexo,
            Sobrenome
        });
        
        response.status(204).send();
    }
}