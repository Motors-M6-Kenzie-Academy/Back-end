import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { Comment } from "../../entities/comments.entity";

const commentsGetService = async (adsId: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  //   const adsRepository = AppDataSource.getRepository(Ads);

  const comments = await commentRepository.find({
    where: { ad: { id: adsId } },
    relations: { ad: true },
  });

  return comments;
};

export default commentsGetService;
