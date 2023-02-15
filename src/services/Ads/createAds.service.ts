import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { Images } from "../../entities/images.entities";
import { User } from "../../entities/user.entitie";
import { IAdsRequest } from "../../interfaces/ads";

const adsCreateService = async ({
  description,
  image,
  images,
  mileage,
  price,
  releaseYear,
  typeVehicle,
}: IAdsRequest) => {
  const adsRepository = AppDataSource.getRepository(Ads);
  const userRepository = AppDataSource.getRepository(User);
  const imageRepository = AppDataSource.getRepository(Images);

  // const seller = await userRepository.findOneBy({ id: userId });

  const newImages = await imageRepository.save(images);

  const newAds = {
    description,
    image,
    images: newImages,
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
