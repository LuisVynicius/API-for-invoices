import { getPrisma } from "../../../../mysql/prisma/prisma";
import InvoiceRepository from "../../repositories/InvoiceRepository";
import GetInvoiceController from "./GetInvoiceController";
import GetInvoiceUseCase from "./GetInvoiceUseCase";

export default async function GetInvoice() {
  const prisma = await getPrisma();

  const invoiceRepository = new InvoiceRepository(prisma);

  const getInvoiceUseCase = new GetInvoiceUseCase(invoiceRepository);
  const getInvoiceController = new GetInvoiceController(getInvoiceUseCase);

  return { getInvoiceUseCase, getInvoiceController };
}
