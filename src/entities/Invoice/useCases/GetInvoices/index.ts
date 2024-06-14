import prisma from "../../../../mysql/prisma/prisma";
import GetUser from "../../../User/useCases/GetUser";
import InvoiceRepository from "../../repositories/InvoiceRepository";
import GetInvoicesController from "./GetInvoicesController";
import GetInvoicesUseCase from "./GetInvoicesUseCase";

export default async function GetInvoices() {
    const invoiceRepository = new InvoiceRepository(prisma);

    const { getUserUseCase } = await GetUser();
    const getInvoicesUseCase = new GetInvoicesUseCase(invoiceRepository, getUserUseCase);
    const getInvoicesController = new GetInvoicesController(getInvoicesUseCase);

    return { getInvoicesUseCase, getInvoicesController };
}