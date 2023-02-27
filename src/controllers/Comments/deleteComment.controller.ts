import { Request, Response } from "express";
import commentsDeleteService from "../../services/Comments/deleteComment.service";

const commentsDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;
  await commentsDeleteService(id, userId);
  return res.status(204).send();
};

export default commentsDeleteController;
