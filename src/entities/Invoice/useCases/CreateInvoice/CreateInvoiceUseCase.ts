import { PrismaClient } from "@prisma/client";
import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";
import { CreateInvoiceDTO } from "./CreateInvoiceDTO";
import GetUserUseCase from "../../../User/useCases/GetUser/GetUserUseCase";

export default class CreateInvoiceUseCase {
    private invoiceRepository: IInvoiceRepository;
    private getUserUseCase;

    constructor(invoiceRepository: IInvoiceRepository, getUserUseCase: GetUserUseCase) {
        this.invoiceRepository = invoiceRepository;
        this.getUserUseCase = getUserUseCase;
    }

    async execute({
        NumeroNotaFiscal,
        DataNotaFiscal,
        Valor,
        UsuarioID
    }: CreateInvoiceDTO) {
        const user = await this.getUserUseCase.execute(UsuarioID);
        return this.invoiceRepository.create({
            NumeroNotaFiscal,
            DataNotaFiscal,
            Valor,
            UsuarioID
        });
    }
}