import { getPrisma } from "../../../../mysql/prisma/prisma";
import InvoiceRepository from "../../repositories/InvoiceRepository";
import GetInvoicesController from "./GetInvoicesController";
import getInvoicesController from "./GetInvoicesController";
import GetInvoicesUseCase from "./GetInvoicesUseCase";
import GetInvoiceUseCase from "./GetInvoicesUseCase";

export default async function GetInvoices() {
    const prisma = await getPrisma();

    const invoiceRepository = new InvoiceRepository(prisma);

    const getInvoicesUseCase = new GetInvoicesUseCase(invoiceRepository);
    const getInvoicesController = new GetInvoicesController(getInvoicesUseCase);

    return { getInvoicesUseCase, getInvoicesController };
}