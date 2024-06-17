import { Router } from "express";
import CreateInvoice from "../entities/Invoice/useCases/CreateInvoice";
import GetInvoices from "../entities/Invoice/useCases/GetInvoices";
import GetInvoice from "../entities/Invoice/useCases/GetInvoice";
import DeleteInvoice from "../entities/Invoice/useCases/DeleteInvoice";
import GetInvoicesByDate from "../entities/Invoice/useCases/GetInvoices copy";

const invoiceRouter = Router({ mergeParams: true });

invoiceRouter.get(
    "/",
    async (request, response, next) => {
        const { getInvoicesController } = await GetInvoices();
        return getInvoicesController.handle(request, response, next);
    }
);

invoiceRouter.get(
    "/date",
    async (request, response, next) => {
        const { getInvoicesByDateController } = await GetInvoicesByDate();
        return getInvoicesByDateController.handle(request, response, next);
    }
);

invoiceRouter.get(
    "/:Id",
    async (request, response, next) => {
        try {
            const { getInvoiceController } = await GetInvoice();
            return getInvoiceController.handle(request, response, next);
        } catch(error) {
            next(error);
        }
    }
);

invoiceRouter.post(
    "/",
    async (request, response, next) => {
        const { createInvoiceController } = await CreateInvoice();
        createInvoiceController.handle(request, response, next);
    }
);

invoiceRouter.delete(
    "/:Id",
    async (request, response, next) => {
        try {
            const { deleteInvoiceController } = await DeleteInvoice();
            return deleteInvoiceController.handle(request, response, next);
        } catch(error) {
            next(error);
        }
    }
)

export default invoiceRouter;