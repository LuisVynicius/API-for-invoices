import { NextFunction, Request, Response } from "express";
import GetUserDetailsUseCase from "./GetUserDetailsUseCase";

export default class GetUserDetailsController {
    constructor(private getUserDetailsUseCase: GetUserDetailsUseCase) {
        this.getUserDetailsUseCase = getUserDetailsUseCase;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const { Id } = request.params;
        try{
            const userDetails = await this.getUserDetailsUseCase.execute(parseInt(Id));
            return response.status(200).json(userDetails);
        } catch(error) {
            return next(error);
        }
    }
}