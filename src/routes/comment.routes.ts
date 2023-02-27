import { Router } from "express";
import commentCreateController from "../controllers/Comments/createComment.controller";
import commentsDeleteController from "../controllers/Comments/deleteComment.controller";
import commentsGetController from "../controllers/Comments/listComments.controller";
import checkTokenMiddleware from "../middlewares/token/checkTokenMiddleware";

const routes = Router();

export const commentRoutes = () => {
  routes.post("/:id", checkTokenMiddleware, commentCreateController);
  routes.get("/:id", commentsGetController);
  routes.delete("/:id", checkTokenMiddleware, commentsDeleteController);
  return routes;
};
