import prisma from "../../../../mysql/prisma/prisma";
import InvoiceRepository from "../../repositories/InvoiceRepository";
import CreateInvoiceController from "./CreateInvoiceController";
import CreateInvoiceUseCase from "./CreateInvoiceUseCase";

export default async function CreateInvoice() {

    const invoiceRepository = new InvoiceRepository(prisma);

    const createInvoiceUseCase = new CreateInvoiceUseCase(invoiceRepository, prisma);
    const createInvoiceController = new CreateInvoiceController(createInvoiceUseCase);

    return { createInvoiceUseCase, createInvoiceController };
}