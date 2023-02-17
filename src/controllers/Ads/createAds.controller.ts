import { Request, Response } from "express";
import { IAdsRequest } from "../../interfaces/ads";
import adsCreateService from "../../services/Ads/createAds.service";

const adsCreateController = async (req: Request, res: Response) => {
  const newAdsData: IAdsRequest = req.body;
  //   const userId = req.user.id;
  const newAds = await adsCreateService(newAdsData);
  return res.status(201).json(newAds);
};

export default adsCreateController;
