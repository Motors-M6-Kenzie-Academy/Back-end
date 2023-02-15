import { Request, Response } from "express";
import adsGetService from "../../services/Ads/listAds.service";

const adsGetController = async (req: Request, res: Response) => {
  const ads = await adsGetService();

  return res.status(200).json(ads);
};

export default adsGetController;
