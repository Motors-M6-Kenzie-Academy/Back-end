import { Request, Response } from "express";
import { createUserService } from "../../services/User/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const {
      accountType,
      birthDate,
      email,
      name,
      cpf,
      password,
      phoneNumber,
      description,
      houseNumber,
      complement,
      roadName,
      city,
      state,
      zipCode,
    } = req.body;

    const dataResponse = await createUserService({
      accountType,
      birthDate,
      email,
      name,
      cpf,
      password,
      phoneNumber,
      description,
      houseNumber,
      complement,
      city,
      roadName,
      state,
      zipCode,
    });

    return res.status(201).json(dataResponse);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ Error: error.message });
    }
  }
};
