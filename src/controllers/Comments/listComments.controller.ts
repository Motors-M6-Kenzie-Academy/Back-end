import { Request, Response } from "express";
import commentsGetService from "../../services/Comments/listComments.service";

const commentsGetController = async (req: Request, res: Response) => {
  const adsId = req.params.id;
  const comments = await commentsGetService(adsId);

  return res.status(200).json(comments);
};

export default commentsGetController;
