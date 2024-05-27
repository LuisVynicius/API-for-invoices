import { NextFunction, Request, Response } from "express";
import DeleteInvoiceUseCase from "./DeleteInvoiceUseCase";

export default class DeleteInvoiceController {
    constructor(private deleteInvoiceUseCase: DeleteInvoiceUseCase) {
        this.deleteInvoiceUseCase = deleteInvoiceUseCase;
    }

    async handle(
            request: Request,
            response: Response,
            next: NextFunction
    ) {
        try {
            const { Id } = request.params;
            await this.deleteInvoiceUseCase.execute(parseInt(Id));
            return response.status(204).send();
        } catch(error) {
            return next(error);
        }
    }
}