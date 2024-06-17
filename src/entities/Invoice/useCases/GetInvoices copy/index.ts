import prisma from "../../../../mysql/prisma/prisma";
import GetUser from "../../../User/useCases/GetUser";
import InvoiceRepository from "../../repositories/InvoiceRepository";
import GetInvoicesByDateController from "./GetInvoicesByDateController";
import GetInvoicesByDateUseCase from "./GetInvoicesByDateUseCase";

export default async function GetInvoicesByDate() {
    const invoiceRepository = new InvoiceRepository(prisma);

    const { getUserUseCase } = await GetUser();
    const getInvoicesByDateUseCase = new GetInvoicesByDateUseCase(invoiceRepository, getUserUseCase);
    const getInvoicesByDateController = new GetInvoicesByDateController(getInvoicesByDateUseCase);

    return { getInvoicesByDateUseCase, getInvoicesByDateController };
}