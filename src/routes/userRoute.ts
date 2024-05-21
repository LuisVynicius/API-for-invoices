import { Router } from "express";
import CreateUser from "../entities/User/useCases/CreateUser";

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

userRouter.post(
    "/",
    async (request, response, next) => {
        const { createUserController } = await CreateUser();
        createUserController.handle(request, response, next);
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