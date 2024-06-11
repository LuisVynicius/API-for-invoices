import { NextFunction, Request, Response } from "express";
import CreateInvoiceUseCase from "./CreateInvoiceUseCase";
import { CreateInvoiceDTO } from "./CreateInvoiceDTO";

export default class CreateInvoiceController {
    constructor(private createInvoiceUseCase: CreateInvoiceUseCase) {
        this.createInvoiceUseCase = createInvoiceUseCase;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const { NumeroNotaFiscal, DataNotaFiscal, Valor } = request.body as CreateInvoiceDTO;
        const authHeader = request.headers.authorization;
            
        if (!authHeader) {
            throw new Error('Token de autenticação não fornecido');
        }
        
        const token = authHeader.split(" ")[1];
        try{
            await this.createInvoiceUseCase.execute({
                NumeroNotaFiscal,
                DataNotaFiscal,
                Valor,
                UsuarioID: 0
            }, token);
            return response.status(201).send();
        } catch (error) {
            return next(error);
        }

    }
}