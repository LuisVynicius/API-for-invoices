import { PrismaClient } from "@prisma/client";
import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";
import { CreateInvoiceDTO } from "./CreateInvoiceDTO";

export default class CreateInvoiceUseCase {
    private invoiceRepository: IInvoiceRepository;
    private prisma: PrismaClient;

    constructor(invoiceRepository: IInvoiceRepository, prisma: PrismaClient) {
        this.invoiceRepository = invoiceRepository;
        this.prisma = prisma;
    }

    async execute({
        NumeroNotaFiscal,
        DataNotaFiscal,
        Valor,
        UsuarioID
    }: CreateInvoiceDTO) {
        return this.invoiceRepository.create({
            NumeroNotaFiscal,
            DataNotaFiscal,
            Valor,
            UsuarioID
        });
    }
}