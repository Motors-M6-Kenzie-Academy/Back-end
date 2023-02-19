import { Request, Response } from "express";
import { updateUserService } from "../../services/User/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { birthDate, cpf, description, email, name, phoneNumber } = req.body;
    const { id } = req.params;

    const dataResponse = await updateUserService({
      birthDate,
      cpf,
      description,
      email,
      name,
      phoneNumber,
      id,
    });

    return res.status(200).json(dataResponse);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ Error: error.message });
    }
  }
};
