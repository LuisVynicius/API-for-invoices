import { Router } from "express";
import userRoute from "./userRoute";
import userDetailsRouter from "./userDetailsRoute";
import invoiceRouter from "./invoiceRoute";
import loginRouter from "./loginRoute";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.use("/login", loginRouter);

routes.use(auth);

routes.use("/user", userRoute);
routes.use("/userdetails", userDetailsRouter);
routes.use("/invoice", invoiceRouter);

export default routes;