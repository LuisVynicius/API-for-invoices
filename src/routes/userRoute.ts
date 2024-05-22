import { Router } from "express";
import CreateUser from "../entities/User/useCases/CreateUser";
import GetUser from "../entities/User/useCases/GetUser";
import GetUsers from "../entities/User/useCases/GetUsers";
import UpdateUser from "../entities/User/useCases/UpdateUser";
import DeleteUser from "../entities/User/useCases/DeleteUser";

const userRouter = Router({ mergeParams: true });

userRouter.get(
    "/",
    async (request, response, next) => {
        const { getUsersController } = await GetUsers();
        return getUsersController.handle(request, response, next);
    }
);

userRouter.get(
    "/:UsuarioID",
    async (request, response, next) => {
        const { getUserController } = await GetUser();
        return getUserController.handle(request, response, next);
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
    "/",
    async (request, response, next) => {
        const { updateUserController } = await UpdateUser();
        return updateUserController.handle(request, response, next);
    }
);

userRouter.delete(
    "/:UsuarioID",
    async (request, response, next) => {
        const { deleteUserController } = await DeleteUser();
        return deleteUserController.handle(request, response, next);
    }
)

export default userRouter;