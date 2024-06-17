import { NotaFiscal } from "@prisma/client";
import { CreateInvoiceDTO } from "../../useCases/CreateInvoice/CreateInvoiceDTO";

export interface IInvoiceRepository {
    findInvoicesByDate(startDate: Date, endDate: Date, Id: number): Promise<NotaFiscal[] | null>;
    findAllInvoices(id: number): Promise<NotaFiscal[] | null>;
    findById(id: number): Promise<NotaFiscal | null>;
    create(invoice: CreateInvoiceDTO): void;
    delete(id: number): void;
}