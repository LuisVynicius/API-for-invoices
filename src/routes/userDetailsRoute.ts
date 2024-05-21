import { Router } from "express";

const userDetailsRouter = Router({ mergeParams: true });

userDetailsRouter.get(
    "/",
    async (request, response, next) => {
        
    }
);

userDetailsRouter.get(
    "/:id",
    async (request, response, next) => {

    }
);

userDetailsRouter.put(
    "/:id",
    async (request, response, next) => {

    }
);

userDetailsRouter.delete(
    "/:id",
    async (request, response, next) => {

    }
)

export default userDetailsRouter;