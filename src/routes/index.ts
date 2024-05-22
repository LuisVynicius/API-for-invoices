import { Router } from "express";
import userRoute from "./userRoute";
import userDetailsRouter from "./userDetailsRoute";

const routes = Router();

routes.use("/user", userRoute);
routes.use("/userdetails", userDetailsRouter);

export default routes;