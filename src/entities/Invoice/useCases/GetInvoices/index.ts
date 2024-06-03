import prisma from "../../../../mysql/prisma/prisma";
import InvoiceRepository from "../../repositories/InvoiceRepository";
import GetInvoicesController from "./GetInvoicesController";
import GetInvoicesUseCase from "./GetInvoicesUseCase";

export default async function GetInvoices() {
    const invoiceRepository = new InvoiceRepository(prisma);

    const getInvoicesUseCase = new GetInvoicesUseCase(invoiceRepository);
    const getInvoicesController = new GetInvoicesController(getInvoicesUseCase);

    return { getInvoicesUseCase, getInvoicesController };
}