import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { Images } from "../../entities/images.entities";
import { AppError } from "../../errors/appError";
import { IAdsUpdate } from "../../interfaces/ads";

const adsUpdateService = async (
  {
    description,
    cover,
    images,
    mileage,
    price,
    releaseYear,
    typeAds,
    typeVehicle,
  }: IAdsUpdate,
  adsId: string
) => {
  const adsRepository = AppDataSource.getRepository(Ads);

  const ads = await adsRepository.find();

  const imageRepository = AppDataSource.getRepository(Images);

  const findAds = ads.find((elem) => elem.id === adsId);

  if (!findAds) throw new AppError("Ads not found");

  // const newImage = new Images();
  // newImage.ads = findAds;

  if (images) {
    await imageRepository.clear();

    const newImages = await imageRepository.save(images);

    await adsRepository.update(adsId, {
      description: description ? description : findAds.description,
      cover: cover ? cover : findAds.cover,
      images: newImages,
      mileage: mileage ? mileage : findAds.mileage,
      price: price ? price : findAds.price,
      releaseYear: releaseYear ? releaseYear : findAds.releaseYear,
      typeVehicle: typeVehicle ? typeVehicle : findAds.typeVehicle,
      typeAds: typeAds ? typeAds : findAds.typeAds,
    });
  } else {
    await adsRepository.update(adsId, {
      description: description ? description : findAds.description,
      cover: cover ? cover : findAds.cover,
      images: findAds.images,
      mileage: mileage ? mileage : findAds.mileage,
      price: price ? price : findAds.price,
      releaseYear: releaseYear ? releaseYear : findAds.releaseYear,
      typeVehicle: typeVehicle ? typeVehicle : findAds.typeVehicle,
      typeAds: typeAds ? typeAds : findAds.typeAds,
    });
  }
  // const seller = await userRepository.findOneBy({ id: userId });

  const newAd = await adsRepository.findOneBy({ id: adsId });

  return newAd;
};

export default adsUpdateService;
