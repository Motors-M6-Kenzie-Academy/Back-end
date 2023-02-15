import { Router } from "express";
import { createUserController } from "../controllers/User/createUser.controller";
import { createUserMiddleware } from "../middlewares/user/createUserMiddleware";
// import userListController from "../controllers/User/listUser.controller";
// import userListIdController from "../controllers/User/listUserId.services";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", createUserMiddleware, createUserController);
  // routes.get("/", userListController)
  // routes.get("/:id", userListIdController)

  return routes;
};
