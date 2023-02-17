import { Router } from "express";

import adsCreateController from "../controllers/Ads/createAds.controller";
import adsDeleteController from "../controllers/Ads/deleteAds.controller";
import adsGetController from "../controllers/Ads/listAds.controller";
import adsListIdController from "../controllers/Ads/listAdsId.controller";
import adsUpdateController from "../controllers/Ads/updateAds.controller";

const routes = Router();

export const adsRoutes = () => {
  routes.post("/", adsCreateController);
  routes.get("/", adsGetController);
  routes.get("/:id", adsListIdController);
  routes.patch("/:id", adsUpdateController);
  routes.delete("/:id", adsDeleteController);

  return routes;
};
