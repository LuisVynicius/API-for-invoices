import prisma from "../../../../mysql/prisma/prisma";
import GetUserUseCase from "../../../User/useCases/GetUser/GetUserUseCase";
import InvoiceRepository from "../../repositories/InvoiceRepository";
import CreateInvoiceController from "./CreateInvoiceController";
import CreateInvoiceUseCase from "./CreateInvoiceUseCase";
import UserRepository from "../../../User/repositories/userRepository";

export default async function CreateInvoice() {

    const invoiceRepository = new InvoiceRepository(prisma);
    const userRepository = new UserRepository(prisma);

    const getUserUseCase = new GetUserUseCase(userRepository);
    const createInvoiceUseCase = new CreateInvoiceUseCase(invoiceRepository, getUserUseCase);
    const createInvoiceController = new CreateInvoiceController(createInvoiceUseCase);

    return { createInvoiceUseCase, createInvoiceController };
}