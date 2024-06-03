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
        const { NumeroNotaFiscal, DataNotaFiscal, Valor, UsuarioID } = request.body as CreateInvoiceDTO;
    
        try{
            await this.createInvoiceUseCase.execute({
            NumeroNotaFiscal,
            DataNotaFiscal,
            Valor,
            UsuarioID
            });
            return response.status(201).send();
        } catch (error) {
            return next(error);
        }

    }
}