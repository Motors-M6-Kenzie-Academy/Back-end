import { Request, Response } from "express";
import listUserService from "../../services/User/listUser.service";

const userListController = async (req: Request, res: Response) => {
  const users = await listUserService();
  return res.json(users);
};

export default userListController;
