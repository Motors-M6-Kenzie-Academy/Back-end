import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";

const commentsDeleteService = async (id: string, userId: string) => {
  const commentsRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);

  const comments = await commentsRepository.find({ relations: { user: true } });

  const commentFound = comments.find((comment) => comment.id === id);

  if (!commentFound) throw new AppError("Comment not found");

  const seller = await userRepository.findOneBy({ id: commentFound.user.id });

  if (!seller) throw new AppError("Seller not found");

  if (seller.id === userId) {
    await commentsRepository.delete(id);
  } else {
    throw new AppError("You don't have permission", 403);
  }
};

export default commentsDeleteService;
