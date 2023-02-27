import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";

const adsGetService = async () => {
  const adsRepository = AppDataSource.getRepository(Ads);

  const ads = await adsRepository.find({ relations: { user: true } });

  return ads;
};

export default adsGetService;
