import { getPrisma } from "../../../../mysql/prisma/prisma";
import DeleteInvoiceUseCase from "./DeleteInvoiceUseCase";
import DeleteInvoiceController from "./DeleteInvoiceController";
import InvoiceRepository from "../../repositories/InvoiceRepository";
import GetInvoiceUseCase from "../GetInvoice/GetInvoiceUseCase";

export default async function DeleteInvoice() {
    const prisma = await getPrisma();
  
    const invoiceRepository = new InvoiceRepository(prisma);
  
    const getInvoiceUseCase = new GetInvoiceUseCase(invoiceRepository);
    const deleteInvoiceUseCase = new DeleteInvoiceUseCase(invoiceRepository, getInvoiceUseCase);
    const deleteInvoiceController = new DeleteInvoiceController(deleteInvoiceUseCase);
  
    return { deleteInvoiceUseCase, deleteInvoiceController };
  }
  