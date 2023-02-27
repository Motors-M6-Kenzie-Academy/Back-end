import { Router } from "express";

import adsCreateController from "../controllers/Ads/createAds.controller";
import adsDeleteController from "../controllers/Ads/deleteAds.controller";
import adsGetController from "../controllers/Ads/listAds.controller";
import adsListIdController from "../controllers/Ads/listAdsId.controller";
import adsUpdateController from "../controllers/Ads/updateAds.controller";
import checkTokenMiddleware from "../middlewares/token/checkTokenMiddleware";

const routes = Router();

export const adsRoutes = () => {
  routes.post("/", checkTokenMiddleware, adsCreateController);
  routes.get("/", adsGetController);
  routes.get("/:id", adsListIdController);
  routes.patch("/:id", checkTokenMiddleware, adsUpdateController);
  routes.delete("/:id", checkTokenMiddleware, adsDeleteController);

  return routes;
};
