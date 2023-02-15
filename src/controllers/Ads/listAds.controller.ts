import { Request, Response } from "express";
import listAdsService from "../../services/Ads/listAds.services";

const listAdsController = async (req: Request, res: Response) => {
    const ads = await listAdsService()
    return res.json(ads)
}

export default listAdsController