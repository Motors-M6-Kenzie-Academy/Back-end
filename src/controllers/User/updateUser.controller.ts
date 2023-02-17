import { Request, Response } from "express";
import { updateUserService } from "../../services/User/updateUser.services";

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { birthDate, cpf, description, email, name, phoneNumber } = req.body;
    const token = req.headers.authorization;
    const dataResponse = await updateUserService({
      token,
      birthDate,
      cpf,
      description,
      email,
      name,
      phoneNumber,
    });

    return res.status(200).json(dataResponse);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ Error: error.message });
    }
  }
};
