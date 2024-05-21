import { Router } from "express";

const invoiceRouter = Router({ mergeParams: true });

invoiceRouter.get(
    "/",
    async (request, response, next) => {
        
    }
);

invoiceRouter.get(
    "/:id",
    async (request, response, next) => {

    }
);

invoiceRouter.put(
    "/:id",
    async (request, response, next) => {

    }
);

invoiceRouter.delete(
    "/:id",
    async (request, response, next) => {

    }
)

export default invoiceRouter;