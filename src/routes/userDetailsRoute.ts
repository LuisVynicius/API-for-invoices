import { Router } from "express";
import UpdateUserDetails from "../entities/userDetails/useCases/UpdateUserDetails";
import GetUserDetails from "../entities/userDetails/useCases/GetUserDetails";

const userDetailsRouter = Router({ mergeParams: true });

userDetailsRouter.get(
    "/",
    async (request, response, next) => {
        try {
            const { getUserDetailsController } = await GetUserDetails();
            return getUserDetailsController.handle(request, response, next);
        } catch(error) {
            next(error);
        }
    }
);


export default userDetailsRouter;