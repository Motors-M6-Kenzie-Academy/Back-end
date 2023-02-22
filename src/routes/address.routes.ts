import { Router } from "express";
import { updateAddressController } from "../controllers/Address/updateAddress.controller";
import { updateAddressInputsMiddleware } from "../middlewares/address/updateAddressInputsMiddleware.ts";
import checkTokenMiddleware from "../middlewares/token/checkTokenMiddleware";

const routes = Router();

export const addressRoutes = () => {
  routes.patch(
    "/:id",
    checkTokenMiddleware,
    updateAddressInputsMiddleware,
    updateAddressController
  );
  return routes;
};
