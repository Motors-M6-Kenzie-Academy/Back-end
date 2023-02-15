import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";

const listAdsService = async (): Promise<Ads[]> => {
    const adsRepository = AppDataSource.getRepository(Ads)
    const ads = await adsRepository.find();
    
    return ads;
}

export default listAdsService