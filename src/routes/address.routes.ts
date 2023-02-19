import { Router } from "express";
import { updateAddressController } from "../controllers/Address/updateAddress.controller";
import { updateAddressInputsMiddleware } from "../middlewares/address/updateAddressInputsMiddleware.ts";

const routes = Router();

export const addressRoutes = () => {
  routes.patch("/:id", updateAddressInputsMiddleware, updateAddressController);
  return routes;
};
