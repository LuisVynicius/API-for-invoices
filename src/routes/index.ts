import { Router } from "express";
import userRoute from "./userRoute";
import userDetailsRouter from "./userDetailsRoute";
import invoiceRouter from "./invoiceRoute";
const routes = Router();

routes.use("/user", userRoute);
routes.use("/userdetails", userDetailsRouter);
routes.use("/invoice", invoiceRouter);

export default routes;