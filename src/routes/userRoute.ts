import { Router } from "express";
import CreateUser from "../entities/User/useCases/CreateUser";
import GetUser from "../entities/User/useCases/GetUser";
import GetUsers from "../entities/User/useCases/GetUsers";
import UpdateUser from "../entities/User/useCases/UpdateUser";
import DeleteUser from "../entities/User/useCases/DeleteUser";
import { NotFoundError } from "../helpers/api-erros";

const userRouter = Router({ mergeParams: true });

userRouter.get(
    "/",
    async (request, response, next) => {
        const { getUsersController } = await GetUsers();
        return getUsersController.handle(request, response, next);
    }
);

userRouter.get(
    "/:Id",
    async (request, response, next) => {
        try{
            const { getUserController } = await GetUser();
            return getUserController.handle(request, response, next);
        } catch(error) {
            next(error);
        }
    }
);

userRouter.post(
    "/",
    async (request, response, next) => {
        try {
            const { createUserController } = await CreateUser();
            createUserController.handle(request, response, next);
        } catch(error) {
            next(error);
        }
    }
);

userRouter.put(
    "/",
    async (request, response, next) => {
        try {
            const { updateUserController } = await UpdateUser();
            return updateUserController.handle(request, response, next);
        } catch(error) {
            next(error);
        }
    }
);

userRouter.delete(
    "/:Id",
    async (request, response, next) => {
        try {
            const { deleteUserController } = await DeleteUser();
            return deleteUserController.handle(request, response, next);
        } catch(error) {
            next(error);
        }
    }
)

export default userRouter;