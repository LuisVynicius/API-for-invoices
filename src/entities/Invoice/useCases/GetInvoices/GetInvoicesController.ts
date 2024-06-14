import { NextFunction, Request, Response } from "express";
import GetInvoiceUseCase from "./GetInvoicesUseCase";

export default class getInvoicesController {
    constructor(private getInvoiceUseCase: GetInvoiceUseCase) {
        this.getInvoiceUseCase = getInvoiceUseCase;
    }

    async handle(request: Request, response: Response, next: NextFunction) {
        const authHeader = request.headers.authorization;   
        if (!authHeader) {
            throw new Error('Token de autenticação não fornecido');
        }
        const token = authHeader.split(" ")[1];
        const invoices = await this.getInvoiceUseCase.execute(token);
        return response.status(200).json(invoices);
    }
}