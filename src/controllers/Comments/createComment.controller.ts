import { Request, Response } from "express";
import { ICommentRequest } from "../../interfaces/comments";
import commentCreateService from "../../services/Comments/createComment.service";

const commentCreateController = async (req: Request, res: Response) => {
  const newCommentData: ICommentRequest = req.body;
  const userId = req.user.id;
  const adsId = req.params.id;
  const newComment = await commentCreateService(newCommentData, userId, adsId);
  return res.status(201).json(newComment);
};

export default commentCreateController;
