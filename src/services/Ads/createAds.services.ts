import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
import { IAdsRequest } from "../../interfaces/ads";

const adsCreateService = async (newAdsData: IAdsRequest, userId: string) => {
  const adsRepository = AppDataSource.getRepository(Ads);
  const userRepository = AppDataSource.getRepository(User);

  const owner = await userRepository.findOneBy({ id: userId });

  const newAds = adsRepository.create(newAdsData);
  newAds.user = owner!;
  await adsRepository.save(newAds);
  return newAds;
};

export default adsCreateService;
