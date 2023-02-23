import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";

const listUserSellersService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find({
    where: { accountType: "Anunciante" },
  });
  return users;
};

export default listUserSellersService;
