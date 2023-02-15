import { Request, Response } from "express";
import listUserIdService from "../../services/User/listUserId.service";

const userListIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await listUserIdService(id);
  return res.json(user);
};

export default userListIdController;
