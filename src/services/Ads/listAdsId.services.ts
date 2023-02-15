import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { AppError } from "../../errors/appError";

const listAdsIdService = async (id: string): Promise<Ads> => {
    const adsRepository = AppDataSource.getRepository(Ads)
    const adsId = await adsRepository.findOneBy({id})

    if(!adsId){
        throw new AppError("Ads not found", 404)
    }

    return adsId
}

export default listAdsIdService