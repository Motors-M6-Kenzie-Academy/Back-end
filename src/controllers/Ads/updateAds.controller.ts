import { Request, Response } from "express";
import { IAdsUpdate } from "../../interfaces/ads";
import adsUpdateService from "../../services/Ads/updateAds.services";

const adsUpdateController = async (req: Request, res: Response) => {
  const newAdsData: IAdsUpdate = req.body;
  const adsId = req.params.id;
  //   const userId = req.user.id;

  const newads = await adsUpdateService(newAdsData, adsId);
  return res.status(200).json(newads);
};

export default adsUpdateController;
