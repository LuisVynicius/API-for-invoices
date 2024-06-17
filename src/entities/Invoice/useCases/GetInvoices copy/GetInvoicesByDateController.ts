import { NextFunction, Request, Response } from "express";
import GetInvoiceUseCase from "./GetInvoicesByDateUseCase";
import moment from "moment-timezone";

export default class getInvoicesByDateController {
    constructor(private getInvoiceUseCase: GetInvoiceUseCase) {
        this.getInvoiceUseCase = getInvoiceUseCase;
    }

    async handle(request: Request, response: Response, next: NextFunction) {
        const authHeader = request.headers.authorization;   
        if (!authHeader) {
            throw new Error('Token de autenticação não fornecido');
        }
        const startDate = moment.tz(request.body.startDate, "America/Sao_Paulo").utc().format();
        const endDate = moment.tz(request.body.endDate, "America/Sao_Paulo").utc().format();
    
        const token = authHeader.split(" ")[1];
        const invoices = await this.getInvoiceUseCase.execute(token, new Date(startDate), new Date(endDate));
        return response.status(200).json(invoices);
    }
}