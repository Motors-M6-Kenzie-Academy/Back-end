import { Request, Response } from "express";
import listUserIdService from "../../services/User/listUserId.service";
import { instanceToPlain } from "class-transformer";

const userListIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await listUserIdService(id);
  return res.json(instanceToPlain(user));
};

export default userListIdController;
