import { Request, Response } from "express";
import listAdsIdService from "../../services/Ads/listAdsId.services";

const listAdsIdController = async (req: Request, res: Response) => {
    const id = req.params.id;
    const ads = await listAdsIdService(id);
    return res.json(ads)
}

export default listAdsIdController