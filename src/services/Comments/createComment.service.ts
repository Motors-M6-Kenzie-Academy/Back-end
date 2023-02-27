import AppDataSource from "../../data-source";
import { Ads } from "../../entities/ads.entitie";
import { Comment } from "../../entities/comments.entity";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
import { IAdsRequest } from "../../interfaces/ads";
import { ICommentRequest } from "../../interfaces/comments";

const commentCreateService = async (
  newCommentData: ICommentRequest,
  userId: string,
  adsId: string
) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);
  const adsRepository = AppDataSource.getRepository(Ads);

  const seller = await userRepository.findOneBy({ id: userId });
  const adsFound = await adsRepository.findOneBy({ id: adsId });

  if (!adsFound) {
    throw new AppError("Ad not found", 404);
  }

  const newComment = commentRepository.create(newCommentData);

  newComment.user = seller!;
  newComment.ad = adsFound;
  await commentRepository.save(newComment);
  return newComment;
};

export default commentCreateService;
