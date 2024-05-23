import { getPrisma } from "../../../../mysql/prisma/prisma";
import DeleteInvoiceUseCase from "./DeleteInvoiceUseCase";
import DeleteInvoiceController from "./DeleteInvoiceController";
import InvoiceRepository from "../../repositories/InvoiceRepository";

export default async function DeleteInvoice() {
    const prisma = await getPrisma();
  
    const userRepository = new InvoiceRepository(prisma);
  
    const deleteInvoiceUseCase = new DeleteInvoiceUseCase(userRepository);
    const deleteInvoiceController = new DeleteInvoiceController(deleteInvoiceUseCase);
  
    return { deleteInvoiceUseCase, deleteInvoiceController };
  }
  