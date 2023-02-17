import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { User } from "../../entities/user.entitie";
import { IAdsRequest } from "../../interfaces/ads";

const adsCreateService = async ({
  description,
  cover,
  gallery_image,
  mileage,
  price,
  releaseYear,
  typeVehicle,
}: IAdsRequest) => {
  const adsRepository = AppDataSource.getRepository(Ads);
  const userRepository = AppDataSource.getRepository(User);

  // const seller = await userRepository.findOneBy({ id: userId });

  const newAds = {
    description,
    cover,
    gallery_image,
    mileage,
    price,
    releaseYear,
    typeVehicle,
  };

  // newAds.user = seller!;
  await adsRepository.save(newAds);

  return newAds;
};

export default adsCreateService;
