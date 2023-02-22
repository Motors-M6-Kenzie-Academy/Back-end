import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { AppError } from "../../errors/appError";
import { IAdsRequest } from "../../interfaces/ads";
// import { IAddressUpdateRequest } from "../../interfaces/users";

const adsUpdateService = async (
  {
    description,
    cover,
    gallery_image,
    mileage,
    price,
    releaseYear,
    typeVehicle,
    typeAds,
  }: IAdsRequest,
  adsId: string
) => {
  const adsRepository = AppDataSource.getRepository(Ads);

  const ads = await adsRepository.find();

  const findAds = ads.find((elem) => elem.id === adsId);

  if (!findAds) throw new AppError("ads not found");

  await adsRepository.update(adsId, {
    description: description || findAds.description,
    cover: cover || findAds.cover,
    gallery_image: gallery_image || findAds.gallery_image,
    mileage: mileage || findAds.mileage,
    price: price || findAds.price,
    releaseYear: releaseYear || findAds.releaseYear,
    typeAds: typeAds || findAds.typeAds,
    typeVehicle: typeVehicle || typeVehicle,
  });

  const ad = await adsRepository.findOneBy({ id: adsId });

  return ad;
};

export default adsUpdateService;
