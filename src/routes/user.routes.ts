import { Router } from "express";
import { createUserController } from "../controllers/User/createUser.controller";
import { createUserInputsMiddleware } from "../middlewares/user/createUserInputsMiddleware";
import { updateUserController } from "../controllers/User/updateUser.controller";
import { updateUserInputsMiddleware } from "../middlewares/user/updateUserInputsMiddleware";
import checkTokenMiddleware from "../middlewares/token/checkTokenMiddleware";
import userListController from "../controllers/User/listUser.controller";
import userListIdController from "../controllers/User/listUserId.services";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", createUserInputsMiddleware, createUserController);
  routes.patch(
    "/:id",
    checkTokenMiddleware,
    updateUserInputsMiddleware,
    updateUserController
  );
  routes.get("/", userListController);
  routes.get("/:id", userListIdController);

  return routes;
};
