import { NextFunction, Request, Response } from "express";
import LoginUserUseCase from "./LoginUserUseCase";

export default class GetUserController {
    constructor(private loginUserUseCase: LoginUserUseCase) {
        this.loginUserUseCase = loginUserUseCase;
    }

    async handle(
            request: Request,
            response: Response,
            next: NextFunction
    ) {
        try {
            const { Email, password } = request.body;
            const token = await this.loginUserUseCase.execute(Email, password);
            return response.status(200).json({tkn: "Bearer " + token});
        } catch(error) {
           return next(error);
        }
    }
}