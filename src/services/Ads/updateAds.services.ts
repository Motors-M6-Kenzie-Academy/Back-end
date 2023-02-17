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
  const imagesRepository = AppDataSource.getRepository(Images);

  const newAd = await adsRepository.findOneBy({ id: adsId });
  let image = await imagesRepository.findOne({
    where: { ads: { id: adsId } },
  });

  if (!newAd) throw new Error("Ad not found");

  newAd.description = description || newAd.description;
  newAd.cover = cover || newAd.cover;
  newAd.mileage = mileage || newAd.mileage;
  newAd.price = price || newAd.price;
  newAd.releaseYear = releaseYear || newAd.releaseYear;
  newAd.typeAds = typeAds || newAd.typeAds;
  newAd.typeVehicle = typeVehicle || newAd.typeVehicle;

  // imagesAll.length = 0;

  // images?.forEach(image => imagesAll.push(image))

  // console.log(imagesAll, "IMAGES!!!!!");

  // newAd.images = images || newAd.images;

  return newAd;
};

export default adsUpdateService;
