import { Router } from "express";
import userRoute from "./userRoute";

const routes = Router();

routes.use("/user", userRoute);

export default routes;