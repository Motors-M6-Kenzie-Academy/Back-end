import { Express } from "express";
import { addressRoutes } from "./address.routes";
import { adsRoutes } from "./ads.routes";
import { commentRoutes } from "./comment.routes";
import { signinRoutes } from "./signin.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/ads", adsRoutes());
  app.use("/user", userRoutes());
  app.use("/address", addressRoutes());
  app.use("/comments", commentRoutes());
  app.use("/signin", signinRoutes());
};
