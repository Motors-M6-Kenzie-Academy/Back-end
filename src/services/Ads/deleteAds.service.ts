import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
const adsDeleteService = async (id: string, userId: string) => {
  const adsRepository = AppDataSource.getRepository(Ads);
  const userRepository = AppDataSource.getRepository(User);

  const ads = await adsRepository.find({ relations: { user: true } });

  const adFound = ads.find((ad) => ad.id === id);

  if (!adFound) throw new AppError("Ad not found");

  const seller = await userRepository.findOneBy({ id: adFound.user.id });

  if (!seller) throw new AppError("Seller not found");

  if (seller.id === userId) {
    await adsRepository.delete(id);
  } else {
    throw new AppError("You don't have permission", 403);
  }
};
export default adsDeleteService;
