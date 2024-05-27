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
        try {
            const { Id } = request.params;
            const invoice = await this.getInvoiceUseCase.execute(parseInt(Id));
            return response.status(200).json(invoice);
        } catch(error) {
            return next(error);
        }
    }
}