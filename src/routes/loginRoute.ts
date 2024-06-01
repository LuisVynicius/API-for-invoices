import { Router } from "express";
import GetLogin from "../entities/User/useCases/LoginUser";

const loginRouter = Router({ mergeParams: true });

loginRouter.post(
    "/",
    async (request, response, next) => {
        const { email, senha} = request.body;
        try {
            const { loginUserController } = await GetLogin();
            return loginUserController.handle(request, response, next);
        } catch(error) {
            next(error);
        }
    }
);

export default loginRouter;