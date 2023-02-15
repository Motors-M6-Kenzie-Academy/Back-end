import { Router } from "express";
import SignInController from "../controllers/SignIn/signin.controller";
import { SignInUserMiddleware } from "../middlewares/signin/signinUser.Middleware";

const routes = Router();

export const signinRoutes = () => {
  routes.post("/", SignInUserMiddleware, SignInController);
  return routes;
};
