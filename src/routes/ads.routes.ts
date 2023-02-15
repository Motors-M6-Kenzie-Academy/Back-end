import { Router } from "express";

import adsCreateController from "../controllers/Ads/createAds.controller";
import adsGetController from "../controllers/Ads/listAds.controller";
// import adsListIdController from "../controllers/Ads/listAdsId.controller";

const routes = Router();

export const adsRoutes = () => {
  routes.post("/", adsCreateController);
  routes.get("/", adsGetController);
  //   routes.get("/:id", adsListIdController)

  return routes;
};
