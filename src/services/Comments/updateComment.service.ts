import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
import { ICommentRequest } from "../../interfaces/comments";

const commentUpdateService = async (
  { content }: ICommentRequest,
  commentId: string,
  userId: string
) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);

  const comments = await commentRepository.find({ relations: { ad: true } });

  const findComment = comments.find((elem) => elem.id === commentId);

  if (!findComment) throw new AppError("comment not found");

  const owner = await userRepository.findOneBy({ id: findComment.user.id });

  if (!owner) throw new AppError("Owner not found");

  if (owner.id === userId) {
    await commentRepository.update(commentId, {
      content: content || findComment.content,
    });
  } else {
    throw new AppError("You do not have permission", 403);
  }

  const comment = await commentRepository.findOneBy({ id: commentId });

  return comment;
};

export default commentUpdateService;
