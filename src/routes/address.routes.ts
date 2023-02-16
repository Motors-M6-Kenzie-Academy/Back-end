import { Router } from "express";
import { updateAddressController } from "../controllers/Address/updateAddress.controller";
import { updateAddressMiddleware } from "../middlewares/address/updateAddressMiddleware.ts";

const routes = Router();

export const addressRoutes = () => {
  routes.patch("/", updateAddressMiddleware, updateAddressController);
  return routes;
};
