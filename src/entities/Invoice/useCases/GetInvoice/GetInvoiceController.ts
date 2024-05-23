import { NextFunction, Request, Response } from "express";
import GetInvoiceUseCase from "./GetInvoiceUseCase";

export default class GetInvoiceController {
    constructor(private getInvoiceUseCase: GetInvoiceUseCase) {
        this.getInvoiceUseCase = getInvoiceUseCase;
    }

    async handle(
            request: Request,
            response: Response,
            next: NextFunction
    ) {
        const { Id } = request.params;
        const user = await this.getInvoiceUseCase.execute(parseInt(Id));

        return response.status(200).json(user);
    }
}