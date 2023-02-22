import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
const adsDeleteService = async (id: string) => {
  const adsRepository = AppDataSource.getRepository(Ads);
  await adsRepository.delete({ id });
  return true;
};
export default adsDeleteService;
