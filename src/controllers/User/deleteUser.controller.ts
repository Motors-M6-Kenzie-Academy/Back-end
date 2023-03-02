import { Request, Response } from "express";
import { deleteUserService } from "../../services/User/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const dataResponse = await deleteUserService({ id });

    return res.status(200).json(dataResponse);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ Error: error.message });
    }
  }
};
