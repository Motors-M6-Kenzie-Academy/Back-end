import { Express } from "express";
import { addressRoutes } from "./address.routes";
import { adsRoutes } from "./ads.routes";
import { sessionRoutes } from "./session.routes";
import { signinRoutes } from "./signin.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/ads", adsRoutes());
  app.use("/user", userRoutes());
  app.use("/address", addressRoutes());
  app.use("/session", sessionRoutes());
  app.use("/signin", signinRoutes());
};
