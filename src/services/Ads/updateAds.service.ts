import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
import { IAdsRequest } from "../../interfaces/ads";
// import { IAddressUpdateRequest } from "../../interfaces/users";

const adsUpdateService = async (
  {
    title,
    description,
    cover,
    gallery_image,
    mileage,
    price,
    releaseYear,
    typeVehicle,
    typeAds,
    isPublished,
  }: IAdsRequest,
  adsId: string,
  userId: string
) => {
  const adsRepository = AppDataSource.getRepository(Ads);
  const userRepository = AppDataSource.getRepository(User);

  const ads = await adsRepository.find({ relations: { user: true } });

  const findAds = ads.find((elem) => elem.id === adsId);

  if (!findAds) throw new AppError("ads not found");

  const seller = await userRepository.findOneBy({ id: findAds.user.id });

  if (!seller) throw new AppError("Seller not found");

  if (seller.id === userId) {
    await adsRepository.update(adsId, {
      title: title || findAds.title,
      description: description || findAds.description,
      cover: cover || findAds.cover,
      gallery_image: gallery_image || findAds.gallery_image,
      mileage: mileage || findAds.mileage,
      price: price || findAds.price,
      releaseYear: releaseYear || findAds.releaseYear,
      typeAds: typeAds,
      typeVehicle: typeVehicle || findAds.typeVehicle,
      isPublished: isPublished,
    });
  } else {
    throw new AppError("You do not have permission", 403);
  }

  const ad = await adsRepository.findOneBy({ id: adsId });

  return ad;
};

export default adsUpdateService;
