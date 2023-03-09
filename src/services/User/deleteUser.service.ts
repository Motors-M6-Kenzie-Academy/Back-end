import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entitie";
import { Ads } from "../../entities/ads.entitie";
import { Comment } from "../../entities/comments.entity";
import { User } from "../../entities/user.entitie";

type deleteUserProps = {
  id: string;
};

export const deleteUserService = async ({ id }: deleteUserProps) => {
  await AppDataSource.getRepository(Comment).delete({
    user: {
      id: id,
    },
  });
  await AppDataSource.getRepository(Ads).delete({
    user: {
      id: id,
    },
  });
  await AppDataSource.getRepository(Addresses).delete({
    userAddress: { id: id },
  });

  await AppDataSource.getRepository(User).delete({
    id: id,
  });

  return;
};
