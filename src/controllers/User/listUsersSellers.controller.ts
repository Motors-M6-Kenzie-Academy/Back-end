import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listUserSellersService from "../../services/User/listUsersSellers.service";

const userSellersListController = async (req: Request, res: Response) => {
  const users = await listUserSellersService();
  return res.json(instanceToPlain(users));
};

export default userSellersListController;
