import { Router } from "express";
import UpdateUserDetails from "../entities/userDetails/useCases/UpdateUserDetails";
import GetUserDetails from "../entities/userDetails/useCases/GetUserDetails";

const userDetailsRouter = Router({ mergeParams: true });

userDetailsRouter.get(
    "/:Id",
    async (request, response, next) => {
        const { getUserDetailsController } = await GetUserDetails();
        return getUserDetailsController.handle(request, response, next);
    }
);

userDetailsRouter.put(
    "/",
    async (request, response, next) => {
        const { updateUserDetailsController } = await UpdateUserDetails();
        return updateUserDetailsController.handle(request, response, next);
    }
);

export default userDetailsRouter;