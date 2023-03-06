import { Request, Response } from "express";
import { ICommentRequest } from "../../interfaces/comments";
import commentUpdateService from "../../services/Comments/updateComment.service";

const commentsUpdateController = async (req: Request, res: Response) => {
  const newCommentData: ICommentRequest = req.body;
  const commentId = req.params.id;
  const userId = req.user.id;

  const newComment = await commentUpdateService(
    newCommentData,
    commentId,
    userId
  );
  return res.status(200).json(newComment);
};

export default commentsUpdateController;
