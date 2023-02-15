import { Router } from "express";
import adsCreateController from "../controllers/Ads/createAds.controller";
import adsGetController from "../controllers/Ads/listAds.controller";

const routes = Router();

export const adsRoutes = () => {
  routes.post("/", adsCreateController);
  routes.get("/", adsGetController);

  return routes;
};
