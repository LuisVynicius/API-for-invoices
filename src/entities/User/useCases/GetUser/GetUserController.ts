import { NextFunction, Request, Response } from "express";
import GetUserUseCase from "./GetUserUseCase";
import argon2i from "argon2";

export default class GetUserController {
    constructor(private getUserUseCase: GetUserUseCase) {
        this.getUserUseCase = getUserUseCase;
    }

    async handle(
            request: Request,
            response: Response,
            next: NextFunction
    ) {
        const { UsuarioID } = request.params;
        const user = await this.getUserUseCase.execute(parseInt(UsuarioID));
        
        if (!user || !user.Senha) {
            return response.status(400).json({ error: "Usuário ou senha inválidos." });
        }
        
        const password = await argon2i.verify(user?.Senha, "MinhaSenhaDaora");

        if (password) {
            console.log("Senha Correta");
        } else {
            console.log("Senha incorreta");
        }

        return response.status(200).json(user);
    }
}