import { Router } from "express";
import { createUserController } from "../controllers/User/createUser.controller";
import { createUserInputsMiddleware } from "../middlewares/user/createUserInputsMiddleware";
import { updateUserController } from "../controllers/User/updateUser.controller";
import { updateUserInputsMiddleware } from "../middlewares/user/updateUserInputsMiddleware";
import checkTokenMiddleware from "../middlewares/token/checkTokenMiddleware";
import userListController from "../controllers/User/listUser.controller";
import userListIdController from "../controllers/User/listUserId.controller";
import userSellersListController from "../controllers/User/listUsersSellers.controller";
import { deleteUserController } from "../controllers/User/deleteUser.controller";

const routes = Router();

export const userRoutes = () => {
  routes.get("/announcers", userSellersListController);
  routes.post("/", createUserInputsMiddleware, createUserController);
  routes.patch(
    "/:id",
    checkTokenMiddleware,
    updateUserInputsMiddleware,
    updateUserController
  );
  routes.get("/", userListController);
  routes.get("/:id", userListIdController);
  routes.delete("/:id", checkTokenMiddleware, deleteUserController);

  return routes;
};
