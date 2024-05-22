import { NextFunction, Request, Response } from "express";
import GetInvoiceUseCase from "./GetInvoicesUseCase";

export default class getInvoicesController {
    constructor(private getInvoiceUseCase: GetInvoiceUseCase) {
        this.getInvoiceUseCase = getInvoiceUseCase;
    }

    async handle(request: Request, response: Response, next: NextFunction) {
        const invoices = await this.getInvoiceUseCase.execute();
        
        return response.status(200).json(invoices);
    }
}