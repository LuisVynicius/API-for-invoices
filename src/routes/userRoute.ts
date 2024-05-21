import { Router } from "express";

const userRouter = Router({ mergeParams: true });

userRouter.get(
    "/",
    async (request, response, next) => {
        
    }
);

userRouter.get(
    "/:id",
    async (request, response, next) => {

    }
);

userRouter.put(
    "/:id",
    async (request, response, next) => {

    }
);

userRouter.delete(
    "/:id",
    async (request, response, next) => {

    }
)

export default userRouter;