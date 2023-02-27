import { Request, Response } from "express";
import adsDeleteService from "../../services/Ads/deleteAds.service";

const adsDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;
  await adsDeleteService(id, userId);
  return res.status(204).send();
};

export default adsDeleteController;
