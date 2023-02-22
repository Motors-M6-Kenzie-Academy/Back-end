import { Request, Response } from "express";
import listUserService from "../../services/User/listUser.service";
import { instanceToPlain } from "class-transformer";

const userListController = async (req: Request, res: Response) => {
  const users = await listUserService();
  return res.json(instanceToPlain(users));
};

export default userListController;
