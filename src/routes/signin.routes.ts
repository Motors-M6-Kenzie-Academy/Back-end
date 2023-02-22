import { Router } from "express";
import SignInController from "../controllers/SignIn/signin.controller";
import { signinUserInputsMiddleware } from "../middlewares/signin/signinUserInputsMiddleware";

const routes = Router();

export const signinRoutes = () => {
  routes.post("/", signinUserInputsMiddleware, SignInController);
  return routes;
};
