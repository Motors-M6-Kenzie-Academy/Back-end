import { Router } from "express";
import { createUserController } from "../controllers/User/createUser.controller";
import { updateUserController } from "../controllers/User/updateUser.controller";
import { createUserMiddleware } from "../middlewares/user/createUserMiddleware";
import { updateUserMiddleware } from "../middlewares/user/updateUserMiddleware";
import { updateUserService } from "../services/User/updateUser.services";
// import userListController from "../controllers/User/listUser.controller";
// import userListIdController from "../controllers/User/listUserId.services";

import checkTokenMiddleware from "../middlewares/token/checkTokenMiddleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", createUserMiddleware, createUserController);
  routes.patch("/:id", updateUserMiddleware, checkTokenMiddleware, updateUserController);
  // routes.get("/", userListController)
  // routes.get("/:id", userListIdController)

  return routes;
};
