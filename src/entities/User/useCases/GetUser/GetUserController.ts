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
        const { UsuarioID } = request.params;
        const user = await this.getUserUseCase.execute(parseInt(UsuarioID));
        return response.status(200).json(user);
    }
}