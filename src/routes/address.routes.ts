import { Router } from "express";
import { updateAddressController } from "../controllers/Address/updateAddress.controller";
import { updateAddressMiddleware } from "../middlewares/address/updateAddressMiddleware.ts";
import checkTokenMiddleware from "../middlewares/token/checkTokenMiddleware";

const routes = Router();

export const addressRoutes = () => {
  routes.patch("/:id", updateAddressMiddleware, checkTokenMiddleware,  updateAddressController);
  return routes;
};
